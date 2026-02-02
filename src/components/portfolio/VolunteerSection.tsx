import { motion, useInView } from "framer-motion";
import { Heart, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { volunteerWork } from "@/data/portfolioData";
import { useRef } from "react";

const VolunteerSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.8, rotateX: 20 },
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
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 2,
              height: Math.random() * 3 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
              opacity: 0.2 + Math.random() * 0.3,
            }}
            animate={{
              y: [0, -25 - Math.random() * 30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Animated decorative elements */}
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/3 translate-y-1/3 bg-accent/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"
        animate={{ scale: [1, 1.15, 1], y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block px-4 py-2 rounded-full gradient-bg text-primary-foreground text-sm font-medium mb-4 glow-pink"
          >
            {t("volunteer.title")}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("volunteer.subtitle").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">{t("volunteer.subtitle").split(" ").slice(-1)}</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {volunteerWork.map((work, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.03, rotateY: 5 }}
              className="glass-card p-8 rounded-2xl neon-border hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0 glow-pink"
                >
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{work.role[language]}</h3>
                  <p className="gradient-text font-medium">{work.organization}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-primary" />
                  {work.period.start} - {work.period.end}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-accent" />
                  {work.location[language]}
                </span>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">{work.description[language]}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerSection;
