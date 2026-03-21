import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import VolunteerSection from "@/components/portfolio/VolunteerSection";
import AwardsSection from "@/components/portfolio/AwardsSection";
import ContactSection from "@/components/portfolio/ContactSection";

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

const VALID_SECTIONS: SectionKey[] = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "certifications",
  "volunteer",
  "awards",
  "contact",
];

/** Inner component so it can consume LanguageContext */
const IndexContent = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<SectionKey>("home");

  // Detect active section from URL hash
  useEffect(() => {
    const hash = location.hash.replace("#", "") as SectionKey;
    if (VALID_SECTIONS.includes(hash)) {
      setActiveSection(hash);
    } else {
      setActiveSection("home");
    }
  }, [location]);

  // IntersectionObserver — track visible sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const id = entry.target.id as SectionKey;
            if (id && VALID_SECTIONS.includes(id)) {
              setActiveSection(id);
              window.history.replaceState(null, "", `#${id}`);
            }
          }
        });
      },
      { threshold: [0.5], rootMargin: "-20% 0px -20% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Dynamic bilingual SEO — language follows the app's LanguageContext */}
      <SEO
        section={activeSection}
        lang={language as "en" | "de"}
        url={`https://danny-lli.github.io/DannySec${location.hash}`}
      />

      <div className="min-h-screen bg-background">
        <ScrollIndicator />
        <Navbar />

        <main>
          <section id="home">
            <HeroSection />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <section id="skills">
            <SkillsSection />
          </section>

          <section id="experience">
            <ExperienceSection />
          </section>

          <section id="projects">
            <ProjectsSection />
          </section>

          <section id="education">
            <EducationSection />
          </section>

          <section id="certifications">
            <CertificationsSection />
          </section>

          <section id="volunteer">
            <VolunteerSection />
          </section>

          <section id="awards">
            <AwardsSection />
          </section>

          <section id="contact">
            <ContactSection />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

const Index = () => (
  <LanguageProvider>
    <IndexContent />
  </LanguageProvider>
);

export default Index;