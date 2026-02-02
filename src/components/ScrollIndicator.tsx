import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
        style={{ 
          scaleX,
          background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))"
        }}
      />
      
      {/* Section indicators - desktop only */}
      <div className="fixed top-20 right-6 z-50 hidden xl:flex flex-col gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-3 justify-end"
          >
            <span 
              className={`text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                activeSection === section.id ? "opacity-100 text-primary" : "text-muted-foreground"
              }`}
            >
              {section.label}
            </span>
            <motion.div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section.id 
                  ? "bg-primary scale-150 shadow-[0_0_10px_hsl(var(--primary))]" 
                  : "bg-muted-foreground/30 group-hover:bg-primary/50"
              }`}
              whileHover={{ scale: 1.5 }}
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default ScrollIndicator;
