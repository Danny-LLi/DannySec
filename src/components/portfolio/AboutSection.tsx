import { motion, useInView } from "framer-motion";
import { Shield, Award, Users, Clock, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import projectNetwork from "@/assets/project-network.jpg";
import projectCode from "@/assets/project-code.jpg";
import bgTechPattern from "@/assets/bg-tech-pattern.jpg";
import { useRef, useState, useEffect } from "react";

const stats = [
  {
    icon: Clock,
    value: 3,
    suffix: "+",
    label: { de: "Jahre Penetration Testing", en: "Years Penetration Testing" },
    color: "from-primary to-primary",
  },
  {
    icon: Users,
    value: 2,
    suffix: "+",
    label: { de: "Jahre Führungserfahrung", en: "Years Leadership" },
    color: "from-accent to-accent",
  },
  {
    icon: Award,
    value: 10,
    prefix: "Top ",
    suffix: "%",
    label: { de: "Absolventen-Ranking", en: "Graduate Ranking" },
    color: "from-primary to-accent",
  },
  {
    icon: Shield,
    value: 100,
    suffix: "%",
    label: { de: "Projektbewertung", en: "Project Score" },
    color: "from-accent to-primary",
  },
];

const AnimatedCounter = ({ 
  value, 
  prefix = "", 
  suffix = "", 
  isInView 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    // Faster animation with fewer steps
    const duration = 1000;
    const steps = 30;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [isInView, value]);
  
  return (
    <span>{prefix}{count}{suffix}</span>
  );
};

const AboutSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);
  // Optimized: trigger earlier (0.1 amount), only once, no negative margin
  const isInView = useInView(sectionRef, { once: true, margin: "0px", amount: 0.1 });

  return (
    <section ref={sectionRef} id="about" className="py-12 sm:py-28 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${bgTechPattern})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Static gradient overlays - removed animations for performance */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[80px]" />
      
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-1/4 right-1/4" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center mb-12 sm:mb-24">
          {/* Image Grid - Simplified animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="image-gradient-overlay h-36 sm:h-52 md:h-72 neon-border-strong rounded-2xl overflow-hidden group"
              >
                <img 
                  src={projectNetwork} 
                  alt="Network Security" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="image-pink-tint h-36 sm:h-52 md:h-72 neon-border rounded-2xl overflow-hidden mt-6 sm:mt-10 group"
              >
                <img 
                  src={projectCode} 
                  alt="Code" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card-strong px-6 py-3 rounded-full flex items-center gap-3 glow-combined"
            >
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium whitespace-nowrap">Security Expert</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="inline-block px-4 sm:px-5 py-2 sm:py-2.5 rounded-full gradient-bg text-primary-foreground text-xs sm:text-sm font-medium mb-4 sm:mb-6 glow-orange cursor-default"
            >
              {t("about.title")}
            </motion.span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              {t("about.subtitle").split(" ").slice(0, 2).join(" ")}{" "}
              <span className="gradient-text">{t("about.subtitle").split(" ").slice(2).join(" ")}</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-lg md:text-xl leading-relaxed">
              {t("about.description")}
            </p>
          </motion.div>
        </div>

        {/* Stats Grid - Simplified animations */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card-strong p-4 sm:p-8 rounded-xl sm:rounded-2xl text-center group cursor-default"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className={`w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-5 glow-combined`}
              >
                <stat.icon className="w-5 h-5 sm:w-8 sm:h-8 text-primary-foreground" />
              </motion.div>
              <motion.div 
                className="text-xl sm:text-4xl font-bold gradient-text mb-1 sm:mb-2"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
              >
                <AnimatedCounter 
                  value={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix} 
                  isInView={isInView} 
                />
              </motion.div>
              <div className="text-muted-foreground text-xs sm:text-sm">{stat.label[language]}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;