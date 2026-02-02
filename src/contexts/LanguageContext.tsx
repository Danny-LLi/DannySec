import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

type Language = "de" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.experience": "Erfahrung",
    "nav.skills": "Fähigkeiten",
    "nav.projects": "Projekte",
    "nav.education": "Ausbildung",
    "nav.certifications": "Zertifikate",
    "nav.contact": "Kontakt",
    "nav.download_cv": "CV Herunterladen",

    // Hero Section
    "hero.greeting": "Hallo, ich bin",
    "hero.role": "Security Engineer",
    "hero.location": "München, Deutschland",
    "hero.description": "Mit einem Bachelor-Abschluss in Software Engineering, rangiert unter den besten 10% von 120 Studierenden. Über 3 Jahre Erfahrung im Bereich Penetration Testing und mehr als 2 Jahre Führungserfahrung.",
    "hero.cta": "Kontakt aufnehmen",
    "hero.view_work": "Projekte ansehen",

    // About Section
    "about.title": "Über mich",
    "about.subtitle": "Security Engineer & Penetration Tester",
    "about.description": "Security Engineer (PTES, SIEM, SOAR, DLP, EDR, WAF, IPS, IDS, NAC, IAM, PCI-DSS, OWASP, HIPAA, ISO 27001). Angesichts der ständigen Weiterentwicklung von Bedrohungen setze ich mich dafür ein, robuste Sicherheitsmaßnahmen zu implementieren.",

    // Skills Section
    "skills.title": "Fähigkeiten",
    "skills.subtitle": "Meine technischen und sozialen Kompetenzen",
    "skills.soft": "Soziale Kompetenzen",
    "skills.technical": "Technische Fähigkeiten",
    "skills.tools": "Tools & Technologien",

    // Experience Section
    "experience.title": "Berufserfahrung",
    "experience.subtitle": "Mein beruflicher Werdegang",

    // Education Section
    "education.title": "Ausbildung",
    "education.subtitle": "Akademischer Hintergrund",
    "education.master": "Master in Web Science",
    "education.bachelor": "Bachelor in Software & Informationssystemtechnik",
    "education.current": "Laufend",
    "education.grade": "Abschlussnote",
    "education.recognized": "Von Anabin anerkannt (Status H+)",

    // Projects Section
    "projects.title": "Projekte",
    "projects.subtitle": "Ausgewählte Arbeiten",
    "projects.view": "Ansehen",
    "projects.github": "GitHub",

    // Volunteer Section
    "volunteer.title": "Ehrenamtliche Tätigkeiten",
    "volunteer.subtitle": "Gemeinschaftliches Engagement",

    // Awards Section
    "awards.title": "Auszeichnungen",
    "awards.subtitle": "Anerkennung & Erfolge",

    // Languages Section
    "languages.title": "Sprachen",
    "languages.english": "Englisch",
    "languages.german": "Deutsch",
    "languages.english_level": "B2 (Zertifiziert), Tendenz zu C1",
    "languages.german_level": "A2 (Zertifiziert), in Weiterbildung",

    // Footer
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.contact": "Kontakt",

    // Common
    "common.present": "heute",
    "common.remote": "Remote",
    "common.onsite": "Vor Ort",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",
    "nav.download_cv": "Download CV",

    // Hero Section
    "hero.greeting": "Hello, I'm",
    "hero.role": "Security Engineer",
    "hero.location": "Munich, Germany",
    "hero.description": "With a Bachelor's degree in Software Engineering, ranked among the top 10% of 120 students. Over 3 years of experience in Penetration Testing and more than 2 years of leadership experience.",
    "hero.cta": "Get in Touch",
    "hero.view_work": "View Projects",

    // About Section
    "about.title": "About Me",
    "about.subtitle": "Security Engineer & Penetration Tester",
    "about.description": "Security Engineer (PTES, SIEM, SOAR, DLP, EDR, WAF, IPS, IDS, NAC, IAM, PCI-DSS, OWASP, HIPAA, ISO 27001). Given the constant evolution of threats, I am committed to implementing robust security measures.",

    // Skills Section
    "skills.title": "Skills",
    "skills.subtitle": "My technical and soft skills",
    "skills.soft": "Soft Skills",
    "skills.technical": "Technical Skills",
    "skills.tools": "Tools & Technologies",

    // Experience Section
    "experience.title": "Work Experience",
    "experience.subtitle": "My professional journey",

    // Education Section
    "education.title": "Education",
    "education.subtitle": "Academic background",
    "education.master": "Master in Web Science",
    "education.bachelor": "Bachelor in Software & Information Systems Engineering",
    "education.current": "Current",
    "education.grade": "Final Grade",
    "education.recognized": "Recognized by Anabin (Status H+)",

    // Projects Section
    "projects.title": "Projects",
    "projects.subtitle": "Selected works",
    "projects.view": "View",
    "projects.github": "GitHub",

    // Volunteer Section
    "volunteer.title": "Volunteer Work",
    "volunteer.subtitle": "Community involvement",

    // Awards Section
    "awards.title": "Awards",
    "awards.subtitle": "Recognition & Achievements",

    // Languages Section
    "languages.title": "Languages",
    "languages.english": "English",
    "languages.german": "German",
    "languages.english_level": "B2 (Certified), tending to C1",
    "languages.german_level": "A2 (Certified), currently in training",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.contact": "Contact",

    // Common
    "common.present": "present",
    "common.remote": "Remote",
    "common.onsite": "On-site",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [language, setLanguageState] = useState<Language>(() => {
    const langParam = searchParams.get("lang");
    if (langParam === "en" || langParam === "de") {
      return langParam;
    }
    return "de";
  });

  useEffect(() => {
    const langParam = searchParams.get("lang");
    if (langParam === "en" || langParam === "de") {
      setLanguageState(langParam);
    }
  }, [searchParams]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setSearchParams({ lang });
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["de"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
