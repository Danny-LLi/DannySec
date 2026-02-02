import { motion, useInView } from "framer-motion";
import { Trophy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { awards } from "@/data/portfolioData";
import { useRef } from "react";

const AwardsSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 80, scale: 0.8, rotateX: 25 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.7, type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
              opacity: 0.2 + Math.random() * 0.4,
            }}
            animate={{
              y: [0, -30 - Math.random() * 35, 0],
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

      {/* Animated decorative elements */}
      <motion.div 
        className="absolute top-1/2 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[80px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
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
            className="inline-block px-4 py-2 rounded-full gradient-bg text-primary-foreground text-sm font-medium mb-4 glow-orange"
          >
            {t("awards.title")}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("awards.subtitle").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">{t("awards.subtitle").split(" ").slice(-1)}</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.05, rotateY: 5 }}
              className="glass-card p-8 rounded-2xl text-center neon-border hover:border-primary/50 transition-all duration-300 group"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4 glow-combined"
              >
                <Trophy className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <h3 className="text-lg font-semibold gradient-text mb-2">{award.title[language]}</h3>
              <p className="text-muted-foreground text-sm">{award.description[language]}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
