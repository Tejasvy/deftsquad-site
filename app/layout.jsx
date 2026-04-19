import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const TITLE = "DeftSquad — AI Solutions & IT Consulting";
const DESCRIPTION =
  "Production-grade AI capabilities — LLM copilots, RAG, agents, custom ML, MLOps — plus cloud-native IT consulting and managed services. Built for your stack, shipped to your users.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | DeftSquad" },
  description: DESCRIPTION,
  keywords: [
    "AI consulting",
    "LLM integration",
    "RAG",
    "AI agents",
    "MLOps",
    "custom ML",
    "fine-tuning",
    "cloud consulting",
    "IT services",
    "Google Cloud Partner",
    "DevSecOps",
    "microservices",
  ],
  authors: [{ name: "DeftSquad" }],
  creator: "DeftSquad",
  publisher: "DeftSquad",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "DeftSquad",
    title: TITLE,
    description:
      "Six production-grade AI capabilities plus cloud-native IT consulting. Built for your stack, shipped to your users.",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Six production-grade AI capabilities plus cloud-native IT consulting.",
  },
  alternates: { canonical: "/" },
};

export const viewport = {
  themeColor: "#FF3000",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DeftSquad",
  url: SITE_URL,
  logo: `${SITE_URL}/Deft_Squad.svg`,
  description:
    "Production-grade AI capabilities plus cloud-native IT consulting and managed services.",
  slogan: "AI Solutions & IT Consulting",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5005 W Royal Ln Suite 183k",
    addressLocality: "Irving",
    addressRegion: "TX",
    postalCode: "75063",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-469-599-4789",
    email: "info@deftsquad.com",
    contactType: "sales",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "Machine Learning Operations",
    "Cloud Computing",
    "Microservices",
    "DevSecOps",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="swiss-noise min-h-screen antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
