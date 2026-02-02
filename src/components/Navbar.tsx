import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.education"), href: "#education" },
    { name: t("nav.certifications"), href: "#certifications" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "de" ? "en" : "de");
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card-strong border-b border-primary/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-11 h-11 gradient-bg rounded-xl flex items-center justify-center glow-orange"
            >
              <span className="text-primary-foreground font-bold text-xl">DS</span>
            </motion.div>
            <span className="text-xl font-bold text-foreground hidden sm:block group-hover:gradient-text transition-all duration-300">
              Danny Safaya
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium group"
              >
                {link.name}
                <motion.span 
                  className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 gradient-bg transition-all duration-300 group-hover:w-3/4 rounded-full" 
                />
              </motion.a>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
              <span className="font-semibold uppercase">{language}</span>
            </motion.button>
            <Button variant="gradient" size="default" asChild className="glow-orange btn-gradient-animated">
              <a href="#contact" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {t("nav.contact")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <motion.button
              onClick={toggleLanguage}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-2 rounded-xl glass-card text-muted-foreground"
            >
              <Globe className="w-4 h-4" />
              <span className="font-semibold uppercase">{language}</span>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="text-foreground p-2 hover:text-primary transition-colors glass-card rounded-xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3 px-4 rounded-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <Button variant="gradient" size="lg" className="mt-4 glow-orange btn-gradient-animated" asChild>
                  <a href="#contact" onClick={() => setIsOpen(false)} className="flex items-center gap-2 justify-center">
                    <Sparkles className="w-4 h-4" />
                    {t("nav.contact")}
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
