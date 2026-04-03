"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import LightStreaks from "@/components/animations/LightStreaks";

export default function Vision() {
  const line1 = "We do not over explain.";
  const line2 = "We do not over promise.";
  const line3 = "We simply build work that speaks for itself,";
  const line4 = "quietly, confidently,";
  const line5 = "and at a level that stands apart.";

  return (
    <section id="vision" className="relative w-full py-24 md:py-32 lg:py-40 bg-black overflow-hidden">
      {/* Background: Light Streaks / Three.js Visual */}
      <div className="absolute inset-0 z-0 opacity-50 grayscale contrast-125">
        <div 
          className="w-full h-full absolute inset-0"
          style={{
            maskImage: "radial-gradient(ellipse 80% 60% at center, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at center, black 0%, transparent 70%)"
          }}
        >
          <LightStreaks />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-16">
          {/* Left: Label */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full bg-white"
                style={{ boxShadow: "0 0 20px #fff" }}
              />
              <h2 className="text-xs uppercase tracking-widest text-[#707079] font-medium">
                Our vision
              </h2>
            </div>
          </div>

          {/* Right: Vision Text */}
          <div className="md:w-2/3 md:max-w-2xl">
            <p className="sr-only">
              We do not over explain. We do not over promise. We simply build
              work that speaks for itself, quietly, confidently, and at a
              level that stands apart.
            </p>
            
            <div className="text-[28px] md:text-[34px] lg:text-[42px] font-light leading-[1.1] tracking-[-0.02em] text-white/50 space-y-4">
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {line1}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                {line2}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              >
                {line3}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="text-white font-medium"
              >
                {line4}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="text-white font-medium"
              >
                {line5}
              </motion.p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
