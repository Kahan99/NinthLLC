"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Link from "next/link";
import LetterGlitch from "@/components/animations/LetterGlitch";

export default function BrandPromise() {
  const words1 = ["Quiet", "code."];
  const words2 = ["Loud", "outcomes."];

  return (
    <section id="brand-promise" className="py-20 bg-black overflow-hidden relative">
      <Container className="text-center mb-16 relative z-10">
        {/* ── LABEL ── */}
        <motion.p 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#FFA16C] text-sm md:text-base font-medium mb-6 tracking-normal"
        >
          Clarity at runtime. Control at scale.
        </motion.p>
 
        {/* ── HEADLINE ── */}
        <motion.h2 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[32px] md:text-[56px] font-medium leading-[1.1] tracking-[-0.1px] text-white mb-6"
          style={{
            filter: "drop-shadow(0 0 30px rgba(255,255,255,0.15))" // The "fog-effect" soft glow
          }}
        >
          Quiet code. Loud outcomes.
        </motion.h2>

        {/* ── DESCRIPTION ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#707079] text-base md:text-lg max-w-[1000px] sm:max-w-[1100px] md:max-w-[1200px] lg:max-w-[1350px] xl:max-w-[1500px] leading-[1.3] mx-auto mb-10"
        >
          We build systems that stay composed under pressure, driven by architecture-first decisions and disciplined engineering.
          <br className="hidden md:inline" /> 
          We deliver readable code, enforceable quality, and release readiness—so you maintain velocity without volatility.
        </motion.div>

        {/* ── CUSTOM GLASS BUTTON ── */}
        <div className="flex justify-center items-center">
          <Link href="/contact">
            <svg className="absolute w-0 h-0" aria-hidden="true">
              <defs>
                <filter id="noiseFilter">
                  <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                </filter>
              </defs>
            </svg>
            <button 
              className="group relative inline-flex items-center justify-center px-[46px] py-[14px] text-white font-semibold text-lg leading-none rounded-lg overflow-hidden transition-all duration-500"
              style={{
                background: 'linear-gradient(182.51deg, rgba(255, 255, 255, 0.02) 27.09%, rgba(90, 90, 90, 0.02) 58.59%, rgba(0, 0, 0, 0.02) 92.75%)',
                boxShadow: `
                  rgba(0, 0, 0, 0.12) 0px 30.0444px 16.2444px,
                  rgba(0, 0, 0, 0.07) 0px 15.6px 8.2875px,
                  rgba(0, 0, 0, 0.04) 0px 6.35556px 4.15556px
                `,
              }}
            >
              {/* Border Glow (Masked) */}
              <span 
                className="absolute inset-0 rounded-lg pointer-events-none" 
                style={{ 
                  padding: '1px', 
                  background: 'linear-gradient(178.8deg, rgba(255, 255, 255, 0.2464) 10.85%, rgba(20, 20, 20, 0.46) 24.36%, rgba(50, 50, 50, 0.46) 73.67%, rgba(255, 255, 255, 0.46) 90.68%)',
                  mask: 'linear-gradient(#fff, #fff) content-box exclude, linear-gradient(#fff, #fff)',
                  WebkitMask: 'linear-gradient(#fff, #fff) content-box exclude, linear-gradient(#fff, #fff)'
                }}
              />
              {/* Hover Glow */}
              <span className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300" />
              {/* Noise Overlay */}
              <span className="absolute inset-0 pointer-events-none opacity-[0.1]" style={{ filter: 'url(#noiseFilter)' }} />
              
              <span className="relative z-10">Request Consult</span>
            </button>
          </Link>
        </div>
      </Container>

      {/* MacBook Visual Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[800px] mx-auto px-5 relative pb-20 pointer-events-none"
      >
        <div className="relative flex justify-center">
          {/* Base MacBook Body */}
          <img 
            src="/images/macbook.jpg" 
            alt="MacBook" 
            width={760} 
            height={410} 
            className="w-full h-auto"
          />
          
          {/* Keyboard Backlight */}
          <div className="absolute inset-x-0 top-0 w-full">
            <img 
              src="/images/key-lights-on.svg" 
              alt="Keyboard backlight" 
              className="w-full h-auto opacity-80"
            />
          </div>

          {/* Screen Light Effect (Screen Blend Mode) */}
          <img 
            src="/images/image1.png" 
            alt="Screen light" 
            className="absolute inset-0 w-full h-auto mix-blend-screen opacity-0 animate-pulse-slow" 
            style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
          />

          {/* Screen Content Overlay (Dynamic Digital Rain) */}
          <div className="absolute top-[6%] left-[13%] w-[74%] h-[56%] overflow-hidden rounded-[4px] bg-black">
            <LetterGlitch
              glitchColors={["#757575", "#3a3a3a", "#3d3d3d"]}
              glitchSpeed={10}
              centerVignette={false}
              outerVignette={false}
              smooth
            />
            {/* Overlay scanline effect or dimming */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Bottom Reflection/Shadow */}
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent z-10" />
        </div>
      </motion.div>
    </section>
  );
}


