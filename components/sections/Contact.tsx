"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import ScrollReveal from "@/components/animations/ScrollReveal";

type FormState = "idle" | "loading" | "success";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mohamedmubarak14m@gmail.com",
    href: "mailto:mohamedmubarak14m@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New Cairo, Egypt",
    href: null,
  },
];

const socials = [
  {
    icon: GithubIcon,
    href: "https://github.com/MohamedMubarak14M",
    label: "GitHub",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/mohamedmubarak",
    label: "LinkedIn",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof values>>({});

  const validate = () => {
    const e: Partial<typeof values> = {};
    if (!values.name.trim()) e.name = "Name is required";
    if (!values.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Invalid email address";
    if (!values.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setFormState("loading");
    // Simulate async send (no backend)
    await new Promise((r) => setTimeout(r, 1800));
    setFormState("success");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors((err) => ({ ...err, [e.target.name]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-surface section-padding overflow-hidden"
    >
      {/* Decorative */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-[0.06] rounded-full"
        style={{
          background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <ScrollReveal>
              <p className="text-accent text-xs font-semibold tracking-[0.4em] uppercase mb-4">
                Contact
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
                Let&apos;s build something{" "}
                <span className="text-gradient">incredible</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-text-secondary text-lg leading-relaxed mb-12">
                Have a project in mind, want to collaborate, or just want to say
                hi? I&apos;m always open to exciting opportunities and
                conversations.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <ScrollReveal key={label} delay={0.15}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-accent shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs font-medium uppercase tracking-widest mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-white font-medium hover:text-accent transition-colors duration-300"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.2} className="mt-10">
              <div className="flex items-center gap-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — form */}
          <ScrollReveal delay={0.1}>
            <div className="glass rounded-3xl p-8 md:p-10">
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16 gap-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                      <Check size={32} className="text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-text-secondary">
                        I&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setFormState("idle");
                        setValues({ name: "", email: "", message: "" });
                      }}
                      className="text-accent text-sm font-medium hover:text-accent-light transition-colors duration-300"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    noValidate
                  >
                    <h3 className="font-display font-bold text-xl text-white mb-6">
                      Send a message
                    </h3>

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-text-secondary text-sm font-medium mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full bg-surface-3 border ${
                          errors.name ? "border-red-500/60" : "border-border"
                        } rounded-xl px-5 py-4 text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent/60 transition-all duration-300`}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1.5">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-text-secondary text-sm font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full bg-surface-3 border ${
                          errors.email ? "border-red-500/60" : "border-border"
                        } rounded-xl px-5 py-4 text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent/60 transition-all duration-300`}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1.5">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-text-secondary text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell me about your project..."
                        className={`w-full bg-surface-3 border ${
                          errors.message ? "border-red-500/60" : "border-border"
                        } rounded-xl px-5 py-4 text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent/60 transition-all duration-300 resize-none`}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1.5">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={formState === "loading"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold text-sm tracking-wide transition-all duration-300 glow-sm hover:glow-md flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formState === "loading" ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              ease: "linear",
                            }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
