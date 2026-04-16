/**
 * Bilingual Sitemap Generator — Danny Safaya Portfolio
 * Generates XML sitemaps for EN + DE with hreflang annotations
 * Run: node scripts/generate-sitemap.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = "https://portfolio.danny-sec.workers.dev";

const escapeXml = (str) =>
  str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const TODAY = new Date().toISOString().split("T")[0];
const OUTPUT_PATH = path.join(__dirname, "../public/sitemap.xml");
const IMAGE_OUTPUT_PATH = path.join(__dirname, "../public/sitemap-images.xml");

// Only real crawlable pages — no hash fragment URLs
const urls = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
];

const generateSitemap = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n\n';

  urls.forEach((url) => {
    const enHref = `${DOMAIN}/?lang=en`;
    const deHref = `${DOMAIN}/?lang=de`;
    const defaultHref = `${DOMAIN}/`;

    xml += "  <url>\n";
    xml += `    <loc>${DOMAIN}${url.loc}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en"        href="${enHref}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="de"        href="${deHref}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultHref}" />\n`;
    xml += "  </url>\n\n";
  });

  xml += "</urlset>";
  return xml;
};

const generateImageSitemap = () => {
  // All images under the single real page URL "/"
  const images = [
    {
      loc: "/og-image.jpg",
      title: "Danny Safaya – Security Engineer & Penetration Tester | Germany / Deutschland",
      caption:
        "Professional cybersecurity portfolio: PTES, SIEM, EDR, Zero Trust, PCI-DSS. | Professionelles Cybersecurity-Portfolio.",
    },
    {
      loc: "/profile-photo.png",
      title: "Danny Safaya – Profile Photo | Profilfoto",
      caption: "Security Engineer und Penetration Tester in Deutschland.",
    },
    {
      loc: "/assets/project-payment.jpg",
      title: "Secure E-Payment Gateway – PCI-DSS | Sicheres E-Payment-Gateway – PCI-DSS",
      caption:
        "PCI-DSS-compliant tokenisation blocking 95%+ attacks. 1st place, 100/100. | Platz 1, 100/100.",
    },
    {
      loc: "/assets/project-htb.jpg",
      title: "HTBHound – Hack The Box Enumeration Tool",
      caption:
        "Open-source subdomain & directory discovery for Hack The Box. | Open-Source Reconnaissance-Tool für HackTheBox.",
    },
    {
      loc: "/assets/project-network.jpg",
      title: "Network Security – Penetration Testing | Netzwerksicherheit",
      caption: "Enterprise network security and penetration testing projects.",
    },
    {
      loc: "/assets/project-code.jpg",
      title: "Security Code Review & Automation | Code-Review & Automatisierung",
      caption:
        "Custom exploit tools and automation scripts in Python, Bash, PowerShell.",
    },
    {
      loc: "/assets/project-linux.jpg",
      title: "Linux Security Automation Suite | Linux-Sicherheitsautomatisierung",
      caption: "Linux hardening and automation for penetration testing workflows.",
    },
    {
      loc: "/assets/project-privacy.jpg",
      title: "Kali Guardian – Privacy & Security | Datenschutz & Sicherheit",
      caption: "Privacy-focused security tooling built on Kali Linux.",
    },
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n\n';

  xml += "  <url>\n";
  xml += `    <loc>${DOMAIN}/</loc>\n`;
  images.forEach((img) => {
    xml += "    <image:image>\n";
    xml += `      <image:loc>${DOMAIN}${img.loc}</image:loc>\n`;
    xml += `      <image:title>${escapeXml(img.title)}</image:title>\n`;
    xml += `      <image:caption>${escapeXml(img.caption)}</image:caption>\n`;
    xml += "    </image:image>\n";
  });
  xml += "  </url>\n\n";

  xml += "</urlset>";
  return xml;
};

try {
  fs.writeFileSync(OUTPUT_PATH, generateSitemap());
  fs.writeFileSync(IMAGE_OUTPUT_PATH, generateImageSitemap());
  console.log("✅ Sitemaps generated successfully!");
  console.log(`   Main sitemap:  ${OUTPUT_PATH}`);
  console.log(`   Image sitemap: ${IMAGE_OUTPUT_PATH}`);
  console.log(`   Domain:        ${DOMAIN}`);
  console.log(`   Date:          ${TODAY}`);
} catch (err) {
  console.error("❌ Error generating sitemaps:", err);
  process.exit(1);
}