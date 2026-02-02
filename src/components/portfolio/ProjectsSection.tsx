import { motion, useInView } from "framer-motion";
import { ExternalLink, Star, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/data/portfolioData";
import { Button } from "../ui/button";
import { GitHubIcon } from "../icons/PlatformIcons";
import projectPayment from "@/assets/project-payment.jpg";
import projectTree from "@/assets/project-tree.jpg";
import projectLanguage from "@/assets/project-language.jpg";
import projectLinux from "@/assets/project-linux.jpg";
import projectHtb from "@/assets/project-htb.jpg";
import projectPrivacy from "@/assets/project-privacy.jpg";
import projectShadowwriter from "@/assets/project-shadowwriter.jpg";
import { useRef } from "react";

// Map project titles to their specific images
const projectImageMap: Record<string, string> = {
  "Secure E-Payment Gateway": projectPayment,
  "Spectra - Interactive Tree Editor": projectTree,
  "G-E-Bridge": projectLanguage,
  "Startup - Linux Automation Suite": projectLinux,
  "HTBHound": projectHtb,
  "Kali Guardian": projectPrivacy,
  "ShadowWriter": projectShadowwriter,
};

const getProjectImage = (title: string, index: number) => {
  if (projectImageMap[title]) return projectImageMap[title];
  const fallbackImages = [projectPayment, projectTree, projectLanguage, projectLinux, projectHtb, projectPrivacy];
  return fallbackImages[index % fallbackImages.length];
};

const ProjectsSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="projects" className="py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 2,
              height: Math.random() * 3 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
              opacity: 0.15 + Math.random() * 0.35,
            }}
            animate={{
              y: [0, -30 - Math.random() * 35, 0],
              opacity: [0.15, 0.5, 0.15],
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
      
      {/* Animated gradient overlays */}
      <motion.div 
        className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          y: [0, -30, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
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
            {t("projects.title")}
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t("projects.subtitle").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">{t("projects.subtitle").split(" ").slice(-1)}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1, type: "spring" }}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`glass-card-strong rounded-2xl overflow-hidden group cursor-pointer ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Project Image */}
              <div className={`relative overflow-hidden ${project.featured ? "h-56 md:h-72" : "h-48"}`}>
              <div className="h-full">
                  <img 
                    src={getProjectImage(project.title, index)} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                </div>
                
                {project.featured && (
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 rounded-full gradient-bg text-primary-foreground text-sm font-medium glow-intense"
                  >
                    <Star className="w-4 h-4 fill-current" />
                    Featured
                  </motion.div>
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quick action button */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <a
                    href={project.links.github || project.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center glow-intense"
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </a>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-primary text-sm font-medium">{project.period}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-1 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow-orange transition-all duration-300"
                      >
                        <GitHubIcon size={20} />
                      </motion.a>
                    )}
                    {project.links.linkedin && (
                      <motion.a
                        href={project.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, rotate: -10 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:glow-pink transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 line-clamp-2 group-hover:text-foreground/80 transition-colors">
                  {project.description[language]}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1.5 rounded-full bg-secondary text-muted-foreground text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
        >
          <Button variant="gradient" size="lg" asChild className="btn-gradient-animated glow-intense group">
            <a
              href="https://github.com/Danny-LLi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
              {t("projects.github")}
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
