"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const cards = [
  {
    id: "discovery",
    title: "Discovery",
    desc: "Define outcomes, constraints, and success metrics",
    duration: "1-2 weeks",
    startWeek: 1.0,
    colSpan: 1.8,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#FFA16C" strokeWidth="2"/>
        <path d="M12 7V12L15 15" stroke="#FFA16C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: "blueprint",
    title: "Blueprint",
    desc: "Architecture, scope boundaries, and execution plan",
    duration: "1-2 weeks",
    startWeek: 2.8,
    colSpan: 1.8,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="15" width="13" height="6" rx="1.5" fill="#FFA16C" fillOpacity="0.2" stroke="#FFA16C" strokeWidth="2"/>
        <rect x="6" y="9" width="13" height="6" rx="1.5" fill="#FFA16C" fillOpacity="0.4" stroke="#FFA16C" strokeWidth="2"/>
        <rect x="9" y="3" width="13" height="6" rx="1.5" fill="#FFA16C" fillOpacity="1" stroke="#FFA16C" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: "design",
    title: "Design",
    desc: "User journeys, UI system, prototypes",
    duration: "2-3 weeks",
    startWeek: 4.6,
    colSpan: 3.2,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19L19 12L22 15L15 22L12 19Z" fill="#FFA16C"/>
        <path d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z" stroke="#FFA16C" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="8" cy="8" r="1.5" fill="#FFA16C"/>
      </svg>
    )
  },
  {
    id: "build",
    title: "Build",
    desc: "Sprint based delivery with clear milestones",
    duration: "2-3 weeks",
    startWeek: 7.8,
    colSpan: 4.0,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 18l6-6-6-6" stroke="#FFA16C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 6l-6 6 6 6" stroke="#FFA16C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: "hardening",
    title: "Hardening",
    desc: "QA, performance, reliability, release readiness",
    duration: "1-2 weeks",
    startWeek: 11.8,
    colSpan: 2.0,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="#FFA16C"/>
      </svg>
    )
  },
  {
    id: "launch",
    title: "Launch",
    desc: "Deployment, monitoring, and ongoing improvement",
    duration: "1-2 weeks",
    startWeek: 13.8,
    colSpan: 0.2, // and beyond
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill="#FFA16C"/>
        <path d="M12 15L9 12A22 22 0 0 1 11 8.05A12.88 12.88 0 0 1 22 2C22 4.72 21.22 9.5 16 13A22.35 22.35 0 0 1 12 15Z" fill="#FFA16C"/>
      </svg>
    )
  },
];

export default function Method() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Vertical Input Inversion (Orange Particles flow into the node center)
  const verticalInputOpacity = useTransform(smoothProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const timelineX = useTransform(smoothProgress, [0.15, 1], ["0%", "-68%"]);

  return (
    <section ref={containerRef} id="timeline" className="relative w-full h-[600vh] bg-[#0a0a0a]">
      {/* Background Depth Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none" />
      
      <div className="sticky top-0 h-screen w-full flex flex-col items-center overflow-hidden">
        
        {/* ── HEADER ── */}
        <div className="w-full max-w-[1440px] pt-12 md:pt-24 px-[6%] z-50 pointer-events-none self-start">
          <div className="flex items-center gap-2 mb-6 lg:mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_15px_#fff]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#707079] font-medium">Process</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-medium leading-[1.3] tracking-[-0.2px] text-white fog-effect max-w-4xl">
            <span className="text-[#FFA16C]">A composed process,</span>{" "}
            <span className="opacity-90">even when the work is complex.</span>
          </h2>
          <p className="text-sm sm:text-base font-light leading-[150%] tracking-[0.4px] text-[#707079] mt-3 sm:mt-2">
            No noise. No chaos. Just precision.
          </p>
        </div>

        {/* ── INTRO INPUT ── */}
        <div className="absolute inset-x-0 h-1/2 top-0 pointer-events-none z-10">
          <motion.div 
            style={{ opacity: verticalInputOpacity }}
            className="absolute left-[8%] md:left-[12%] top-0 h-full w-[1px] overflow-hidden"
          >
            <div className="h-full w-full bg-gradient-to-b from-white/0 via-[#FFA16C]/30 to-[#FFA16C]" />
          </motion.div>
        </div>

        {/* ── TIMELINE TRACK AREA ── */}
        <div className="w-full max-w-[1440px] px-4 sm:px-5 lg:px-10 h-[55%] mt-10 sm:mt-16">
          <div className="w-full h-full rounded-2xl border bg-[#0e0e0e] border-[#252525] p-4 sm:p-8 xl:p-16 flex items-center justify-center min-h-[250px] sm:min-h-[300px] sm:max-h-[52svh] overflow-hidden relative">
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,161,108,0.02)_0%,transparent_50%)]" />
            
            {/* Overlay (Fix 1) — Vignette for scrolling edges */}
            <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-black via-transparent to-transparent opacity-30 z-30 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-black via-transparent to-transparent opacity-30 z-30 pointer-events-none" />


            <motion.div 
              style={{ x: timelineX }}
              className="flex h-full min-w-[450vw] sm:min-w-[320vw] relative"
            >
              {/* Grid Columns */}
              <div className="absolute inset-0 flex">
                {[...Array(14)].map((_, i) => (
                  <div key={i} className="flex-1 border-r border-white/[0.08] relative h-full">
                    <span className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-medium text-[#707079] tracking-widest opacity-40">
                      {`Week ${i + 1}`}
                    </span>
                  </div>
                ))}
              </div>

              {/* Cards Container */}
              <div className="relative w-full h-full pt-28 sm:pt-32 pb-12">
                {cards.map((card, index) => (
                  <PhaseCard 
                    key={card.id} 
                    card={card} 
                    index={index} 
                    scrollYProgress={smoothProgress} 
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

function PhaseCard({ card, index, scrollYProgress }: { card: any, index: number, scrollYProgress: any }) {
  // Stagger reveal relative to horizontal entry
  // Fix 5 — Calibrated animation range
  const start = 0.05 + (index * 0.08);
  const end = start + 0.12;
  
  const y = useTransform(scrollYProgress, [start, end], [120, 0]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const scale = useTransform(scrollYProgress, [start, end], [0.97, 1]);

  // Card spans a variable width based on weeks
  const weekWidth = 100 / 14; 
  const cardWidth = `${card.colSpan * weekWidth}%`;
  const leftPos = `${(card.startWeek - 1) * weekWidth}%`;
  
  // Explicit vertical positions for the "staircase" reveal
  const verticalOffsets = [
    "8%",   // Discovery
    "40%",  // Blueprint
    "72%",  // Design (lower)
    "8%",   // Build (new row start)
    "40%",  // Hardening
    "72%"   // Launch
  ];

  return (
    <motion.div 
      style={{ 
        left: leftPos, 
        width: cardWidth,
        top: verticalOffsets[index],
        y, 
        opacity,
        scale
      }}
      className="absolute min-w-[280px] sm:min-w-[320px] max-w-[480px] z-20 group px-2 sm:px-0"
    >
      <div className="p-[1px] rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-2xl">
        <div 
          className="bg-[#0e0e0e]/80 backdrop-blur-xl border border-white/[0.05] p-6 sm:p-8 rounded-[calc(1rem-1px)] flex flex-col relative overflow-hidden transition-all duration-700 group-hover:bg-[#121214]/90 group-hover:border-white/10"
          style={{ minHeight: '260px' }}
        >
          
          {/* Subtle Diagonal Highlight */}
          <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[200%] bg-gradient-to-br from-white/[0.03] via-transparent to-transparent rotate-[25deg] pointer-events-none" />

          {/* Top Row: Icon Box & Duration Label */}
          <div className="flex justify-between items-start mb-6 sm:mb-8 relative z-10 w-full">
            <div className="bg-[#FFA16C]/10 p-2.5 sm:p-3 rounded-[10px] sm:rounded-[12px] border border-[#FFA16C]/20 shadow-[0_0_20px_rgba(255,161,108,0.1)] backdrop-blur-md">
              <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                {card.icon}
              </div>
            </div>
            <span className="text-[10px] sm:text-xs font-medium text-[#707079] tracking-tight mt-1 opacity-50">
              {card.duration}
            </span>
          </div>

          {/* Middle: Title */}
          <h3 className="text-white text-lg sm:text-xl font-semibold tracking-tight leading-none mb-3 relative z-10">
            {card.title}
          </h3>

          {/* Bottom: Description */}
          <p className="text-[#707079] text-xs sm:text-sm font-normal leading-relaxed max-w-[95%] relative z-10">
            {card.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
