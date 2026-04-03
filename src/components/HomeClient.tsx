"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Principles from "@/components/sections/Principles";
import Mission from "@/components/sections/Mission";
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

      {/* SECTION 1: STATIC HERO */}
      <Hero />

      {/*
        SECTION 2: UNIFIED MONITOR WINDOW SEQUENCE
        Cinematic reveal framing the Mission narrative.
      */}
      <div ref={containerRef} className="relative h-[300vh] z-10">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* THE MONITOR ASSET LAYER */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
            style={{ opacity: bgOpacity }}
          >
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
            <div className="absolute inset-0 bg-radial-to-t from-white/10 to-transparent blur-3xl opacity-30" />
          </motion.div>

          {/* THE CONTENT WINDOW: Reveal Sequence */}
          <motion.div
            className="relative w-full h-full flex flex-col origin-center z-[1]"
            style={{ scale: windowScale }}
          >
            {/* Principles serves as the visual/grid underlay */}
            <Principles scrollProgress={smoothProgress} />
          </motion.div>

          {/* Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none z-[2]">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent blur-3xl opacity-50" />
            <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
          </div>
        </div>

        {/* 
            INTEGRATED MISSION TEXT 
            Appears as part of the reveal sequence scroll 
        */}
        <div className="relative z-20 px-6 -mt-[50vh] pb-[20vh]">
          <Mission />
        </div>
      </div>

      {/* SECTION 4: Capabilities */}
      <Capabilities />

      {/* SECTION 5: Challenge — Reordered to match reference */}
      <Challenge />

      {/* SECTION 6: Values / The NINTH° Standard */}
      <Values />

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

