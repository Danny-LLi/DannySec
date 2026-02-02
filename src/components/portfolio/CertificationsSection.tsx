import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, Shield, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { certifications } from "@/data/portfolioData";
import { Badge } from "../ui/badge";

const CertificationsSection = () => {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const getIssuerStyle = (issuer: string) => {
    switch (issuer.toLowerCase()) {
      case "coursera":
        return { bg: "from-blue-500/30 to-blue-600/10", border: "border-blue-500/40", text: "text-blue-400", glow: "shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]" };
      case "cybrary":
        return { bg: "from-purple-500/30 to-purple-600/10", border: "border-purple-500/40", text: "text-purple-400", glow: "shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)]" };
      case "isc2":
        return { bg: "from-emerald-500/30 to-emerald-600/10", border: "border-emerald-500/40", text: "text-emerald-400", glow: "shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)]" };
      case "ec-council":
        return { bg: "from-red-500/30 to-red-600/10", border: "border-red-500/40", text: "text-red-400", glow: "shadow-[0_0_20px_-5px_rgba(239,68,68,0.5)]" };
      case "skillfront":
        return { bg: "from-amber-500/30 to-amber-600/10", border: "border-amber-500/40", text: "text-amber-400", glow: "shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)]" };
      default:
        return { bg: "from-primary/30 to-primary/10", border: "border-primary/40", text: "text-primary", glow: "shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]" };
    }
  };

  const CertCard = ({ cert, index }: { cert: typeof certifications[0], index: number }) => {
    const style = getIssuerStyle(cert.issuer);
    
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ 
          scale: 1.03, 
          y: -8,
          transition: { duration: 0.3 }
        }}
        className="group relative"
      >
        {/* Animated glow effect on hover */}
        <motion.div
          className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-500"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundSize: "200% 200%" }}
        />
        
        <div className={`relative glass-card-strong p-5 sm:p-6 rounded-2xl border backdrop-blur-xl transition-all duration-500 ${style.border} bg-gradient-to-br ${style.bg}`}>
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rotate-45" />
          </div>

          <div className="flex flex-col gap-4">
            {/* Icon and Title */}
            <div className="flex items-start gap-3">
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${style.bg} ${style.border} border`}>
                <Award className={`w-5 h-5 ${style.text}`} />
              </div>
              <h3 className="font-semibold text-sm sm:text-base leading-tight text-foreground">
                {cert.name}
              </h3>
            </div>

            {/* Issuer Badge */}
            <div className="flex items-center gap-2">
              <Badge 
                variant="outline" 
                className={`text-xs font-medium bg-gradient-to-r ${style.bg} ${style.text} ${style.border}`}
              >
                <Shield className="w-3 h-3 mr-1.5" />
                {cert.issuer}
              </Badge>
            </div>

            {/* Date Info */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              <span>
                {language === "de" ? "Ausgestellt" : "Issued"} {cert.issued}
              </span>
            </div>

            {/* Credential ID */}
            <div className="text-xs font-mono truncate px-3 py-2 rounded-lg bg-background/30 text-muted-foreground/70">
              <span className="opacity-60">ID:</span> {cert.credentialId}
            </div>

            {/* Show Credential Link */}
            {cert.credentialUrl && (
              <motion.a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group/link ${style.text} hover:brightness-125`}
              >
                <ExternalLink className="w-4 h-4" />
                <span className="relative">
                  {language === "de" ? "Zertifikat anzeigen" : "Show credential"}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover/link:w-full transition-all duration-300" />
                </span>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="certifications" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
              opacity: 0.2 + Math.random() * 0.3,
            }}
            animate={{
              y: [0, -20 - Math.random() * 30, 0],
              x: [0, (Math.random() - 0.5) * 20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Large gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[130px]"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Flowing lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <linearGradient id="certLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,300 Q400,200 800,350 Q1200,500 1600,400"
            stroke="url(#certLineGrad)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ pathLength: 1, pathOffset: [0, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-bg text-primary-foreground text-sm font-medium mb-6 glow-orange cursor-default"
          >
            <Sparkles className="w-4 h-4" />
            {language === "de" ? "Professionelle Qualifikationen" : "Professional Qualifications"}
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">
              {language === "de" ? "Lizenzen & Zertifizierungen" : "Licenses & Certifications"}
            </span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === "de" 
              ? "Branchenweit anerkannte Zertifizierungen in Cybersicherheit, Cloud Computing und Penetration Testing" 
              : "Industry-recognized certifications in cybersecurity, cloud computing, and penetration testing"}
          </p>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            <div className="glass-card px-6 py-3 rounded-full flex items-center gap-3">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                <span className="text-foreground">{certifications.length}</span>
                <span className="text-muted-foreground ml-1.5">{language === "de" ? "Zertifizierungen" : "Certifications"}</span>
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {certifications.map((cert, index) => (
              <CertCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;