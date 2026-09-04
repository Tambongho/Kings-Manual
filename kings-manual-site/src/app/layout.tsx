import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import Analytics from "@/components/Analytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", display: "swap" });

const SITE_URL = "https://kingsmanual.com";

// Same Pixel already configured under Gumroad's third-party analytics
// (app.gumroad.com/settings/third_party_analytics), so site visits and
// Gumroad checkouts land in one unified Meta Pixel / Events Manager view.
const META_PIXEL_ID = "1199907354282353";

const TITLE = "The King's Manual | The Complete Encyclopedia of Men";
const DESCRIPTION =
  "A three-volume digital encyclopedia for men covering biology, psychology, history, philosophy, relationships, work, wealth, fatherhood, and legacy.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — The King's Manual",
  },
  description: DESCRIPTION,
  keywords: [
    "book for men",
    "manhood",
    "encyclopedia of men",
    "self improvement for men",
    "male biology and psychology",
    "books about masculinity",
    "men's personal development books",
    "men's relationships and career",
    "digital encyclopedia for men",
    "The King's Manual",
  ],
  authors: [{ name: "The King's Manual" }],
  creator: "The King's Manual",
  publisher: "The King's Manual",
  category: "Books",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "The King's Manual",
    locale: "en_US",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/covers/bundle-3d.webp",
        width: 1421,
        height: 809,
        alt: "The King's Manual — The Complete 3-Volume Set",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/covers/bundle-3d.webp"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport = {
  themeColor: "#141615",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
