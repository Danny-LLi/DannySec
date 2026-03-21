/**
 * Advanced Bilingual SEO Component — Danny Safaya Portfolio
 * Supports full English + German meta, Open Graph, Twitter Card,
 * JSON-LD structured data, hreflang, and all technical SEO signals.
 * Uses react-helmet-async.
 */

import { Helmet } from "react-helmet-async";
import { seoConfig } from "../config/seo-config";

type SectionKey =
  | "home"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "education"
  | "certifications"
  | "volunteer"
  | "awards"
  | "contact";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  section?: SectionKey;
  lang?: "en" | "de";
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  noIndex?: boolean;
  canonical?: string;
  structuredData?: Record<string, unknown>;
}

export const SEO = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = "website",
  section = "home",
  lang = "en",
  article,
  noIndex = false,
  canonical,
  structuredData,
}: SEOProps) => {
  const sectionCfg = (seoConfig as Record<string, unknown>)[section] as Record<string, unknown> | undefined
    ?? (seoConfig.home as unknown as Record<string, unknown>);

  // Pick German or English fields
  const isDE = lang === "de";
  const pageTitle = title
    ?? (isDE ? (sectionCfg.titleDE as string) : undefined)
    ?? (sectionCfg.title as string)
    ?? seoConfig.site.name;

  const pageDescription = description
    ?? (isDE ? (sectionCfg.descriptionDE as string) : undefined)
    ?? (sectionCfg.description as string)
    ?? "";

  const pageKeywords: string[] =
    keywords.length > 0 ? keywords : ((sectionCfg.keywords as string[]) ?? []);

  const pageUrl = url ?? `${seoConfig.site.url}${section !== "home" ? `/#${section}` : ""}`;
  const ogCfg = sectionCfg.openGraph as Record<string, string> | undefined;
  const pageImage =
    image ??
    `${seoConfig.site.url}${ogCfg?.image ?? "/og-image.jpg"}`;
  const canonicalUrl = canonical ?? pageUrl;

  const twitterCfg = sectionCfg.twitter as Record<string, string> | undefined;

  const allStructuredData = [
    seoConfig.structuredData.person,
    seoConfig.structuredData.website,
    seoConfig.structuredData.professionalService,
    seoConfig.structuredData.breadcrumb,
    ...(structuredData ? [structuredData] : []),
  ];

  return (
    <Helmet>
      {/* ── HTML lang attribute ── */}
      <html lang={lang} />

      {/* ── Primary Meta ── */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords.join(", ")} />
      <meta name="author" content={seoConfig.advancedMeta.author} />
      <link rel="canonical" href={canonicalUrl} />

      {/* ── Robots ── */}
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : seoConfig.advancedMeta.robots}
      />
      <meta name="googlebot" content={seoConfig.advancedMeta.googlebot} />
      <meta name="bingbot" content={seoConfig.advancedMeta.bingbot} />

      {/* ── Geo Targeting ── */}
      <meta name="geo.region" content={seoConfig.advancedMeta.geo.region} />
      <meta name="geo.placename" content={seoConfig.advancedMeta.geo.placename} />
      <meta name="geo.position" content={seoConfig.advancedMeta.geo.position} />
      <meta name="ICBM" content={seoConfig.advancedMeta.geo.position} />

      {/* ── Language / Copyright ── */}
      <meta name="language" content={seoConfig.advancedMeta.language} />
      <meta name="copyright" content={seoConfig.advancedMeta.copyright} />
      <meta name="revisit-after" content={seoConfig.advancedMeta.revisitAfter} />
      <meta name="rating" content={seoConfig.advancedMeta.rating} />

      {/* ── Open Graph ── */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:alt" content={ogCfg?.imageAlt ?? pageTitle} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={isDE ? seoConfig.site.nameDE : seoConfig.site.name} />
      <meta property="og:locale" content={isDE ? seoConfig.site.alternateLocale : seoConfig.site.locale} />
      <meta
        property="og:locale:alternate"
        content={isDE ? seoConfig.site.locale : seoConfig.site.alternateLocale}
      />

      {/* ── Article OG ── */}
      {type === "article" && article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags?.map((tag) => (
            <meta property="article:tag" content={tag} key={tag} />
          ))}
        </>
      )}

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content={twitterCfg?.card ?? "summary_large_image"} />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={twitterCfg?.title ?? pageTitle} />
      <meta name="twitter:description" content={twitterCfg?.description ?? pageDescription} />
      <meta name="twitter:image" content={twitterCfg?.image ?? pageImage} />
      <meta name="twitter:creator" content={twitterCfg?.creator ?? "@DannySafaya"} />
      <meta name="twitter:site" content={twitterCfg?.site ?? "@DannySafaya"} />

      {/* ── LinkedIn ── */}
      <meta
        property="og:see_also"
        content="https://www.linkedin.com/in/danny-safaya-61302a218/"
      />

      {/* ── Mobile ── */}
      <meta name="viewport" content={seoConfig.advancedMeta.viewport} />
      <meta name="mobile-web-app-capable" content={seoConfig.advancedMeta.mobileWebAppCapable} />
      <meta name="apple-mobile-web-app-capable" content={seoConfig.advancedMeta.mobileWebAppCapable} />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content={seoConfig.advancedMeta.appleMobileWebAppStatusBarStyle}
      />
      <meta
        name="apple-mobile-web-app-title"
        content={seoConfig.advancedMeta.appleMobileWebAppTitle}
      />

      {/* ── Theme Color ── */}
      <meta name="theme-color" content={seoConfig.advancedMeta.themeColor} />
      <meta name="msapplication-TileColor" content={seoConfig.advancedMeta.msApplicationTileColor} />

      {/* ── hreflang ── */}
      {seoConfig.hreflang.map(({ lang: l, url: u }) => (
        <link key={l} rel="alternate" hrefLang={l} href={u} />
      ))}

      {/* ── Performance preconnects ── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* ── JSON-LD Structured Data ── */}
      {allStructuredData.map((data, i) => (
        <script type="application/ld+json" key={`sd-${i}`}>
          {JSON.stringify(data)}
        </script>
      ))}

      {/* ── Security ── */}
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />

      {/* ── Misc ── */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
    </Helmet>
  );
};

export default SEO;