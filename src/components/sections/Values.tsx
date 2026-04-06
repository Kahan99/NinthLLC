"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

const pillars = [
  {
    number: "01",
    title: "Scalable Foundations",
    description: "Architecture-first, scale-ready delivery",
    image: "/images/1.jpg",
  },
  {
    number: "02",
    title: "Expert Execution",
    description: "Founder-led decisions, senior execution",
    image: "/images/2.jpg",
  },
  {
    number: "03",
    title: "Strategic Protection",
    description: "Built to protect your brand, reputation, and time",
    image: "/images/3.jpg",
  },
  {
    number: "04",
    title: "Meticulous Craft",
    description: "Precision in every detail, from product to production",
    image: "/images/4.jpg",
  },
];

export default function Values() {
  const [activePillar, setActivePillar] = useState(0);
  const cycleDuration = 5000; // 5 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % pillars.length);
    }, cycleDuration);

    return () => clearInterval(timer);
  }, [activePillar]); // Reset timer on manual selection or automatic change

  return (
    <Section id="value" className="bg-black py-12 md:py-20 lg:py-24">
      <Container>
        <div className="mb-6 lg:mb-10">
          <div className="flex items-center gap-2 mb-4 px-2">
            <div
              className="w-2 h-2 rounded-full bg-white animate-pulse"
              style={{ boxShadow: "0 0 15px 2px rgba(255, 255, 255, 0.8)" }}
            />
            <h2 className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#707079] font-semibold">
              Our core pillars
            </h2>
          </div>
          <h3 className="text-[32px] sm:text-[40px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.03em] text-white px-2">
            <span className="block mb-1">The NINTH° Standard:</span>
            <span 
              className="text-[#FFA16C] block"
              style={{ textShadow: "0 0 40px rgba(255, 161, 108, 0.4)" }}
            >
              Uncompromising Excellence
            </span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-12">
          {/* Left Pillar Cards */}
          <div className="flex flex-col gap-4 lg:w-1/2 lg:justify-between px-2">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setActivePillar(idx)}
                onClick={() => setActivePillar(idx)}
                className={`group flex items-center gap-5 p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activePillar === idx
                    ? "bg-white/[0.03] border-white/10"
                    : "bg-transparent border-white/[0.05] hover:bg-white/[0.02]"
                }`}
              >
                <div
                  className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-sm font-semibold border transition-all duration-500 ${
                    activePillar === idx
                      ? "bg-[#FFA16C]/10 border-[#FFA16C]/30 text-[#FFA16C]"
                      : "bg-white/5 border-white/5 text-white/20 group-hover:text-white/40"
                  }`}
                >
                  {pillar.number}
                </div>
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <h4 className="text-lg md:text-xl font-medium text-white/90">
                    {pillar.title}
                  </h4>
                  <p className="text-[15px] font-light leading-relaxed text-[#707079]">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side Visual (Mobile: Bottom, Desktop: Right) */}
          <div className="mt-8 lg:mt-0 flex lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full rounded-2xl overflow-hidden relative group"
              >
                {/* Background Noise/Texture */}
                <div className="absolute inset-0 bg-black z-0" />
                <div className="absolute inset-0 opacity-20 z-10" style={{ backgroundImage: "url('/images/noise.png')" }} />
                
                <img
                  src={pillars[activePillar].image}
                  alt={pillars[activePillar].title}
                  className="w-full h-full object-cover rounded-2xl relative z-20 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
                
                {/* Visual Overlay like the screenshot sphere hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-30" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>

    </Section>
  );
}

