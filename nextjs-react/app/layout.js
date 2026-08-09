import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const siteUrl = "https://www.sevenseasbook.us";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Seven SEAS | Enterprise AI Architecture Framework",
    template: "%s | Seven SEAS",
  },
  description:
    "Seven SEAS is a practical enterprise AI architecture framework for designing dependable agentic systems, retrieval platforms, and production-ready AI applications.",
  keywords: [
    "Seven SEAS",
    "enterprise AI architecture",
    "agentic systems",
    "AI platform architecture",
    "retrieval augmented generation",
    "enterprise AI framework",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Seven SEAS | Enterprise AI Architecture Framework",
    description:
      "A premium blueprint for designing dependable AI systems with memory, retrieval, orchestration, policy controls, and measurable quality.",
    url: siteUrl,
    siteName: "Seven SEAS",
    type: "website",
    images: [{ url: "/images/hero-bg.png", width: 1200, height: 630, alt: "Seven SEAS enterprise AI architecture framework" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seven SEAS | Enterprise AI Architecture Framework",
    description:
      "A premium blueprint for designing dependable AI systems with memory, retrieval, orchestration, policy controls, and measurable quality.",
    images: ["/images/hero-bg.png"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Seven SEAS",
    url: siteUrl,
    description:
      "Seven SEAS is a practical enterprise AI architecture framework for building dependable agents, retrieval systems, and production-ready AI platforms.",
    sameAs: ["https://www.linkedin.com", "https://twitter.com"],
  };

  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content="#f8fcff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}