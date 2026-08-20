import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getProduct } from "@/lib/products";
import { PRODUCT_FILES } from "@/lib/fulfillment";

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");
  if (!sessionId) {
    return NextResponse.json({ error: "Missing session_id." }, { status: 400 });
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const productSlug = session.metadata?.product_slug;
    const product = productSlug ? getProduct(productSlug) : undefined;

    if (session.payment_status !== "paid" || !product) {
      return NextResponse.json(
        { error: "Order not found or not paid." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      productTitle: product.title,
      email: session.customer_details?.email ?? null,
      files: PRODUCT_FILES[productSlug!] ?? [],
    });
  } catch {
    return NextResponse.json({ error: "Unable to load order." }, { status: 500 });
  }
}
