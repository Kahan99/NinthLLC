"use client";

import { motion, type MotionValue, useTransform, useMotionValue } from "framer-motion";
import { useMemo } from "react";
import Link from "next/link";
import { ShaderAnimation } from "@/components/ui/shader-lines";

interface HeroProps {
  scrollProgress?: MotionValue<number>;
  isStatic?: boolean;
}

export default function Hero({ scrollProgress, isStatic = true }: HeroProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  const fallbackValue = useMotionValue(0);
  const activeProgress = scrollProgress || fallbackValue;

  const opacity = useTransform(activeProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const transformY = useTransform(activeProgress, [0, 0.15], [0, -50]);

  const containerStyle = isStatic ? {} : { opacity, y: transformY };

  return (
    <motion.section 
      style={containerStyle}
      className={`${isStatic ? "relative h-screen" : "absolute inset-0"} z-10 flex items-center justify-center overflow-hidden bg-black`}
    >
      {/* ── HIGH-FIDELITY WEBGL BACKGROUND ── */}
      <div className="absolute inset-0 z-0 scale-[1.02]">
        <ShaderAnimation />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20 pointer-events-none" />
      </div>
      
      {/* ── HERO CONTENT (REFERENCE-ALIGNED) ── */}
      <div className="relative z-10 px-4 mx-auto text-center flex-1 flex flex-col justify-center max-w-7xl">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {/* Main Heading with Accessibility Patterns */}
          <motion.div 
            className="text-[2.75rem] leading-[1.1] tracking-tight sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] text-white font-medium"
            variants={fadeInUp}
          >
            <span className="whitespace-pre-wrap inline-block sm:whitespace-nowrap" aria-label="Your Vision.">
              <span className="sr-only">Your Vision.</span>
              <span className="block" aria-hidden="true">Your Vision.</span>
            </span>
            <br className="sm:hidden" />
            <span className="whitespace-pre-wrap inline-block sm:whitespace-nowrap sm:ml-2" aria-label="Our Precision.">
              <span className="sr-only">Our Precision.</span>
              <span className="block" aria-hidden="true">Our Precision.</span>
            </span>
          </motion.div>

          {/* Description Paragraph */}
          <motion.div className="max-w-2xl mx-auto mt-4" variants={fadeInUp}>
            <p className="whitespace-pre-wrap text-[0.95rem] md:text-[1.5rem] text-[#707079] leading-[1.3]" aria-label="NINTH° builds software products and digital systems end to end, from first principles to production, for those who value discretion, clarity, and uncompromising execution.">
              <span className="sr-only">NINTH° builds software products and digital systems end to end, from first principles to production, for those who value discretion, clarity, and uncompromising execution.</span>
              <span className="block" aria-hidden="true">NINTH° builds software products and digital systems end to end, from first principles to production, for those who value discretion, clarity, and uncompromising execution.</span>
            </p>
          </motion.div>

          {/* Hero Actions - Buttons aligned with Reference Snippet */}
          <motion.div 
            className="flex flex-col items-center justify-center gap-4 px-8 sm:px-0 mt-10 sm:flex-row"
            variants={fadeInUp}
          >
            {/* Request Call Button (Glass Variant) */}
            <Link href="/contact" className="w-full sm:w-auto">
              <button 
                className="w-full sm:w-56 min-w-[120px] whitespace-nowrap inline-flex items-center justify-center px-8 py-[14px] text-white hover:text-black font-semibold text-lg leading-none rounded-lg transition-all duration-300 bg-white/5 hover:bg-white border border-white/10"
                style={{ backdropFilter: "blur(10px)", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 30px" }}
              >
                Request Call
              </button>
            </Link>

            {/* View Capabilities Button (Refined Glass Border) */}
            <div className="w-full sm:w-auto relative group">
              <svg className="absolute w-0 h-0" aria-hidden="true">
                <defs>
                  <filter id="noiseFilterHero">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                  </filter>
                </defs>
              </svg>
              <button className="group relative inline-flex items-center justify-center px-[46px] py-[14px] text-white font-semibold text-lg leading-none rounded-lg overflow-hidden transition-colors duration-300 w-full sm:w-56 min-w-[160px] whitespace-nowrap rounded-lg transition-transform duration-150 active:scale-95">
                {/* Custom Gradient Border Mask */}
                <span 
                  className="absolute inset-0 rounded-lg pointer-events-none" 
                  style={{ 
                    padding: "1px", 
                    background: "linear-gradient(178.8deg, rgba(255, 255, 255, 0.247) 10.85%, rgba(20, 20, 20, 0.46) 24.36%, rgba(50, 50, 50, 0.46) 73.67%, rgba(255, 255, 255, 0.46) 90.68%)", 
                    mask: "linear-gradient(black, black) content-box exclude, linear-gradient(black, black)",
                    WebkitMask: "linear-gradient(black, black) content-box exclude, linear-gradient(black, black)" 
                  }} 
                />
                <span className="absolute inset-0 rounded-lg bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-10" />
                <span className="relative z-10 flex items-center justify-center gap-2">View Capabilities</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom ambient lighting hint */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black to-transparent z-20 pointer-events-none" />
    </motion.section>
  );
}
