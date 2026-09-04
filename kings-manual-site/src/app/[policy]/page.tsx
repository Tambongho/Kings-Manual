import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";

const POLICIES = {
  privacy: { title: "Privacy Policy", intro: "We collect only the information needed to operate the site, deliver purchases, and improve the customer experience.", sections: [
    ["Information we receive", "Purchases are processed by our secure payment provider, which may provide order details such as your name, email, product purchased, and transaction status. We never receive or store your full payment-card details."],
    ["How information is used", "We use order information to deliver products, provide support, prevent fraud, and communicate essential purchase updates. Optional analytics measures aggregate site and checkout performance."],
    ["Sharing and retention", "Information is shared only with service providers needed to operate the store. We do not sell personal information. Records are retained only as reasonably necessary for support, accounting, legal, and fraud-prevention purposes."],
  ] },
  terms: { title: "Terms of Use", intro: "These terms explain the personal-use license included with every King’s Manual purchase.", sections: [
    ["Your license", "A purchase grants a non-exclusive, non-transferable license to use the purchased files personally on devices you control. Copyright ownership does not transfer to you."],
    ["Not permitted", "You may not resell, redistribute, publicly post, commercially reproduce, or make the files available through a shared library or download service."],
    ["Educational information", "The books provide general educational information, not medical, mental-health, legal, tax, or financial advice. Consult a qualified professional for advice about your circumstances."],
  ] },
  refunds: { title: "Refund Policy", intro: "We want customers to know exactly what they are buying and to receive the files they paid for.", sections: [
    ["Before purchasing", "Review the product description, complete table of contents, format, and free workbook before buying. All paid products are digital PDFs; no physical books are shipped."],
    ["Download or billing problems", "If a file is missing, corrupted, duplicated, or materially different from its description, email us with your purchase receipt. We will provide a working replacement or review the purchase for a refund."],
    ["Refund requests", "Because files are delivered immediately, change-of-mind refunds are not guaranteed. Eligibility and processing are handled through our payment provider and applicable consumer law. Contact us promptly so we can investigate."],
  ] },
} as const;

export function generateStaticParams() { return Object.keys(POLICIES).map((policy) => ({ policy })); }
export async function generateMetadata({ params }: { params: Promise<{ policy: string }> }): Promise<Metadata> {
  const { policy } = await params;
  const content = POLICIES[policy as keyof typeof POLICIES];
  return {
    title: content?.title ?? "Policy",
    description: content?.intro,
    alternates: { canonical: `/${policy}` },
  };
}

export default async function PolicyPage({ params }: { params: Promise<{ policy: string }> }) {
  const { policy } = await params; const content = POLICIES[policy as keyof typeof POLICIES]; if (!content) notFound();
  return <><header className="border-b border-line bg-paper-2"><div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5"><Link href="/" className="font-display text-lg text-ink"><span className="text-gold">THE</span> KING&rsquo;S MANUAL</Link><Link href="/" className="text-sm text-ink/65 hover:text-gold">Back to the Manual</Link></div></header>
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 md:py-24"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Customer information</p><h1 className="mt-4 font-display text-5xl text-ink">{content.title}</h1><p className="mt-5 text-lg leading-8 text-foreground/75">{content.intro}</p><div className="policy-copy mt-12 space-y-8 text-[16px] leading-7 text-foreground/78">{content.sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}<section><h2>Questions and requests</h2><p>Email <a href="mailto:info@kingsmanual.com">info@kingsmanual.com</a>. Effective August 27, 2026.</p></section></div></main><SiteFooter /></>;
}
