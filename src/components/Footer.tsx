import { motion, useInView } from "framer-motion";
import { MapPin, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { contactInfo } from "@/data/portfolioData";
import { HackTheBoxIcon, MediumIcon, LinkedInIcon, GitHubIcon } from "./icons/PlatformIcons";
import { useRef } from "react";

const Footer = () => {
  const { t, language } = useLanguage();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  const socialLinks = [
    { 
      icon: GitHubIcon, 
      href: contactInfo.links.github, 
      label: "GitHub", 
      hoverClass: "hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_-5px_hsl(var(--primary))]" 
    },
    { 
      icon: LinkedInIcon, 
      href: contactInfo.links.linkedin, 
      label: "LinkedIn", 
      hoverClass: "hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:shadow-[0_0_20px_-5px_#0A66C2]" 
    },
    { 
      icon: HackTheBoxIcon, 
      href: contactInfo.links.hackthebox, 
      label: "HackTheBox", 
      hoverClass: "hover:text-[#9FEF00] hover:border-[#9FEF00]/50 hover:shadow-[0_0_20px_-5px_#9FEF00]" 
    },
    { 
      icon: MediumIcon, 
      href: contactInfo.links.medium, 
      label: "Medium", 
      hoverClass: "hover:text-foreground hover:border-foreground/50" 
    },
  ];

  return (
    <footer ref={footerRef} className="relative pt-16 pb-8 border-t border-primary/10">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <motion.a 
              href="#home" 
              className="flex items-center gap-3 mb-5 group"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center glow-orange"
              >
                <span className="text-primary-foreground font-bold text-xl">DS</span>
              </motion.div>
              <span className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                {contactInfo.name}
              </span>
            </motion.a>
            <p className="text-muted-foreground">
              {t("about.subtitle")}
            </p>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
          >
            <h4 className="text-foreground font-semibold mb-5 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full gradient-bg glow-pulse" />
              {language === "de" ? "Standort" : "Location"}
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-9 h-9 rounded-lg glass-card flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">{contactInfo.location[language]}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          >
            <h4 className="text-foreground font-semibold mb-5 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full gradient-bg glow-pulse" />
              Links
            </h4>
            <div className="space-y-3">
              {[
                { name: "Hack The Box", href: contactInfo.links.hackthebox, icon: HackTheBoxIcon, color: "text-[#9FEF00]" },
                { name: "Medium", href: contactInfo.links.medium, icon: MediumIcon, color: "text-foreground" },
                { name: "LinkedIn", href: contactInfo.links.linkedin, icon: LinkedInIcon, color: "text-[#0A66C2]" },
                { name: "GitHub", href: contactInfo.links.github, icon: GitHubIcon, color: "text-primary" },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300 group"
                >
                  <link.icon size={18} className={`${link.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
          className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © {new Date().getFullYear()} <span className="gradient-text font-semibold">{contactInfo.name}</span>
            <span className="mx-2">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> 
            </span>
          </p>
          
          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-11 h-11 rounded-xl glass-card-strong flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.hoverClass}`}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
