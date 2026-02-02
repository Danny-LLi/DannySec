import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { contactInfo } from "@/data/portfolioData";
import { HackTheBoxIcon, MediumIcon, LinkedInIcon, GitHubIcon } from "../icons/PlatformIcons";
import { useRef } from "react";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const socialLinks = [
    { 
      icon: GitHubIcon, 
      href: contactInfo.links.github, 
      label: "GitHub",
      color: "hover:text-primary hover:border-primary/50 hover:shadow-[0_0_30px_-5px_hsl(var(--primary))]"
    },
    { 
      icon: LinkedInIcon, 
      href: contactInfo.links.linkedin, 
      label: "LinkedIn",
      color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:shadow-[0_0_30px_-5px_#0A66C2]"
    },
    { 
      icon: HackTheBoxIcon, 
      href: contactInfo.links.hackthebox, 
      label: "Hack The Box",
      color: "hover:text-[#9FEF00] hover:border-[#9FEF00]/50 hover:shadow-[0_0_30px_-5px_#9FEF00]"
    },
    { 
      icon: MediumIcon, 
      href: contactInfo.links.medium, 
      label: "Medium",
      color: "hover:text-foreground hover:border-foreground/50 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)]"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section ref={sectionRef} id="home" className="relative sm:min-h-[100svh] lg:min-h-screen pt-16 pb-4 sm:pt-24 sm:pb-16 overflow-hidden bg-[#0a0a0f]">
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
              opacity: 0.3 + Math.random() * 0.4,
            }}
            animate={{
              y: [0, -30 - Math.random() * 50, 0],
              x: [0, (Math.random() - 0.5) * 30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[130px]"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Large curved gradient shape - left side */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute -left-1/4 top-0 h-full w-[70%] opacity-90"
          viewBox="0 0 800 1000"
          preserveAspectRatio="xMinYMin slice"
        >
          <defs>
            <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--accent))" />
              <stop offset="40%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 L0,1000 Q250,850 350,650 Q450,450 380,250 Q310,50 450,0 Z"
            fill="url(#heroGradient1)"
          />
        </svg>
      </div>

      {/* Secondary curved accent */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute -left-1/4 top-1/4 h-3/4 w-1/2 opacity-50"
          viewBox="0 0 600 800"
          preserveAspectRatio="xMinYMin slice"
        >
          <defs>
            <linearGradient id="heroGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q180,80 220,320 Q260,560 140,720 Q80,820 0,800 Z"
            fill="url(#heroGradient2)"
          />
        </svg>
      </div>

      {/* Animated flowing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradAnim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,200 Q400,100 800,250 Q1200,400 1600,300 Q2000,200 2400,350"
          stroke="url(#lineGradAnim)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ pathLength: 1, pathOffset: [0, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M0,400 Q300,300 600,450 Q900,600 1200,500 Q1500,400 1800,550"
          stroke="url(#lineGradAnim)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ pathLength: 1, pathOffset: [0, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </svg>

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col justify-center sm:min-h-[calc(100svh-7rem)] lg:min-h-[calc(100vh-8rem)] py-2 sm:py-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center w-full">
            {/* Mobile - Profile Photo (shown on top for mobile only) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex lg:hidden justify-center items-center w-full"
            >
              <img 
                src={profilePhoto} 
                alt="Profile"
                className="w-[140px] h-[180px] sm:w-[220px] sm:h-[290px] object-cover object-top rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
            >
              <motion.div variants={itemVariants}>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full gradient-bg text-primary-foreground text-xs sm:text-sm font-medium mb-4 sm:mb-6 glow-orange cursor-default"
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  {t("hero.greeting")}
                </motion.span>
                <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2 sm:mb-4">
                  <span className="gradient-text">{contactInfo.name}</span>
                </h1>
                <h2 className="text-base sm:text-xl md:text-3xl lg:text-4xl text-muted-foreground font-medium mb-2 sm:mb-4">
                  {t("hero.role")}
                </h2>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-4 sm:mb-8"
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-sm sm:text-base">{contactInfo.location[language]}</span>
                </motion.div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-muted-foreground text-xs sm:text-base md:text-lg lg:text-xl max-w-xl mb-4 sm:mb-10 leading-relaxed mx-auto lg:mx-0"
              >
                {t("hero.description")}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-12 justify-center lg:justify-start"
              >
                <Button variant="gradient" size="default" asChild className="btn-gradient-animated group glow-intense w-full sm:w-auto sm:size-lg">
                  <a href="#contact">
                    {t("hero.cta")}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </Button>
                <Button variant="outline" size="default" asChild className="neon-border-strong hover:glow-pink transition-all duration-500 group w-full sm:w-auto sm:size-lg">
                  <a href="#projects">
                    <span className="group-hover:text-accent transition-colors">{t("hero.view_work")}</span>
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex gap-2 sm:gap-4 justify-center lg:justify-start"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 30, rotate: -10 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                    className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl glass-card-strong flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Profile Photo (Desktop only) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
              className="hidden lg:flex justify-center items-center relative"
            >
              {/* Photo container - clean and simple */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <img 
                  src={profilePhoto} 
                  alt="Profile"
                  className="w-[380px] h-[500px] object-cover object-top rounded-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on small mobile */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border-2 border-primary/40 flex justify-center pt-3"
        >
          <div className="w-2 h-2 rounded-full gradient-bg" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
