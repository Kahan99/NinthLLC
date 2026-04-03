"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ── TYPES ──────────────────────────────────────────────────────────────────
type FormData = {
  projectState?: string;
  services?: string[];
  budget?: string;
  description?: string;
  name?: string;
  email?: string;
};

// ── GRADIENT BORDER BUTTON ─────────────────────────────────────────────────
function GlassBtn({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group relative inline-flex items-center justify-center px-[46px] py-[14px] text-white font-semibold text-base leading-none rounded-lg overflow-hidden transition-all duration-300 w-full disabled:opacity-40 disabled:cursor-not-allowed ${className}`}
      style={{
        background:
          "linear-gradient(182.51deg, rgba(255,255,255,0.02) 27.09%, rgba(90,90,90,0.02) 58.59%, rgba(0,0,0,0.02) 92.75%)",
        boxShadow:
          "rgba(0,0,0,0.12) 0px 30px 16px, rgba(0,0,0,0.07) 0px 15.6px 8.3px, rgba(0,0,0,0.04) 0px 6.36px 4.16px",
      }}
    >
      {/* gradient border */}
      <span
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          padding: "1px",
          background:
            "linear-gradient(178.8deg, rgba(255,255,255,0.247) 10.85%, rgba(20,20,20,0.46) 24.36%, rgba(50,50,50,0.46) 73.67%, rgba(255,255,255,0.46) 90.68%)",
          mask: "linear-gradient(black,black) content-box exclude, linear-gradient(black,black)",
          WebkitMask:
            "linear-gradient(black,black) content-box exclude, linear-gradient(black,black)",
        }}
      />
      {/* hover fill */}
      <span className="absolute inset-0 rounded-lg bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-[0.08]" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}

// ── GLASSMORPHIC CARD SHELL ────────────────────────────────────────────────
function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full">
      {/* top highlight line */}
      <div
        className="absolute inset-x-0 top-0 h-[1px] -mb-[1px] z-[1] mx-[2px] rounded-t-3xl overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent 2%, rgba(255,255,255,0.8) 35%, rgba(255,255,255,0.8) 65%, transparent 98%)",
        }}
      />
      {/* outer glow wrapper */}
      <div
        className="rounded-3xl p-1 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle farthest-side at 50% 0, rgba(242,242,242,0.2), transparent)",
          outline: "rgba(242,242,242,0.15) solid 1px",
          outlineOffset: "-1px",
          boxShadow:
            "inset 0 0 8px rgba(0,0,0,0.4), 0 0 60px rgba(0,0,0,0.2), 0 30px 80px rgba(0,0,0,0.5)",
        }}
      >
        {/* inner top line */}
        <div
          className="h-[2px] -mb-[2px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, transparent 10%, rgb(255,255,255) 50%, transparent 90%)",
          }}
        />
        {/* glass panel */}
        <div
          className="rounded-2xl overflow-hidden border border-[rgba(242,242,242,0.3)]"
          style={{
            backdropFilter: "blur(20px)",
            boxShadow:
              "inset 0 0 10px rgba(0,0,0,0.1), 0 0 12px rgba(0,0,0,0.4)",
          }}
        >
          <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── OPTION BUTTON (single-select row) ─────────────────────────────────────
function OptionBtn({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
        selected
          ? "bg-white/10 border-white/40"
          : "bg-white/5 border-white/10 hover:bg-white/[0.08] hover:border-white/20"
      }`}
    >
      <span
        className={`text-sm font-medium transition-colors ${
          selected ? "text-white" : "text-white/90 group-hover:text-white"
        }`}
      >
        {label}
      </span>
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
          selected ? "border-white bg-white" : "border-white/20 group-hover:border-white/40"
        }`}
      >
        {selected && (
          <div className="w-2 h-2 rounded-full bg-black" />
        )}
      </div>
    </button>
  );
}

// ── MULTI-SELECT BUTTON ────────────────────────────────────────────────────
function MultiBtn({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
        selected
          ? "bg-white/10 border-white/40"
          : "bg-white/5 border-white/10 hover:bg-white/[0.08] hover:border-white/20"
      }`}
    >
      <span
        className={`text-sm font-medium transition-colors ${
          selected ? "text-white" : "text-white/90 group-hover:text-white"
        }`}
      >
        {label}
      </span>
      <div
        className={`w-5 h-5 rounded flex items-center justify-center transition-colors border ${
          selected ? "border-white bg-white" : "border-white/20 group-hover:border-white/40"
        }`}
      >
        {selected && (
          <svg viewBox="0 0 12 12" className="w-3 h-3 text-black" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="1.5,6 4.5,9 10.5,3" />
          </svg>
        )}
      </div>
    </button>
  );
}

// ── COPY EMAIL BUTTON ──────────────────────────────────────────────────────
function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const email = "hello@ninth.llc";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 mb-8">
      <span className="text-[#707079]">Email us:</span>
      <div className="flex items-center gap-3">
        <span className="text-white/90">{email}</span>
        <button
          onClick={handleCopy}
          title="Copy email"
          className="relative text-white/30 hover:text-white p-1 w-6 h-6 flex items-center justify-center transition-colors"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="check"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                className="absolute inset-0 flex items-center justify-center text-green-400"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}

// ── STEP DEFINITIONS ───────────────────────────────────────────────────────
const PROJECT_STATES = ["Idea", "Prototype", "Live", "Scaling", "Legacy"];
const SERVICES = [
  "Product Design",
  "AI Engineering",
  "Full-Stack Development",
  "Strategic Consulting",
  "Brand & Identity",
  "Other",
];
const BUDGETS = ["< $10k", "$10k – $50k", "$50k – $150k", "$150k+", "Not sure yet"];

// ── MAIN PAGE ──────────────────────────────────────────────────────────────
export default function Contact() {
  const [step, setStep] = useState(0); // 0 = intro landing
  const [formData, setFormData] = useState<FormData>({});
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  const TOTAL_STEPS = 6; // steps 1-6 (excl. intro)

  const goNext = () => {
    setDirection(1);
    setStep((s) => s + 1);
  };

  const goPrev = () => {
    setDirection(-1);
    setStep((s) => s - 1);
  };

  const handleSubmit = () => {
    console.log("Brief submitted:", formData);
    setSubmitted(true);
  };

  // ── slide variants
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
      filter: "blur(4px)",
    }),
    center: { x: 0, opacity: 1, filter: "blur(0px)" },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      filter: "blur(4px)",
    }),
  };

  const transition = { duration: 0.35, ease: [0.4, 0, 0.2, 1] };

  // ── STEP 0: Intro card ──────────────────────────────────────────────────
  const renderIntro = () => (
    <div className="px-6 py-8">
      <h2 className="text-2xl font-medium text-white mb-2">Submit a Brief</h2>
      <p className="text-[#707079] mb-8 text-base leading-relaxed">
        We operate with discretion, craft, and execution discipline by default.
        Share the essentials — we&apos;ll handle the complexity.
      </p>
      <CopyEmail />
      <GlassBtn onClick={goNext}>Get Started</GlassBtn>
    </div>
  );

  // ── STEP 1: Project state ───────────────────────────────────────────────
  const renderStep1 = () => (
    <div className="px-6 py-8">
      <h2 className="text-xl font-medium text-white mb-2">What&apos;s the current state?</h2>
      <p className="text-[#707079] mb-6 text-sm">Tell us where you are in the journey</p>
      <div className="space-y-3 mb-6">
        {PROJECT_STATES.map((s) => (
          <OptionBtn
            key={s}
            label={s}
            selected={formData.projectState === s}
            onClick={() => setFormData({ ...formData, projectState: s })}
          />
        ))}
      </div>
      <GlassBtn onClick={goNext} disabled={!formData.projectState}>
        Continue
      </GlassBtn>
    </div>
  );

  // ── STEP 2: Services ────────────────────────────────────────────────────
  const renderStep2 = () => (
    <div className="px-6 py-8">
      <h2 className="text-xl font-medium text-white mb-2">What do you need?</h2>
      <p className="text-[#707079] mb-6 text-sm">Select all that apply</p>
      <div className="space-y-3 mb-6">
        {SERVICES.map((s) => (
          <MultiBtn
            key={s}
            label={s}
            selected={(formData.services ?? []).includes(s)}
            onClick={() => {
              const current = formData.services ?? [];
              setFormData({
                ...formData,
                services: current.includes(s)
                  ? current.filter((x) => x !== s)
                  : [...current, s],
              });
            }}
          />
        ))}
      </div>
      <GlassBtn onClick={goNext} disabled={!formData.services?.length}>
        Continue
      </GlassBtn>
    </div>
  );

  // ── STEP 3: Budget ──────────────────────────────────────────────────────
  const renderStep3 = () => (
    <div className="px-6 py-8">
      <h2 className="text-xl font-medium text-white mb-2">What&apos;s the investment range?</h2>
      <p className="text-[#707079] mb-6 text-sm">Helps us calibrate the right team and approach</p>
      <div className="space-y-3 mb-6">
        {BUDGETS.map((b) => (
          <OptionBtn
            key={b}
            label={b}
            selected={formData.budget === b}
            onClick={() => setFormData({ ...formData, budget: b })}
          />
        ))}
      </div>
      <GlassBtn onClick={goNext} disabled={!formData.budget}>
        Continue
      </GlassBtn>
    </div>
  );

  // ── STEP 4: Description ─────────────────────────────────────────────────
  const renderStep4 = () => (
    <div className="px-6 py-8">
      <h2 className="text-xl font-medium text-white mb-2">Describe the vision</h2>
      <p className="text-[#707079] mb-6 text-sm">
        Brief overview — what are you building and why?
      </p>
      <textarea
        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white/90 placeholder-[#707079] text-sm resize-none focus:outline-none focus:border-white/30 transition-colors mb-6"
        rows={6}
        placeholder="Tell us about your project, goals, timelines, and any other relevant context..."
        value={formData.description ?? ""}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        autoFocus
      />
      <GlassBtn onClick={goNext} disabled={!formData.description?.trim()}>
        Continue
      </GlassBtn>
    </div>
  );

  // ── STEP 5: Name + Email ────────────────────────────────────────────────
  const renderStep5 = () => (
    <div className="px-6 py-8">
      <h2 className="text-xl font-medium text-white mb-2">Who should we reach out to?</h2>
      <p className="text-[#707079] mb-6 text-sm">We&apos;ll follow up within 48 hours</p>
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-xs text-[#707079] mb-2 uppercase tracking-widest">Name</label>
          <input
            type="text"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#707079] text-sm focus:outline-none focus:border-white/30 transition-colors"
            placeholder="Your full name"
            value={formData.name ?? ""}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            autoFocus
          />
        </div>
        <div>
          <label className="block text-xs text-[#707079] mb-2 uppercase tracking-widest">Email</label>
          <input
            type="email"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#707079] text-sm focus:outline-none focus:border-white/30 transition-colors"
            placeholder="your@email.com"
            value={formData.email ?? ""}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>
      <GlassBtn
        onClick={goNext}
        disabled={!formData.name?.trim() || !formData.email?.trim()}
      >
        Review Brief
      </GlassBtn>
    </div>
  );

  // ── STEP 6: Review + Submit ────────────────────────────────────────────
  const renderStep6 = () => (
    <div className="px-6 py-8">
      <h2 className="text-xl font-medium text-white mb-2">Review your brief</h2>
      <p className="text-[#707079] mb-6 text-sm">Everything look right?</p>
      <div className="space-y-3 mb-8">
        {[
          { label: "Current State", value: formData.projectState },
          { label: "Services", value: formData.services?.join(", ") },
          { label: "Investment Range", value: formData.budget },
          { label: "Vision", value: formData.description },
          { label: "Name", value: formData.name },
          { label: "Email", value: formData.email },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-1 p-4 bg-white/5 rounded-xl border border-white/10">
            <span className="text-xs text-[#707079] uppercase tracking-widest">{label}</span>
            <span className="text-sm text-white/90">{value || "—"}</span>
          </div>
        ))}
      </div>
      <GlassBtn onClick={handleSubmit}>Submit Brief</GlassBtn>
    </div>
  );

  // ── SUCCESS ─────────────────────────────────────────────────────────────
  const renderSuccess = () => (
    <div className="px-6 py-12 flex flex-col items-center text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </motion.div>
      <h2 className="text-2xl font-medium text-white mb-3">Brief received.</h2>
      <p className="text-[#707079] text-sm mb-8 max-w-xs leading-relaxed">
        We&apos;ll review your submission and follow up within 48 hours. We appreciate your trust.
      </p>
      <Link
        href="/"
        className="text-white/40 hover:text-white transition-colors text-sm underline underline-offset-4"
      >
        Return home
      </Link>
    </div>
  );

  const stepContent = [
    renderIntro,
    renderStep1,
    renderStep2,
    renderStep3,
    renderStep4,
    renderStep5,
    renderStep6,
  ];

  return (
    <main className="relative min-h-svh bg-black text-white flex flex-col items-center overflow-hidden">
      {/* Noise SVG filter */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
        </defs>
      </svg>

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Back link */}
      <div className="absolute top-8 left-6 z-40 md:hidden">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#707079] hover:text-white transition-colors text-sm font-medium"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back
        </Link>
      </div>

      {/* Card container */}
      <div
        className="relative w-[calc(100%-48px)] md:w-full mx-auto md:mx-4 mt-36 mb-12 max-w-[520px]"
        style={{ perspective: "1000px" }}
      >
        <GlassCard>
          {/* Step header (skip on intro & success) */}
          {step > 0 && !submitted && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <button
                onClick={goPrev}
                disabled={step <= 1}
                className="p-1 text-[#707079] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <span className="text-sm text-white/30">
                {step} of {TOTAL_STEPS}
              </span>
              <button
                onClick={goNext}
                disabled={step >= TOTAL_STEPS}
                className="p-1 text-[#707079] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          )}

          {/* Animated step content */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={submitted ? "success" : step}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
            >
              {submitted
                ? renderSuccess()
                : (stepContent[step] ?? renderIntro)()}
            </motion.div>
          </AnimatePresence>
        </GlassCard>

        {/* Progress dots */}
        {step > 0 && !submitted && (
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i + 1 === step
                    ? "w-4 h-1.5 bg-white"
                    : i + 1 < step
                    ? "w-1.5 h-1.5 bg-white/40"
                    : "w-1.5 h-1.5 bg-white/10"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
