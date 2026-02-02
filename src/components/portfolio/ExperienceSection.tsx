import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { experience } from "@/data/portfolioData";
import bgCyberCity from "@/assets/bg-cyber-city.jpg";
import { useRef } from "react";

const ExperienceSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="experience" className="py-28 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${bgCyberCity})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(14)].map((_, i) => (
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
              y: [0, -25 - Math.random() * 35, 0],
              opacity: [0.2, 0.55, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Animated gradient overlays */}
      <motion.div 
        className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.15, 1],
          y: [0, 25, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
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
            {t("experience.title")}
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t("experience.subtitle").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">{t("experience.subtitle").split(" ").slice(-1)}</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-border/30" />
          
          {/* Animated timeline progress */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-0.5 md:-translate-x-1/2 progress-gradient"
            style={{ height: timelineHeight }}
          />
          
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15, type: "spring" as const }}
              className={`relative pl-12 md:pl-0 pb-14 last:pb-0 ${
                index % 2 === 0 ? "md:pr-[52%] md:text-right" : "md:pl-[52%] md:ml-auto"
              }`}
            >
              {/* Timeline dot with glow */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.15, type: "spring" as const, stiffness: 200 }}
                className="absolute left-4 md:left-1/2 top-2 w-4 h-4 md:-translate-x-1/2"
              >
                <div className="w-full h-full gradient-bg rounded-full border-4 border-background glow-combined" />
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                className={`glass-card-strong p-7 rounded-2xl transition-all duration-500 ${index % 2 === 0 ? "md:mr-6" : "md:ml-6"}`}
              >
                <div className={`flex flex-wrap items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-1.5 rounded-full gradient-bg text-primary-foreground text-xs font-medium glow-orange"
                  >
                    {job.type === "remote" ? t("common.remote") : t("common.onsite")}
                  </motion.span>
                  <span className="text-muted-foreground text-sm flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" />
                    {job.period.start} - {job.period.end || t("common.present")}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{job.role[language]}</h3>
                
                <div className={`flex items-center gap-3 text-muted-foreground mb-5 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-primary font-medium">{job.company}</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{job.location[language]}</span>
                  </div>
                </div>
                
                <ul className={`space-y-2.5 text-muted-foreground text-sm ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {job.description[language].slice(0, 4).map((item, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 + i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      {index % 2 !== 0 && <span className="w-2 h-2 rounded-full gradient-bg mt-1.5 flex-shrink-0 glow-pulse" />}
                      <span className="flex-1 hover:text-foreground transition-colors">{item}</span>
                      {index % 2 === 0 && <span className="w-2 h-2 rounded-full gradient-bg mt-1.5 flex-shrink-0 glow-pulse" />}
                    </motion.li>
                  ))}
                </ul>
                
                {job.certificateLink && (
                  <motion.a
                    href={job.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center gap-2 mt-5 text-primary hover:text-accent transition-colors font-medium text-sm ${index % 2 === 0 ? "md:justify-end" : ""}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {language === "de" ? "Zertifikat ansehen" : "View Certificate"}
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
