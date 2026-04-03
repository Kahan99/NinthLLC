"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Link from "next/link";
import CodeRain from "@/components/animations/CodeRain";

export default function BrandPromise() {
  const words1 = ["Quiet", "code."];
  const words2 = ["Loud", "outcomes."];

  return (
    <section id="brand-promise" className="py-20 bg-black overflow-hidden relative">
      <Container className="text-center mb-16 relative z-10">
        {/* Label */}
        <motion.p 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#FFA16C] text-sm md:text-base font-medium mb-6 uppercase tracking-[0.2em]"
        >
          Clarity at runtime. Control at scale.
        </motion.p>

        {/* Headline */}
        <h2 className="text-[32px] md:text-[56px] lg:text-[64px] font-medium leading-[1.1] tracking-[-0.02em] text-white mb-8">
          <span className="sr-only">Quiet code. Loud outcomes.</span>
          <span className="flex flex-wrap justify-center gap-x-4">
            {words1.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
            {words2.map((word, i) => (
              <motion.span
                key={i + 2}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (i + 2) * 0.1 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h2>

        {/* Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#707079] text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed mb-10"
        >
          We build systems that stay composed under pressure, driven by architecture-first decisions and disciplined engineering.
          <br className="hidden md:inline" /> 
          We deliver readable code, enforceable quality, and release readiness—so you maintain velocity without volatility.
        </motion.div>

        {/* Custom Glass Button */}
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
              className="group relative inline-flex items-center justify-center px-12 py-4 text-white font-semibold text-lg rounded-full overflow-hidden transition-all duration-500"
              style={{
                background: 'linear-gradient(182.51deg, rgba(255, 255, 255, 0.05) 27.09%, rgba(90, 90, 90, 0.02) 58.59%, rgba(0, 0, 0, 0.05) 92.75%)',
                boxShadow: '0 30px 16px -16px rgba(0,0,0,0.5), 0 15px 8px -8px rgba(0,0,0,0.3)',
              }}
            >
              {/* Border Glow */}
              <span 
                className="absolute inset-0 rounded-full pointer-events-none" 
                style={{ 
                  padding: '1px', 
                  background: 'linear-gradient(178.8deg, rgba(255, 255, 255, 0.3) 10.85%, rgba(20, 20, 20, 0.4) 24.36%, rgba(50, 50, 50, 0.4) 73.67%, rgba(255, 255, 255, 0.4) 90.68%)',
                  mask: 'linear-gradient(#fff, #fff) content-box exclude, linear-gradient(#fff, #fff)',
                  WebkitMask: 'linear-gradient(#fff, #fff) content-box exclude, linear-gradient(#fff, #fff)'
                }}
              />
              {/* Hover Effect */}
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              {/* Grain/Noise Overlay */}
              <span className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ filter: 'url(#noiseFilter)' }} />
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
            <CodeRain />
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


