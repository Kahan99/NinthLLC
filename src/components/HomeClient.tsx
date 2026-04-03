"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Principles from "@/components/sections/Principles";
import Capabilities from "@/components/sections/Capabilities";
import Values from "@/components/sections/Values";
import Challenge from "@/components/sections/Challenge";
import Method from "@/components/sections/Method";
import Intelligence from "@/components/sections/Intelligence";
import Industries from "@/components/sections/Industries";
import Team from "@/components/sections/Team";
import BrandPromise from "@/components/sections/BrandPromise";
import Vision from "@/components/sections/Vision";
import Footer from "@/components/Footer";

export default function HomeClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  // High-fidelity Scroll Progress for the cinematic zoom-out sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001,
  });

  // Scale the content window from zoomed-in (4.5x) to framed view (0.92x)
  const windowScale = useTransform(smoothProgress, [0, 0.12], [4.5, 0.92]);

  // Background texture opacity ramp (monitor asset)
  const bgOpacity = useTransform(smoothProgress, [0, 0.04, 0.12], [0, 1, 1]);

  return (
    <main className="relative flex flex-col min-h-svh bg-black">

      {/* 
          SECTION 1: STATIC HERO 
          The Hero section is now a standalone relative section as requested.
          The background animation is maintained within the Hero component.
      */}
      <Hero />

      {/*
        ─────────────────────────────────────────────────────────────────────
        SECTION 2: UNIFIED MONITOR WINDOW SEQUENCE (REVEAL ONLY)
        This cinematic reveal now starts immediately after the Hero scrolls away.
        The monitor asset frames the Principles section intro as the user zooms in/out.
        ─────────────────────────────────────────────────────────────────────
      */}
      <div ref={containerRef} className="relative h-[300vh] z-10">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

          {/* THE MONITOR ASSET LAYER */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
            style={{ opacity: bgOpacity }}
          >
            {/* Underlay glow from monitor-bg.png */}
            <img 
              src="/monitor-bg.png" 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover opacity-60" 
              loading="eager"
            />
            {/* Mobile Showcase Frame */}
            <img 
              src="/mobiles.png" 
              alt="NINTH° product showcase on mobile screens" 
              className="absolute inset-0 w-full h-full md:hidden object-cover" 
              loading="eager"
            />
            {/* Desktop Showcase Frame */}
            <img 
              src="/monitor.png" 
              alt="NINTH° product showcase on desktop screen" 
              className="absolute inset-0 w-full h-full hidden md:block object-cover" 
              loading="eager"
            />
            
            {/* Final high-fidelity polish glow */}
            <div className="absolute inset-0 bg-radial-to-t from-white/10 to-transparent blur-3xl opacity-30" />
          </motion.div>

          {/* THE CONTENT WINDOW: Principles only reveal */}
          <motion.div
            className="relative w-full h-full flex flex-col origin-center z-[1]"
            style={{ scale: windowScale }}
          >
            <Principles scrollProgress={smoothProgress} />
          </motion.div>

          {/* Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none z-[2]">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent blur-3xl opacity-50" />
            <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
          </div>
        </div>
      </div>

      {/*
        ─────────────────────────────────────────────────────────────────────
        STATIC SECTIONS — ordered to match ninth.llc scroll flow exactly
        ─────────────────────────────────────────────────────────────────────
      */}

      {/* SECTION 4: Capabilities — "Software is the foundation." */}
      <Capabilities />

      {/* SECTION 5: Values / The NINTH° Standard — Four pillars */}
      <Values />

      {/* SECTION 6: Challenge — Animated quote block */}
      <Challenge />

      {/* SECTION 7: Method — Process timeline */}
      <Method />

      {/* SECTION 8: Intelligence — AI-native section */}
      <Intelligence />

      {/* SECTION 9: Industries — Experience & Impact grid */}
      <Industries />

      {/* SECTION 10: Team — "30" + Principals grid */}
      <Team />

      {/* SECTION 11: Brand Promise — MacBook + CodeRain */}
      <BrandPromise />

      {/* SECTION 12: Vision — "We do not over explain..." */}
      <Vision />

      {/* FOOTER: Clock */}
      <Footer />
    </main>
  );
}

