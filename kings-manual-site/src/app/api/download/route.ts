import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { getStripe } from "@/lib/stripe";
import { PRODUCT_FILES } from "@/lib/fulfillment";

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");
  const file = request.nextUrl.searchParams.get("file");

  if (!sessionId || !file) {
    return NextResponse.json(
      { error: "Missing session_id or file." },
      { status: 400 }
    );
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "This order has not been paid yet." },
        { status: 403 }
      );
    }

    const productSlug = session.metadata?.product_slug;
    const allowedFiles = productSlug ? PRODUCT_FILES[productSlug] : undefined;

    if (!allowedFiles || !allowedFiles.includes(file)) {
      return NextResponse.json(
        { error: "This file is not included with your order." },
        { status: 403 }
      );
    }

    // file is validated against an allowlist derived from Stripe metadata,
    // so this is not attacker-controlled path traversal.
    const filePath = path.join(process.cwd(), "files", file);
    const buffer = await readFile(filePath);

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${file}"`,
      },
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unable to process download.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
