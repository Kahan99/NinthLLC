"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { ShaderAnimation } from "@/components/ui/shader-lines";

export default function Vision() {
  const phrase1 = "We do not over explain. We do not over promise. We simply build work that speaks for itself,";
  const phrase2 = "quietly, confidently, and at a level that stands apart.";

  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10, filter: "blur(10px)" },
    whileInView: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as any,
      },
    },
  };

  return (
    <section id="vision" className="relative w-full py-24 md:py-32 bg-black overflow-hidden">
      {/* ── BACKGROUND: SHADER ANIMATION ── */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          maskImage: "radial-gradient(ellipse 80% 60% at center, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at center, black 0%, transparent 70%)"
        }}
      >
        <div className="w-full h-full absolute">
          <ShaderAnimation />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-16">
          
          {/* Left: Section Label */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full bg-white transition-all duration-300" 
                style={{ boxShadow: "0 0 20px #fff" }} 
              />
              <h2 className="text-xs uppercase tracking-widest text-[#707079] font-medium">
                Our vision
              </h2>
            </div>
          </div>

          {/* Right: Vision Content */}
          <div className="md:w-2/3 md:max-w-2xl">
            <p className="sr-only">
              {phrase1} {phrase2}
            </p>
            
            <motion.div 
              variants={containerVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              className="text-[28px] md:text-[40px] font-light leading-[1.1] tracking-[-0.02em] text-white/70" 
              aria-hidden="true"
            >
              <motion.span variants={itemVariants} className="inline-block whitespace-pre-wrap">
                {phrase1}
              </motion.span>
              {" "}
              <motion.span variants={itemVariants} className="inline-block whitespace-pre-wrap text-white font-medium">
                {phrase2}
              </motion.span>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
