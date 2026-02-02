import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { softSkills, technicalSkills, tools } from "@/data/portfolioData";
import { Brain, Code, Wrench } from "lucide-react";
import { useRef } from "react";

const SkillsSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, type: "spring" as const, stiffness: 200 },
    },
  };

  const skillCategories = [
    {
      title: t("skills.soft"),
      icon: Brain,
      skills: softSkills[language],
      glowClass: "hover:glow-orange",
      tagClass: "hover:text-primary hover:bg-primary/15 hover:border-primary/40",
      iconBg: "from-primary to-primary",
    },
    {
      title: t("skills.technical"),
      icon: Code,
      skills: technicalSkills[language],
      glowClass: "hover:glow-pink",
      tagClass: "hover:text-accent hover:bg-accent/15 hover:border-accent/40",
      iconBg: "from-accent to-accent",
    },
    {
      title: t("skills.tools"),
      icon: Wrench,
      skills: tools,
      glowClass: "hover:glow-combined",
      tagClass: "gradient-bg text-primary-foreground",
      iconBg: "from-primary to-accent",
      isGradient: true,
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-28 relative overflow-hidden">
      {/* Static background elements */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
              opacity: 0.2 + Math.random() * 0.4,
            }}
            animate={{
              y: [0, -25 - Math.random() * 40, 0],
              x: [0, (Math.random() - 0.5) * 20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[80px]"
        animate={{
          scale: [1, 1.15, 1],
          y: [0, 30, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-1/4 right-1/4" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block px-5 py-2.5 rounded-full gradient-bg text-primary-foreground text-sm font-medium mb-6 glow-orange cursor-default"
          >
            {t("skills.title")}
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t("skills.subtitle").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">{t("skills.subtitle").split(" ").slice(-1)}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: 20 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: categoryIndex * 0.15, type: "spring" }}
              whileHover={{ y: -12, scale: 1.03 }}
              className={`glass-card-strong p-8 rounded-2xl ${category.glowClass} transition-all duration-500`}
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 bg-gradient-to-br ${category.iconBg} rounded-xl flex items-center justify-center glow-pulse`}
                >
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium border border-transparent transition-all duration-300 cursor-default ${
                      category.isGradient 
                        ? "gradient-bg text-primary-foreground glow-pulse" 
                        : `bg-secondary/80 text-muted-foreground ${category.tagClass}`
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
