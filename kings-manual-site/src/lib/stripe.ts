import Stripe from "stripe";

let stripe: Stripe | null = null;

/**
 * Lazily-constructed Stripe client. Reads STRIPE_SECRET_KEY from the
 * environment at call time (not at module load) so the app can build/boot
 * even before the key is configured in Vercel.
 */
export function getStripe(): Stripe {
  if (!stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error(
        "STRIPE_SECRET_KEY is not set. Add it in your Vercel project's Environment Variables."
      );
    }
    stripe = new Stripe(key);
  }
  return stripe;
}
