/**
 * Advanced Bilingual SEO Configuration — Danny Safaya
 * Security Engineer · Penetration Tester · Red Team Specialist
 * Target: DACH Region (DE/AT/CH) + International English-speaking markets
 * URL: https://portfolio.danny-sec.workers.dev/
 *
 * Strategy:
 *  - Every section ships BOTH an `en` and a `de` variant
 *  - Keywords are drawn directly from CV content (roles, tools, employers,
 *    projects, certifications, compliance frameworks, soft skills)
 *  - Structured data covers Person, ProfessionalService, WebSite, BreadcrumbList
 *  - hreflang covers en / de / x-default
 */

export const seoConfig = {
  // ─── Base Site ────────────────────────────────────────────────────────────
  site: {
    name: "Danny Safaya – Security Engineer & Penetration Testing Expert",
    nameDE:
      "Danny Safaya – Security Engineer & Penetration-Testing-Experte",
    url: "https://portfolio.danny-sec.workers.dev",
    author: "Danny Safaya",
    locale: "en_US",
    alternateLocale: "de_DE",
  },

  // ─── Home ─────────────────────────────────────────────────────────────────
  home: {
    // English
    title:
      "Danny Safaya | Security Engineer | Penetration Tester | Germany",
    description:
      "Danny Safaya — Security Engineer and Penetration Tester with 3+ years securing telecom infrastructure, payment systems and enterprise networks. Expert in PTES, SIEM, EDR, Zero Trust. PCI-DSS payment gateway (100/100). Top 10% graduate. Based in Germany, eligible to work in the EU.",
    // German
    titleDE:
      "Danny Safaya | Security Engineer | Penetration Tester | Deutschland",
    descriptionDE:
      "Danny Safaya – Security Engineer und Penetration Tester mit über 3 Jahren Erfahrung in der Absicherung von Telekommunikationsinfrastrukturen, Zahlungssystemen und Unternehmensnetzwerken. Spezialist für PTES, SIEM, EDR, Zero-Trust. PCI-DSS-Zahlungs-Gateway (100/100). Top-10-%-Absolvent. In Deutschland ansässig, arbeitsberechtigt.",
    keywords: [
      // ── English primary ──
      "Danny Safaya",
      "security engineer Germany",
      "penetration tester Germany",
      "penetration tester Deutschland",
      "cybersecurity expert Germany",
      "ethical hacker Germany",
      "red team specialist",
      "offensive security engineer",
      "defensive security engineer",
      // ── German primary ──
      "Security Engineer Deutschland",
      "Penetration Tester Deutschland",
      "Cybersecurity Experte Deutschland",
      "IT-Sicherheitsexperte",
      "Penetrationstester",
      "Ethical Hacker Deutschland",
      "Red Team Spezialist",
      // ── Technical — EN ──
      "PTES penetration testing",
      "SIEM SOAR engineer",
      "EDR deployment",
      "zero trust architecture",
      "API security testing",
      "vulnerability assessment",
      "incident response specialist",
      "APT simulation",
      "OSINT expert",
      "SAST DAST testing",
      "DevSecOps engineer",
      "Kubernetes security",
      // ── Technical — DE ──
      "PTES Penetrationstests",
      "Zero-Trust-Architektur",
      "Schwachstellenanalyse",
      "API-Sicherheitsprüfung",
      "Incident Response",
      "Bedrohungsmodellierung",
      "Honeypo-Deployment",
      "DLP-Maßnahmen",
      // ── Tools ──
      "Burp Suite expert",
      "Metasploit framework",
      "Nmap",
      "Nessus",
      "Acunetix",
      "Wireshark",
      "Postman API security",
      // ── Compliance — EN ──
      "PCI-DSS compliance",
      "ISO 27001 certified",
      "OWASP security",
      "GDPR compliance",
      "HIPAA security",
      "MITRE ATT&CK framework",
      // ── Compliance — DE ──
      "PCI-DSS konform",
      "ISO 27001 zertifiziert",
      "DSGVO Compliance",
      "MITRE ATT&CK Framework",
      // ── Employers / Projects ──
      "Syriatel security engineer",
      "Assistant Agency pentester",
      "Mudar Abbas Technology MAT",
      "HTBHound",
      "Hack The Box",
      "secure e-payment gateway",
      "tokenization architecture",
      // ── Scripting / Dev ──
      "Python security automation",
      "Bash scripting cybersecurity",
      "PowerShell security",
      "PHP security development",
      "CI/CD security pipeline",
      // ── Location ──
      "cybersecurity Germany",
      "penetration testing Germany",
      "Security Engineer Deutschland",
      "IT-Sicherheit Deutschland",
      "Cybersecurity DACH",
      "infosec professional Germany",
    ],
    openGraph: {
      type: "website",
      title:
        "Danny Safaya – Security Engineer & Penetration Tester | Germany",
      description:
        "3+ years securing telecom, payment & enterprise systems. PTES · SIEM · EDR · Zero Trust · PCI-DSS (100/100) · Top 10% graduate. Germany.",
      image: "https://portfolio.danny-sec.workers.dev/og-image.jpg",
      imageAlt:
        "Danny Safaya – Security Engineer specialising in Penetration Testing, Germany",
    },
    twitter: {
      card: "summary_large_image",
      site: "@DannySafaya",
      creator: "@DannySafaya",
      title: "Danny Safaya | Security Engineer | Penetration Tester | Germany",
      description:
        "Security Engineer · 3+ years · PTES, SIEM, EDR, Zero Trust, PCI-DSS · Top 10% graduate · Based in Germany.",
      image: "https://portfolio.danny-sec.workers.dev/twitter-card.jpg",
    },
  },

  // ─── About ────────────────────────────────────────────────────────────────
  about: {
    title:
      "About Danny Safaya – Cybersecurity Expert & Security Engineer | Germany",
    description:
      "Top 10% Software Engineering graduate (74.4 %). Master's in Web Science. 3+ years penetration testing, zero-trust architecture, DLP, EDR and security team leadership at Syriatel (Syria's largest telecom). Germany, EU work-eligible.",
    titleDE:
      "Über Danny Safaya – Cybersecurity-Experte & Security Engineer | Deutschland",
    descriptionDE:
      "Top-10-%-Absolvent im Software-Engineering (74,4 %). Master Web Science. Über 3 Jahre Penetrationstests, Zero-Trust-Architektur, DLP, EDR und Führung eines Sicherheitsteams bei Syriatel (größter syrischer Telekommunikationsanbieter). In Deutschland ansässig, arbeitsberechtigt.",
    keywords: [
      "Danny Safaya background",
      "cybersecurity career profile",
      "security engineer biography",
      "penetration testing experience",
      "software engineering security graduate",
      "top 10 percent cybersecurity graduate",
      "Syriatel security engineer",
      "telecom security specialist",
      "zero trust implementation",
      "DLP data loss prevention",
      "EDR endpoint detection response",
      "security team leadership",
      // DE
      "Danny Safaya Profil",
      "Cybersecurity Karriere",
      "Security Engineer Lebenslauf",
      "Penetrationstest Erfahrung",
      "Sicherheitsteam Führung",
      "Telekommunikation Sicherheit",
      "Zero-Trust-Implementierung",
      "Syriatel Sicherheitsexperte",
    ],
  },

  // ─── Skills ───────────────────────────────────────────────────────────────
  skills: {
    title:
      "Cybersecurity Skills – Penetration Testing · SIEM · EDR · Zero Trust | Danny Safaya",
    description:
      "Full offensive & defensive skill set: PTES · Red Teaming · APT Simulation · OSINT · SAST/DAST · SIEM · SOAR · EDR · DLP · WAF · IDS/IPS · NAC · Zero Trust · ISO 27001 · PCI-DSS · OWASP · GDPR · MITRE ATT&CK · Burp Suite · Metasploit · Nmap · Nessus · Python · Bash · PowerShell · DevSecOps.",
    titleDE:
      "Cybersecurity-Kenntnisse – Penetrationstests · SIEM · EDR · Zero Trust | Danny Safaya",
    descriptionDE:
      "Vollständiges offensives und defensives Skill-Set: PTES · Red Teaming · APT-Simulation · OSINT · SAST/DAST · SIEM · SOAR · EDR · DLP · WAF · IDS/IPS · NAC · Zero Trust · ISO 27001 · PCI-DSS · OWASP · DSGVO · MITRE ATT&CK · Burp Suite · Metasploit · Nmap · Nessus · Python · Bash · PowerShell · DevSecOps.",
    keywords: [
      // Offensive
      "penetration testing PTES",
      "red team operations",
      "APT simulation",
      "social engineering testing",
      "OSINT techniques",
      "SAST DAST security testing",
      // Defensive
      "SIEM implementation",
      "SOAR automation",
      "EDR endpoint detection",
      "DLP data loss prevention",
      "WAF web application firewall",
      "IDS IPS intrusion detection",
      "NAC network access control",
      "zero trust architecture",
      "incident response",
      "ISMS information security",
      // Tools
      "Burp Suite web security",
      "Metasploit exploitation",
      "Nmap network scanning",
      "Nessus vulnerability scanner",
      "Acunetix web scanner",
      "Wireshark packet analysis",
      "Postman API testing",
      // Dev
      "Python security scripting",
      "Bash automation",
      "PowerShell security",
      "PHP web security",
      "DevSecOps pipeline",
      "Kubernetes security hardening",
      // Compliance
      "ISO 27001 compliance",
      "PCI-DSS payment security",
      "OWASP top 10",
      "GDPR data protection",
      "HIPAA healthcare security",
      "MITRE ATT&CK",
      // DE
      "Penetrationstest Methodik",
      "Red-Team-Operationen",
      "SIEM Implementierung",
      "EDR Endpoint-Schutz",
      "Zero-Trust-Netzwerk",
      "Schwachstellenmanagement",
      "ISO 27001 Konformität",
      "DSGVO Datenschutz",
    ],
  },

  // ─── Experience ───────────────────────────────────────────────────────────
  experience: {
    title:
      "Professional Experience – Security Engineer & Penetration Testing Team Lead | Danny Safaya",
    description:
      "Security Engineer at Syriatel (EDR · DLP · Zero Trust · honeypot deployment · threat modelling · 2023-2025). Penetration Testing Team Lead at Assistant Agency UAE (white-box/grey-box/black-box · ISO 27001 · GDPR · 2023-2024). 50+ pen tests at Mudar Abbas Technology (XSS · SQLi · CSRF · SSRF · Android/iOS · PTES · 2021-2023).",
    titleDE:
      "Berufserfahrung – Security Engineer & Penetration-Testing-Teamleiter | Danny Safaya",
    descriptionDE:
      "Security Engineer bei Syriatel (EDR · DLP · Zero Trust · Honeypot-Deployment · Bedrohungsmodellierung · 2023–2025). Penetration-Testing-Teamleiter bei Assistant Agency VAE (White-Box/Grey-Box/Black-Box · ISO 27001 · DSGVO · 2023–2024). Über 50 Penetrationstests bei Mudar Abbas Technology (XSS · SQL-Injection · CSRF · SSRF · Android/iOS · PTES · 2021–2023).",
    keywords: [
      // EN
      "Syriatel security engineer",
      "Assistant Agency penetration tester UAE",
      "Mudar Abbas Technology MAT",
      "penetration testing team lead",
      "EDR honeypot deployment",
      "zero trust implementation",
      "threat modelling enterprise",
      "DLP cross-team collaboration",
      "ISO 27001 GDPR compliance",
      "white-box grey-box black-box pentest",
      "API security testing experience",
      "web application penetration testing",
      "mobile penetration testing Android iOS",
      "XSS CSRF SQLi SSRF exploitation",
      "PTES standard engagements",
      "security awareness programs",
      "vulnerability remediation",
      "technical executive reporting",
      "50+ penetration tests",
      // DE
      "Syriatel Security Engineer Erfahrung",
      "Penetrationstests Teamleiter",
      "EDR Honeypot Implementierung",
      "Zero-Trust-Modell Umsetzung",
      "Bedrohungsmodellierung Unternehmen",
      "ISO 27001 DSGVO Compliance",
      "White-Box Grey-Box Black-Box Pentest",
      "API-Sicherheitsprüfung",
      "Mobile Penetrationstest Android iOS",
      "XSS SQL-Injection CSRF SSRF",
      "Sicherheits-Awareness-Programme",
      "Schwachstellenbehebung",
    ],
  },

  // ─── Projects ─────────────────────────────────────────────────────────────
  projects: {
    title:
      "Cybersecurity Projects – PCI-DSS Payment Gateway · HTBHound | Danny Safaya",
    description:
      "Secure E-Payment Gateway: PCI-DSS-compliant tokenisation architecture blocking 95%+ attack vectors — awarded 1st place with perfect score 100/100. HTBHound: open-source recon tool for Hack The Box automating subdomain & directory discovery. Additional projects on GitHub.",
    titleDE:
      "Cybersecurity-Projekte – PCI-DSS-Zahlungs-Gateway · HTBHound | Danny Safaya",
    descriptionDE:
      "Sicheres E-Payment-Gateway: PCI-DSS-konformes Tokenisierungs-Gateway, das über 95 % gängiger Angriffsvektoren abwehrt – Platz 1 mit Höchstpunktzahl 100/100. HTBHound: Open-Source-Reconnaissance-Tool für HackTheBox zur automatisierten Erkennung von Subdomains und versteckten Verzeichnissen. Weitere Projekte auf GitHub.",
    keywords: [
      // EN
      "secure e-payment gateway project",
      "PCI-DSS compliant payment system",
      "tokenization architecture security",
      "95% attack vector prevention",
      "university capstone 100/100",
      "HTBHound open source tool",
      "Hack The Box enumeration tool",
      "subdomain discovery automation",
      "hidden directory enumeration",
      "security tool development Python",
      "GitHub cybersecurity projects",
      "open source penetration testing tools",
      // DE
      "Sicheres E-Payment-Gateway Projekt",
      "PCI-DSS konformes Zahlungssystem",
      "Tokenisierungsarchitektur",
      "Angriffsvektoren Prävention",
      "HTBHound Open-Source-Tool",
      "HackTheBox Reconnaissance-Tool",
      "Subdomain-Erkennung automatisiert",
      "GitHub Sicherheitsprojekte",
    ],
  },

  // ─── Education ────────────────────────────────────────────────────────────
  education: {
    title:
      "Education – M.Sc. Web Science · B.Sc. Software Engineering | Danny Safaya",
    description:
      "Master of Science in Web Science — Syrian Virtual University (Anabin H+, in progress). Bachelor of Science in Software & Information Systems Engineering — Syrian Private University (74.4%, Top 10% of 120 students, ZAB-recognised, Anabin H+). Capstone: Secure E-Payment Gateway, 1st place, 100/100.",
    titleDE:
      "Ausbildung – M.Sc. Web Science · B.Sc. Software-Engineering | Danny Safaya",
    descriptionDE:
      "Master of Science in Web Science – Syrian Virtual University (Anabin H+, laufend). Bachelor of Science in Software- und Informationssystem-Engineering – Syrian Private University (74,4 %, Top 10 % von 120 Studierenden, ZAB-anerkannt, Anabin H+). Abschlussarbeit: Sicheres E-Payment-Gateway, Platz 1, 100/100.",
    keywords: [
      // EN
      "Master Web Science Syrian Virtual University",
      "Bachelor Software Engineering Syrian Private University",
      "Anabin H+ recognized degree Germany",
      "ZAB recognized degree Germany",
      "top 10 percent software engineering graduate",
      "cybersecurity university education",
      "distributed systems web security",
      "advanced network architectures",
      // DE
      "Master Web Science Syrian Virtual University",
      "Bachelor Softwaretechnik Syrian Private University",
      "Anabin H+ anerkannter Abschluss",
      "ZAB anerkannter Abschluss Deutschland",
      "Top-10-Prozent-Absolvent",
      "Cybersecurity Hochschulstudium",
      "Verteilte Systeme Web-Sicherheit",
    ],
  },

  // ─── Certifications ───────────────────────────────────────────────────────
  certifications: {
    title:
      "Certifications – ISC² CC · CISM · ISO 27001 · CCSP · PTES | Danny Safaya",
    description:
      "ISC² Certified in Cybersecurity (CC) · Certified Information Security Manager (CISM, Cybrary) · ISO/IEC 27001:2022 Information Security (SkillFront) · Certified Cloud Security Professional (CCSP, Cybrary) · Offensive Penetration Testing (Cybrary) · Automate Cybersecurity Tasks with Python (Coursera) · Python for Cybersecurity Specialisation (Coursera) · Securing Cloud and Hybrid Networks (Coursera) · Cryptography (Cybrary).",
    titleDE:
      "Zertifikate – ISC² CC · CISM · ISO 27001 · CCSP · Offensives Penetration Testing | Danny Safaya",
    descriptionDE:
      "ISC² Certified in Cybersecurity (CC) · Certified Information Security Manager (CISM, Cybrary) · ISO/IEC 27001:2022 Information Security (SkillFront) · Certified Cloud Security Professional (CCSP, Cybrary) · Offensive Penetration Testing (Cybrary) · Cybersecurity-Aufgaben mit Python automatisieren (Coursera) · Python for Cybersecurity Specialisation (Coursera) · Cloud- und Hybridnetzwerke absichern (Coursera) · Kryptographie (Cybrary).",
    keywords: [
      "ISC2 Certified in Cybersecurity CC",
      "CISM Certified Information Security Manager",
      "ISO IEC 27001 2022 certified",
      "CCSP Certified Cloud Security Professional",
      "offensive penetration testing certification",
      "Python cybersecurity automation Coursera",
      "cloud security certification",
      "cryptography certification",
      "Cybrary certifications",
      "SkillFront ISO 27001",
      // DE
      "ISC2 Cybersecurity Zertifikat",
      "CISM Zertifizierung",
      "ISO 27001 Zertifizierung",
      "CCSP Cloud-Sicherheit Zertifikat",
      "Offensives Penetration Testing Zertifikat",
      "Python Cybersecurity Zertifikat",
    ],
  },

  // ─── Volunteer ────────────────────────────────────────────────────────────
  volunteer: {
    title:
      "Volunteering – Syrian Arab Red Crescent | Danny Safaya",
    description:
      "Team Leader for psychological support at the Syrian Arab Red Crescent (SARC), providing mental health services to children in schools and care centres (Feb 2022 – Mar 2023). Prior humanitarian aid coordination (Jan 2021 – Feb 2022).",
    titleDE:
      "Ehrenamtliches Engagement – Syrisches Arabisches Rotes Halbmond | Danny Safaya",
    descriptionDE:
      "Teamleiter Psychosoziale Unterstützung beim Syrischen Arabischen Roten Halbmond (SARC), psychosoziale Betreuung von Kindern in Schulen und spezialisierten Einrichtungen (Feb. 2022 – März 2023). Zuvor humanitäre Hilfeleistung (Jan. 2021 – Feb. 2022).",
    keywords: [
      "Syrian Arab Red Crescent volunteer",
      "SARC psychological support",
      "humanitarian aid volunteer",
      "children mental health support",
      // DE
      "Syrisches Arabisches Rotes Halbmond Ehrenamt",
      "SARC Psychosoziale Unterstützung",
      "Humanitäre Hilfe Freiwilliger",
      "Kinder psychische Gesundheit",
    ],
  },

  // ─── Awards ───────────────────────────────────────────────────────────────
  awards: {
    title:
      "Awards – 1st Place Capstone · Top 10% Graduate · HackTheBox | Danny Safaya",
    description:
      "🏆 1st Place University Capstone Competition — Secure E-Payment Gateway, perfect score 100/100. 🎓 Top 10% Academic Achievement — ranked in the top 10% of 120 graduating students, SPU. 🔒 Active HackTheBox profile.",
    titleDE:
      "Auszeichnungen – Platz 1 Abschlussarbeit · Top 10 % · HackTheBox | Danny Safaya",
    descriptionDE:
      "🏆 Platz 1 Universitärer Abschlussarbeitswettbewerb – Sicheres E-Payment-Gateway, Höchstpunktzahl 100/100. 🎓 Top-10-%-Abschluss – Bester Absolventenjahrgang (120 Studierende), SPU. 🔒 Aktives HackTheBox-Profil.",
    keywords: [
      "university capstone 1st place award",
      "perfect score 100/100 project",
      "top 10 percent graduate award",
      "HackTheBox active profile",
      "cybersecurity competition winner",
      // DE
      "Abschlussarbeit Platz 1 Auszeichnung",
      "Höchstpunktzahl 100/100 Projekt",
      "Top-10-Prozent-Absolvent Auszeichnung",
      "HackTheBox Profil",
      "Cybersecurity Wettbewerb Gewinner",
    ],
  },

  // ─── Contact ──────────────────────────────────────────────────────────────
  contact: {
    title:
      "Contact Danny Safaya – Security Engineer for Hire | Germany",
    description:
      "Hire Danny Safaya for penetration testing, security audits, vulnerability assessments, zero-trust architecture, SIEM/EDR deployment, PCI-DSS compliance consulting. Based in Germany.",
    titleDE:
      "Kontakt Danny Safaya – Security Engineer verfügbar | Deutschland",
    descriptionDE:
      "Beauftragen Sie Danny Safaya für Penetrationstests, Sicherheitsaudits, Schwachstellenanalysen, Zero-Trust-Architektur, SIEM/EDR-Implementierung und PCI-DSS-Compliance-Beratung. Standort: Deutschland.",
    keywords: [
      // EN
      "hire security engineer Germany",
      "penetration testing consultant Germany",
      "cybersecurity expert for hire EU",
      "security audit services Germany",
      "freelance penetration tester",
      "cybersecurity consulting DACH",
      "zero trust consultant Germany",
      "SIEM EDR consultant",
      "PCI-DSS consultant Germany",
      "vulnerability assessment Germany",
      "red team consultant Germany",
      // DE
      "Security Engineer beauftragen Deutschland",
      "Penetrationstest Dienstleister Deutschland",
      "Cybersecurity Beratung DACH",
      "Sicherheitsaudit Deutschland",
      "Freiberuflicher Penetrationstester",
      "Zero-Trust-Architekt Deutschland",
      "SIEM EDR Berater",
      "PCI-DSS Beratung Deutschland",
      "Schwachstellenanalyse Dienstleister",
    ],
  },

  // ─── Structured Data (JSON-LD) ────────────────────────────────────────────
  structuredData: {
    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Danny Safaya",
      alternateName: "دني صفايا",
      jobTitle: "Security Engineer & Penetration Testing Expert",
      description:
        "Security Engineer and Penetration Tester with 3+ years of hands-on experience securing telecom infrastructure, payment systems and enterprise networks. Led security team at Syriatel, built PCI-DSS-compliant payment gateway (100/100). Top 10% Software Engineering graduate. Based in Germany.",
      url: "https://portfolio.danny-sec.workers.dev",
      image: "https://portfolio.danny-sec.workers.dev/profile-photo.png",
      address: {
        "@type": "PostalAddress",
        addressCountry: "DE",
      },
      nationality: "Syrian",
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Syrian Private University (SPU)",
          url: "https://spu.edu.sy/",
          description:
            "Bachelor in Software and Information Systems Engineering — Final grade 74.4%, Top 10% of 120 students. ZAB-recognised, Anabin H+.",
        },
        {
          "@type": "EducationalOrganization",
          name: "Syrian Virtual University (SVU)",
          url: "https://www.svuonline.org/",
          description:
            "Master in Web Science — Focus: distributed systems, web security, advanced network architectures. Anabin H+. Expected graduation 2025.",
        },
      ],
      knowsAbout: [
        // Offensive
        "Penetration Testing (PTES)",
        "Red Teaming",
        "APT Simulation",
        "Social Engineering",
        "OSINT",
        "SAST/DAST",
        // Defensive
        "SIEM",
        "SOAR",
        "EDR",
        "DLP",
        "WAF",
        "IDS/IPS",
        "NAC",
        "Zero Trust Architecture",
        "Incident Response",
        "ISMS",
        // Tools
        "Burp Suite",
        "Metasploit",
        "Nmap",
        "Nessus",
        "Acunetix",
        "Postman",
        "Wireshark",
        // Dev
        "Python",
        "Bash",
        "PowerShell",
        "PHP",
        "CI/CD",
        "DevSecOps",
        "Kubernetes",
        "JIRA",
        // Compliance
        "ISO 27001",
        "PCI-DSS",
        "OWASP",
        "HIPAA",
        "GDPR",
        "DSGVO",
        "MITRE ATT&CK Framework",
      ],
      knowsLanguage: [
        { "@type": "Language", name: "English", description: "B2 certified" },
        {
          "@type": "Language",
          name: "German",
          alternateName: "Deutsch",
          description: "B1 telc exam completed (2026); A2 certified",
        },
      ],
      sameAs: [
        "https://github.com/Danny-LLi",
        "https://www.linkedin.com/in/danny-safaya-61302a218/",
        "https://medium.com/@dannysafaya",
        "https://app.hackthebox.com/profile/1416013",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Freelance Cybersecurity Consultant",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Bachelor of Science – Software & Information Systems Engineering",
          educationalLevel: "Bachelor's Degree",
          recognizedBy: {
            "@type": "Organization",
            name: "Zentralstelle für ausländisches Bildungswesen (ZAB)",
          },
          description:
            "Reg.-Nr.: LN2025/104802-1. Officially equivalent to a German Bachelor's degree. Top 10% of 120 students. Final grade 74.4%.",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Master of Science – Web Science",
          educationalLevel: "Master's Degree",
          recognizedBy: {
            "@type": "Organization",
            name: "Syrian Virtual University (SVU)",
          },
          description: "Anabin H+. Expected graduation 2025.",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "ISC² Certified in Cybersecurity (CC)",
          dateCreated: "2023-03",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Certified Information Security Manager (CISM)",
          recognizedBy: { "@type": "Organization", name: "Cybrary" },
          dateCreated: "2023-10",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "ISO/IEC 27001:2022 Information Security Certified",
          recognizedBy: { "@type": "Organization", name: "SkillFront" },
          dateCreated: "2024-09",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Certified Cloud Security Professional (CCSP)",
          recognizedBy: { "@type": "Organization", name: "Cybrary" },
          dateCreated: "2024-07",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Offensive Penetration Testing",
          recognizedBy: { "@type": "Organization", name: "Cybrary" },
          dateCreated: "2024-10",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Automate Cybersecurity Tasks with Python",
          recognizedBy: { "@type": "Organization", name: "Coursera" },
          dateCreated: "2024-11",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Python for Cybersecurity Specialisation",
          recognizedBy: { "@type": "Organization", name: "Coursera" },
          dateCreated: "2023",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Securing Cloud and Hybrid Networks",
          recognizedBy: { "@type": "Organization", name: "Coursera" },
          dateCreated: "2025-02",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Cryptography",
          recognizedBy: { "@type": "Organization", name: "Cybrary" },
          dateCreated: "2025-05",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "language-certification",
          name: "English – B2 Certified",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "language-certification",
          name: "German – A2 Certified; B1 telc exam completed (2026)",
        },
      ],
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Security Engineer",
          occupationalCategory: "15-1212.00",
          description:
            "Security Engineer at Syriatel — EDR, DLP, Zero Trust, honeypot deployment, threat modelling, vulnerability assessments, API security testing, security awareness (Sep 2023 – Feb 2025).",
          skills:
            "EDR, DLP, Zero Trust, SIEM, SOAR, Honeypot, Threat Modelling, API Security, Vulnerability Assessment",
        },
        {
          "@type": "Occupation",
          name: "Penetration Testing Team Lead",
          description:
            "Team Lead at Assistant Agency (UAE, Remote) — white-box, grey-box, black-box engagements, ISO 27001, GDPR, technical & executive reporting (May 2023 – Mar 2024).",
          skills:
            "PTES, White-Box, Grey-Box, Black-Box, ISO 27001, GDPR, API Security Testing, Incident Response",
        },
        {
          "@type": "Occupation",
          name: "Penetration Tester",
          description:
            "Penetration Tester at Mudar Abbas Technology — 50+ comprehensive tests across web, mobile (Android & iOS) and networks; PTES; custom exploit tools (Oct 2021 – Sep 2023).",
          skills:
            "XSS, CSRF, SQLi, SSRF, Arbitrary File Upload, Mobile Security, API Security, OSINT, PTES",
        },
      ],
    },

    professionalService: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Danny Safaya – Cybersecurity Consulting",
      alternateName: "Danny Safaya – Cybersecurity-Beratung",
      description:
        "Professional cybersecurity services: penetration testing, security audits, vulnerability assessments, zero-trust architecture, SIEM/SOAR/EDR deployment, PCI-DSS & ISO 27001 compliance, API security, red team operations, incident response.",
      provider: { "@type": "Person", name: "Danny Safaya" },
      areaServed: [
        { "@type": "Place", name: "Germany" },
        { "@type": "Place", name: "Austria" },
        { "@type": "Place", name: "Switzerland" },
        { "@type": "Place", name: "Remote Worldwide" },
      ],
      serviceType: [
        "Penetration Testing (PTES)",
        "Red Team Operations",
        "Security Audits",
        "Vulnerability Assessment & Management",
        "API Security Testing",
        "Web Application Security Testing",
        "Mobile Application Security Testing (Android & iOS)",
        "Zero Trust Architecture Design & Implementation",
        "SIEM / SOAR Deployment",
        "EDR Implementation",
        "DLP Strategy",
        "Threat Modelling",
        "Incident Response",
        "Security Awareness Training",
        "PCI-DSS Compliance Consulting",
        "ISO 27001 Compliance Consulting",
        "GDPR / DSGVO Security Consulting",
        "DevSecOps Integration",
        "Kubernetes Security Hardening",
      ],
      priceRange: "€€€",
    },

    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Danny Safaya – Security Engineer Portfolio",
      alternateName:
        "Danny Safaya – Security Engineer & Penetration Tester Portfolio",
      url: "https://portfolio.danny-sec.workers.dev",
      author: { "@type": "Person", name: "Danny Safaya" },
      description:
        "Professional portfolio of Danny Safaya, Security Engineer and Penetration Testing Expert based in Germany. 3+ years securing telecom, payment and enterprise systems. Featured projects: PCI-DSS E-Payment Gateway (100/100) and HTBHound open-source recon tool.",
      inLanguage: ["en", "de"],
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://portfolio.danny-sec.workers.dev/#search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },

    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://portfolio.danny-sec.workers.dev/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://portfolio.danny-sec.workers.dev/#about",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Skills",
          item: "https://portfolio.danny-sec.workers.dev/#skills",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Experience",
          item: "https://portfolio.danny-sec.workers.dev/#experience",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Projects",
          item: "https://portfolio.danny-sec.workers.dev/#projects",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Education",
          item: "https://portfolio.danny-sec.workers.dev/#education",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Certifications",
          item: "https://portfolio.danny-sec.workers.dev/#certifications",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Volunteer",
          item: "https://portfolio.danny-sec.workers.dev/#volunteer",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Awards",
          item: "https://portfolio.danny-sec.workers.dev/#awards",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Contact",
          item: "https://portfolio.danny-sec.workers.dev/#contact",
        },
      ],
    },
  },

  // ─── Advanced Meta ────────────────────────────────────────────────────────
  advancedMeta: {
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    googlebot:
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    bingbot:
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    canonical: "https://portfolio.danny-sec.workers.dev",
    geo: {
      region: "DE",
      placename: "Germany",
      position: "51.1657;10.4515",
    },
    author: "Danny Safaya",
    copyright: `Copyright ${new Date().getFullYear()} Danny Safaya. All rights reserved.`,
    language: "English, Deutsch",
    revisitAfter: "7 days",
    rating: "General",
    viewport: "width=device-width, initial-scale=1.0",
    mobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    appleMobileWebAppTitle: "Danny Safaya – Security Engineer",
    themeColor: "#0a0a0a",
    msApplicationTileColor: "#0a0a0a",
  },

  // ─── hreflang ─────────────────────────────────────────────────────────────
  hreflang: [
    { lang: "en", url: "https://portfolio.danny-sec.workers.dev/?lang=en" },
    { lang: "de", url: "https://portfolio.danny-sec.workers.dev/?lang=de" },
    { lang: "x-default", url: "https://portfolio.danny-sec.workers.dev" },
  ],
};

export default seoConfig;