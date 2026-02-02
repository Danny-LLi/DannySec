import { motion, useInView } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Send,
  Sparkles,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { contactInfo } from "@/data/portfolioData";
import {
  HackTheBoxIcon,
  MediumIcon,
  LinkedInIcon,
  GitHubIcon,
} from "../icons/PlatformIcons";
import projectShield from "@/assets/project-shield.jpg";
import { useRef, useState, useEffect, useMemo, FormEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

// ---------------------------------------------------------------------------
// Plain validation — no zod, no ambiguous safeParse shapes.
// ---------------------------------------------------------------------------
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_RE  = /^[a-zA-Z\u00C0-\u00FF\s'-]+$/;

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.length < 2)
    errors.name = "Name must be at least 2 characters";
  else if (values.name.length > 100)
    errors.name = "Name must be less than 100 characters";
  else if (!NAME_RE.test(values.name))
    errors.name = "Name contains invalid characters";

  if (!EMAIL_RE.test(values.email))
    errors.email = "Invalid email address";
  else if (values.email.length > 255)
    errors.email = "Email must be less than 255 characters";

  if (values.subject.length < 3)
    errors.subject = "Subject must be at least 3 characters";
  else if (values.subject.length > 200)
    errors.subject = "Subject must be less than 200 characters";

  if (values.message.length < 10)
    errors.message = "Message must be at least 10 characters";
  else if (values.message.length > 2000)
    errors.message = "Message must be less than 2000 characters";

  return errors;
}

// ---------------------------------------------------------------------------
// Stable particle data – generated once so positions don't re-roll on
// every render and cause layout shifts / animation resets.
// ---------------------------------------------------------------------------
const PARTICLE_COUNT = 16;
const particleData = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  width: Math.random() * 4 + 2,
  height: Math.random() * 4 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  isPrimary: i % 2 === 0,
  baseOpacity: 0.2 + Math.random() * 0.4,
  yPeak: -(30 + Math.random() * 40),
  xPeak: (Math.random() - 0.5) * 25,
  duration: 4 + Math.random() * 5,
  delay: Math.random() * 3,
}));

// ---------------------------------------------------------------------------
// Social-link definitions (static – no need to recreate per render)
// ---------------------------------------------------------------------------
const socialLinksDef = [
  {
    key: "linkedin" as const,
    icon: LinkedInIcon,
    label: "LinkedIn",
    hoverClass:
      "hover:border-[#0A66C2]/50 hover:shadow-[0_0_30px_-5px_#0A66C2] hover:text-[#0A66C2]",
  },
  {
    key: "github" as const,
    icon: GitHubIcon,
    label: "GitHub",
    hoverClass:
      "hover:border-primary/50 hover:glow-orange hover:text-primary",
  },
  {
    key: "hackthebox" as const,
    icon: HackTheBoxIcon,
    label: "HTB",
    hoverClass:
      "hover:border-[#9FEF00]/50 hover:shadow-[0_0_30px_-5px_#9FEF00] hover:text-[#9FEF00]",
  },
  {
    key: "medium" as const,
    icon: MediumIcon,
    label: "Medium",
    hoverClass: "hover:border-foreground/50 hover:text-foreground",
  },
];

// ---------------------------------------------------------------------------
// Rate-limit constants
// ---------------------------------------------------------------------------
const RATE_LIMIT_MS = 30_000; // 30 s

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
const ContactSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Formspree
  const [state, handleFormspreeSubmit] = useForm("xeezrlew");

  // Client-side state
  const [clientErrors, setClientErrors] = useState<FormErrors>({});
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);
  const [rateLimitSecondsLeft, setRateLimitSecondsLeft] = useState<number>(0);

  // ---------------------------------------------------------------------------
  // Live countdown for rate-limit feedback
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (rateLimitSecondsLeft <= 0) return;

    const timer = setInterval(() => {
      setRateLimitSecondsLeft((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          clearInterval(timer);
          setClientErrors((prev) => ({ ...prev, message: undefined }));
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [rateLimitSecondsLeft]);

  // ---------------------------------------------------------------------------
  // Social links with resolved hrefs
  // ---------------------------------------------------------------------------
  const socialLinks = useMemo(
    () =>
      socialLinksDef.map((def) => ({
        ...def,
        href: contactInfo.links[def.key],
      })),
    []
  );

  // ---------------------------------------------------------------------------
  // Submit handler
  //
  // Formspree's handleFormspreeSubmit MUST receive the raw event —
  // it calls preventDefault() itself.  We only preventDefault on the
  // early-return (blocked) paths.
  // ---------------------------------------------------------------------------
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);

    // --- honeypot guard ---------------------------------------------------
    if (formData.get("_gotcha")) {
      e.preventDefault();
      return;
    }

    // --- rate-limit guard -------------------------------------------------
    const now = Date.now();
    const elapsed = now - lastSubmitTime;
    if (elapsed < RATE_LIMIT_MS) {
      e.preventDefault();
      const secs = Math.ceil((RATE_LIMIT_MS - elapsed) / 1000);
      setRateLimitSecondsLeft(secs);
      setClientErrors((prev) => ({
        ...prev,
        message:
          language === "de"
            ? `Bitte warten Sie ${secs} Sekunden vor dem erneuten Senden.`
            : `Please wait ${secs} seconds before sending again.`,
      }));
      return;
    }

    // --- validation -------------------------------------------------------
    const formValues: FormValues = {
      name:    (formData.get("name")    as string).trim(),
      email:   (formData.get("email")   as string).trim(),
      subject: (formData.get("subject") as string).trim(),
      message: (formData.get("message") as string).trim(),
    };

    const errors = validateForm(formValues);

    // If there are any keys with a truthy value, validation failed
    if (Object.values(errors).some(Boolean)) {
      e.preventDefault();
      setClientErrors(errors);
      return;
    }

    // --- all good – hand the raw event to Formspree -----------------------
    setClientErrors({});
    setLastSubmitTime(now);
    handleFormspreeSubmit(e);
  };

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------
  const clearFieldError = (field: keyof FormErrors) =>
    setClientErrors((prev) => ({ ...prev, [field]: undefined }));

  const isSubmitDisabled = state.submitting || rateLimitSecondsLeft > 0;

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  return (
    <section ref={sectionRef} id="contact" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="image-gradient-overlay h-full opacity-15">
          <img src={projectShield} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-background/95" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particleData.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.width,
              height: p.height,
              left: `${p.left}%`,
              top: `${p.top}%`,
              background: p.isPrimary ? "hsl(var(--primary))" : "hsl(var(--accent))",
              opacity: p.baseOpacity,
            }}
            animate={{
              y: [0, p.yPeak, 0],
              x: [0, p.xPeak, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Static grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-15" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3"
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Top divider */}
      <div className="section-divider absolute top-0 left-1/4 right-1/4" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-bg text-primary-foreground text-sm font-medium mb-6 glow-combined cursor-default"
          >
            <Sparkles className="w-4 h-4" />
            {t("footer.contact")}
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {language === "de" ? "Lass uns" : "Let's"}{" "}
            <span className="gradient-text">
              {language === "de" ? "verbinden" : "connect"}
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            {language === "de"
              ? "Ich freue mich auf Ihre Nachricht und bin offen für neue Möglichkeiten und Zusammenarbeit."
              : "I look forward to hearing from you and am open to new opportunities and collaboration."}
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-14">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
            className="glass-card-strong p-8 rounded-2xl min-h-[450px] md:min-h-[520px]"
          >
            {/* Success state */}
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mb-6 glow-combined"
                >
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {language === "de" ? "Nachricht gesendet!" : "Message Sent!"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "de"
                    ? "Vielen Dank! Ich werde mich bald bei Ihnen melden."
                    : "Thank you! I'll get back to you soon."}
                </p>
              </motion.div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot – visually hidden so bots still see it */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute opacity-0 w-0 h-0 pointer-events-none"
                />

                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    {language === "de" ? "Name" : "Name"}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    placeholder={language === "de" ? "Ihr Name" : "Your name"}
                    className={`glass-card border-border/50 focus:border-primary/50 bg-background/50 ${
                      clientErrors.name ? "border-destructive" : ""
                    }`}
                    onChange={() => clearFieldError("name")}
                  />
                  {clientErrors.name && (
                    <p className="text-destructive text-sm flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3 h-3" />
                      {clientErrors.name}
                    </p>
                  )}
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-destructive text-sm"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    {language === "de" ? "E-Mail" : "Email"}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    autoComplete="email"
                    placeholder={
                      language === "de"
                        ? "ihre.email@beispiel.de"
                        : "your.email@example.com"
                    }
                    className={`glass-card border-border/50 focus:border-primary/50 bg-background/50 ${
                      clientErrors.email ? "border-destructive" : ""
                    }`}
                    onChange={() => clearFieldError("email")}
                  />
                  {clientErrors.email && (
                    <p className="text-destructive text-sm flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3 h-3" />
                      {clientErrors.email}
                    </p>
                  )}
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-destructive text-sm"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">
                    {language === "de" ? "Betreff" : "Subject"}
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    maxLength={200}
                    placeholder={
                      language === "de" ? "Worum geht es?" : "What is this about?"
                    }
                    className={`glass-card border-border/50 focus:border-primary/50 bg-background/50 ${
                      clientErrors.subject ? "border-destructive" : ""
                    }`}
                    onChange={() => clearFieldError("subject")}
                  />
                  {clientErrors.subject && (
                    <p className="text-destructive text-sm flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3 h-3" />
                      {clientErrors.subject}
                    </p>
                  )}
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                    className="text-destructive text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    {language === "de" ? "Nachricht" : "Message"}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={2000}
                    placeholder={
                      language === "de" ? "Ihre Nachricht..." : "Your message..."
                    }
                    className={`glass-card border-border/50 focus:border-primary/50 bg-background/50 resize-none ${
                      clientErrors.message ? "border-destructive" : ""
                    }`}
                    onChange={() => clearFieldError("message")}
                  />
                  {clientErrors.message && (
                    <p className="text-destructive text-sm flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3 h-3" />
                      {clientErrors.message}
                    </p>
                  )}
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-destructive text-sm"
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  disabled={isSubmitDisabled}
                  className="w-full btn-gradient-animated glow-intense group"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      {language === "de" ? "Wird gesendet..." : "Sending..."}
                    </>
                  ) : rateLimitSecondsLeft > 0 ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5" />
                      {language === "de"
                        ? `Warten… (${rateLimitSecondsLeft}s)`
                        : `Wait… (${rateLimitSecondsLeft}s)`}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                      {language === "de" ? "Nachricht senden" : "Send Message"}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Location & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="flex flex-col justify-between"
          >
            {/* Location card */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card-strong p-8 rounded-2xl mb-6"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-5 glow-combined"
              >
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <div className="text-sm text-muted-foreground mb-2">
                {language === "de" ? "Standort" : "Location"}
              </div>
              <div className="text-foreground font-semibold text-xl">
                {contactInfo.location[language]}
              </div>
            </motion.div>

            {/* Social links card */}
            <div className="glass-card-strong p-8 rounded-2xl">
              <h4 className="text-foreground font-semibold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full gradient-bg glow-pulse" />
                {language === "de" ? "Finden Sie mich auf" : "Find me on"}
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.label} profile`}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`flex items-center gap-3 px-4 py-3 glass-card rounded-xl text-muted-foreground transition-all duration-300 ${social.hoverClass}`}
                  >
                    <social.icon size={20} />
                    <span className="font-medium text-sm">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;