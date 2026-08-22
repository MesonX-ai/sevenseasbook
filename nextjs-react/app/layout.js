import "./globals.css";
import "./ocean.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import RevealOnScroll from "./components/RevealOnScroll";
import CardSpotlight from "./components/CardSpotlight";

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
        <meta name="theme-color" content="#ddf1fc" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){function set(){document.documentElement.setAttribute("data-ocean-theme","sunny");}try{if(localStorage.getItem("sevenseas-ocean-theme")==="midnight"){return;}set();}catch(e){set();}})();',
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="liquid-bg" aria-hidden="true">
          <span className="liquid-orb liquid-orb-1" />
          <span className="liquid-orb liquid-orb-2" />
          <span className="liquid-orb liquid-orb-3" />
          <span className="liquid-orb liquid-orb-4" />
        </div>
        <SiteHeader />
        {children}
        <RevealOnScroll />
        <CardSpotlight />
        <SiteFooter />
        <svg className="liquid-glass-defs" width="0" height="0" aria-hidden="true" focusable="false">
          <defs>
            <filter id="lg-refract" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.009 0.013" numOctaves="2" seed="7" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="16" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>
      </body>
    </html>
  );
}