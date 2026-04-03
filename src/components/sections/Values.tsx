"use client";

import React, { useState } from "react";
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
  const [activePillar, setActivePillar] = React.useState(0);

  return (
    <Section className="bg-black py-12 md:py-20 lg:py-24">
      <Container>
        <div className="mb-6 lg:mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-2 h-2 rounded-full bg-white"
              style={{ boxShadow: "0 0 20px #fff" }}
            />
            <h2 className="text-xs uppercase tracking-widest text-[#707079] font-medium">
              Our core pillars
            </h2>
          </div>
          <h3 className="text-[28px] md:text-[40px] font-medium leading-[1.3] tracking-[-0.2px] text-white">
            <span className="block mb-2">The NINTH° Standard:</span>
            <span className="text-[#FFA16C]">Uncompromising Excellence</span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-12">
          {/* Left Pillar Cards (Desktop: 1/2 width) */}
          <div className="flex flex-col gap-3 lg:w-1/2 lg:justify-between">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setActivePillar(idx)}
                onClick={() => setActivePillar(idx)}
                className={`group flex items-center gap-5 p-5 rounded-xl border transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                  activePillar === idx
                    ? "bg-[#FFA16C]/10 border-[#FFA16C]/20"
                    : "bg-white/2 border-white/5 hover:bg-white/5 hover:border-white/10"
                }`}
              >
                <div
                  className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium border transition-all duration-300 ${
                    activePillar === idx
                      ? "bg-[#FFA16C]/10 border-[#FFA16C]/20 text-[#FFA16C]"
                      : "bg-white/5 border-white/5 text-white/30 group-hover:border-white/10 group-hover:text-white/50"
                  }`}
                >
                  {pillar.number}
                </div>
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <h4
                    className={`text-base md:text-lg font-medium transition-colors duration-300 ${
                      activePillar === idx ? "text-white" : "text-white"
                    }`}
                  >
                    {pillar.title}
                  </h4>
                  <p
                    className={`text-sm md:text-[15px] font-light leading-normal tracking-[0.2px] transition-colors duration-300 ${
                      activePillar === idx ? "text-[#707079]" : "text-[#707079]"
                    }`}
                  >
                    {pillar.description}
                  </p>
                </div>
                {activePillar === idx && (
                  <div className="hidden md:block shrink-0 w-1 h-10 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="w-full bg-[#FFA16C] rounded-full origin-top"
                      style={{
                        height: "100%",
                        animation: "progressFill 5000ms linear forwards",
                      }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Side Image (Desktop only) */}
          <div className="hidden lg:flex lg:w-1/2 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full rounded-3xl overflow-hidden"
              >
                <img
                  src={pillars[activePillar].image}
                  alt={pillars[activePillar].title}
                  className="w-full h-full object-cover rounded-2xl"
                  style={{ minHeight: "420px" }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes progressFill {
          from {
            transform: scaleY(0);
            transform-origin: top;
          }
          to {
            transform: scaleY(1);
            transform-origin: top;
          }
        }
      `}</style>
    </Section>
  );
}

