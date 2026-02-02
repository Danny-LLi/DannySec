import { motion, useInView } from "framer-motion";
import { GraduationCap, ExternalLink, CheckCircle, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { education, languages as languagesData } from "@/data/portfolioData";
import { useRef } from "react";

const EducationSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="education" className="py-24 relative overflow-hidden">
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
              y: [0, -20 - Math.random() * 30, 0],
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
        className="absolute bottom-0 left-0 w-96 h-96 -translate-x-1/3 translate-y-1/3 bg-accent/8 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/4 right-0 w-64 h-64 translate-x-1/2 bg-primary/8 rounded-full blur-[80px]"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, 20, 0],
        }}
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
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block px-4 py-2 rounded-full gradient-bg text-primary-foreground text-sm font-medium mb-4 glow-orange"
          >
            {t("education.title")}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("education.subtitle").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">{t("education.subtitle").split(" ").slice(-1)}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: 20 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15, type: "spring" }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="glass-card p-8 rounded-2xl neon-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0 glow-combined"
                >
                  <GraduationCap className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{edu.degree[language]}</h3>
                  <a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent flex items-center gap-1 transition-colors"
                  >
                    {edu.institution}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-primary" />
                  {edu.period.start} - {edu.period.end || t("education.current")}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full gradient-bg" />
                  {edu.location[language]}
                </span>
              </div>
              
              {edu.grade && (
                <div className="text-muted-foreground mb-2">
                  <span className="text-foreground font-medium">{t("education.grade")}:</span>{" "}
                  <span className="gradient-text font-semibold">{edu.grade}</span>
                </div>
              )}
              
              {edu.recognized && (
                <div className="flex items-center gap-2 text-sm mt-4">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="gradient-text font-medium">{t("education.recognized")}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
          className="glass-card p-8 rounded-2xl max-w-2xl mx-auto neon-border"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center flex items-center justify-center gap-3">
            <span className="w-3 h-3 rounded-full gradient-bg glow-orange" />
            {t("languages.title")}
            <span className="w-3 h-3 rounded-full gradient-bg glow-pink" />
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {languagesData.map((lang, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors duration-300">
                <div className="text-lg font-medium gradient-text mb-1">{lang.name[language]}</div>
                <div className="text-muted-foreground text-sm">{lang.level[language]}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
