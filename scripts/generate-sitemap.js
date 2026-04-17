/**
 * Bilingual & Image Integrated Sitemap Generator — Danny Safaya Portfolio
 * Generates a consolidated XML sitemap with EN/DE hreflang and Image metadata.
 * Run: node scripts/generate-sitemap.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = "https://portfolio.danny-sec.workers.dev";

// Escapes reserved XML characters
const escapeXml = (str) =>
  str.replace(/&/g, "&amp;")
     .replace(/</g, "&lt;")
     .replace(/>/g, "&gt;")
     .replace(/"/g, "&quot;")
     .replace(/'/g, "&apos;");

// Properly encodes URLs (handling spaces and special chars)
const cleanUrl = (url) => encodeURI(url).replace(/&/g, "&amp;");

const TODAY = new Date().toISOString().split("T")[0];
const OUTPUT_PATH = path.join(__dirname, "../public/sitemap.xml");

// Define your images here to be injected into the main sitemap
const projectImages = [
  {
    loc: "/assets/profile-photo.png",
    title: "Danny Safaya – Profile Photo | Profilfoto",
    caption: "Danny Safaya, Security Engineer und Penetration Tester in Deutschland.",
  },
  {
    loc: "/assets/project-payment.jpg",
    title: "Secure E-Payment Gateway – PCI-DSS | Sicheres E-Payment-Gateway – PCI-DSS",
    caption: "PCI-DSS-compliant tokenisation blocking 95%+ attacks. 1st place, 100/100. | Platz 1, 100/100.",
  },
  {
    loc: "/assets/project-htb.jpg",
    title: "HTBHound – Hack The Box Enumeration Tool",
    caption: "Open-source subdomain & directory discovery for Hack The Box. | Open-Source Reconnaissance-Tool fuer HackTheBox.",
  },
  {
    loc: "/assets/project-network.jpg",
    title: "Network Security – Penetration Testing | Netzwerksicherheit",
    caption: "Enterprise network security and penetration testing projects.",
  },
  {
    loc: "/assets/project-code.jpg",
    title: "Security Code Review and Automation | Code-Review und Automatisierung",
    caption: "Custom exploit tools and automation scripts in Python, Bash, PowerShell.",
  },
  {
    loc: "/assets/project-linux.jpg",
    title: "Linux Security Automation Suite | Linux-Sicherheitsautomatisierung",
    caption: "Linux hardening and automation for penetration testing workflows.",
  },
  {
    loc: "/assets/project-privacy.jpg",
    title: "Kali Guardian – Privacy and Security | Datenschutz und Sicherheit",
    caption: "Privacy-focused security tooling built on Kali Linux.",
  }
];

const urls = [
  { loc: "/", priority: "1.0", changefreq: "weekly", images: projectImages },
];

const generateConsolidatedSitemap = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n\n';

  urls.forEach((url) => {
    const enHref = `${DOMAIN}/?lang=en`;
    const deHref = `${DOMAIN}/?lang=de`;
    const defaultHref = `${DOMAIN}/`;

    xml += "  <url>\n";
    xml += `    <loc>${DOMAIN}${url.loc}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    
    // Multilingual support
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enHref}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="de" href="${deHref}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultHref}" />\n`;

    // Integrated Images
    if (url.images && url.images.length > 0) {
      url.images.forEach((img) => {
        xml += "    <image:image>\n";
        xml += `      <image:loc>${cleanUrl(`${DOMAIN}${img.loc}`)}</image:loc>\n`;
        xml += `      <image:title>${escapeXml(img.title)}</image:title>\n`;
        xml += `      <image:caption>${escapeXml(img.caption)}</image:caption>\n`;
        xml += "    </image:image>\n";
      });
    }

    xml += "  </url>\n\n";
  });

  xml += "</urlset>";
  return xml;
};

try {
  fs.writeFileSync(OUTPUT_PATH, generateConsolidatedSitemap());
  
  // Clean up the old separate image sitemap if it exists to prevent Search Console confusion
  const OLD_IMAGE_SITEMAP = path.join(__dirname, "../public/sitemap-images.xml");
  if (fs.existsSync(OLD_IMAGE_SITEMAP)) {
    fs.unlinkSync(OLD_IMAGE_SITEMAP);
  }

  console.log("✅ Consolidated Sitemap generated successfully!");
  console.log(`   Path:   ${OUTPUT_PATH}`);
  console.log(`   Domain: ${DOMAIN}`);
} catch (err) {
  console.error("❌ Error generating sitemap:", err);
  process.exit(1);
}