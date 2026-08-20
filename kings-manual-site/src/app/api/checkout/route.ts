import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getProduct } from "@/lib/products";

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json();
    const product = getProduct(slug);

    if (!product) {
      return NextResponse.json({ error: "Unknown product." }, { status: 400 });
    }

    const origin =
      request.headers.get("origin") ??
      process.env.NEXT_PUBLIC_SITE_URL ??
      "https://kingsmanual.com";

    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.title,
              description: product.subtitle,
              images: [`${origin}${product.cover.replace(/\.webp$/, ".webp")}`],
            },
            unit_amount: Math.round(product.price * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/products/${product.slug}`,
      metadata: {
        product_slug: product.slug,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unable to start checkout.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
