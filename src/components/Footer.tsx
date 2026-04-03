"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Footer() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const detroitTimeStr = new Date().toLocaleString("en-US", {
        timeZone: "America/Detroit",
      });
      setTime(new Date(detroitTimeStr));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentYear = new Date().getFullYear();
  
  if (!time) return <footer className="bg-black py-40" />;

  // Calculate rotations
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  const digitalTime = time.toLocaleTimeString("en-US", {
    hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true,
  });

  return (
    <footer className="relative w-full bg-black pt-24 pb-20 border-t border-white/5">
      <Container>
        
        {/* SECTION: CLOCK (REFINED FOR EXACT PARITY) */}
        <div className="flex flex-col items-center mb-16 select-none">
          <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
            
            {/* 1. Mount Surface Light (Moved from back to base) */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center translate-y-[10%] pointer-events-none">
              <img 
                alt="" 
                src="/images/surface-bottom_4x.webp" 
                className="w-full h-auto opacity-100 scale-[2.2] brightness-125 select-none"
                loading="lazy"
              />
              {/* Reference Decorative Highlights (hAJHK) */}
              <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 flex items-center gap-10 opacity-30">
                <div className="w-[120px] h-px bg-linear-to-r from-transparent via-white to-transparent" />
                <div className="w-[60px] h-px bg-linear-to-r from-transparent via-white/50 to-transparent" />
              </div>
            </div>

            {/* 2. Clock Body Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Body Frame Glow (Reference: elSRtK) */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-1000">
                <img 
                  alt="" 
                  src="/images/clock-body_4x.png" 
                  className="w-[90%] h-auto opacity-100" 
                  loading="lazy"
                />
              </div>

              {/* Main Face Area (grUiNf) */}
              <div className="relative w-[67%] aspect-square flex items-center justify-center -translate-y-[12%]">
                
                {/* Hours Exploded (kLZFTn) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 scale-[1.08]">
                  <img alt="" src="/images/hours-exploded.svg" className="w-full h-full object-contain" />
                </div>

                {/* Watch Face (watchface.svg) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-90">
                  <img alt="" src="/images/watchface.svg" className="w-full h-full object-contain" />
                </div>

                {/* Hands Layer (jsx-136507810) */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  {/* Hour Hand (Silver) */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out"
                    style={{ transform: `rotate(${hourDeg}deg)` }}
                  >
                    <img alt="Hour hand" src="/images/hour.webp" className="w-full h-full object-contain brightness-150" />
                  </div>
                  {/* Minute Hand (Silver) */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out"
                    style={{ transform: `rotate(${minuteDeg}deg)` }}
                  >
                    <img alt="Minute hand" src="/images/minute.webp" className="w-full h-full object-contain brightness-150" />
                  </div>
                  {/* Second Hand (Orange/Copper) */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ transform: `rotate(${secondDeg}deg)` }}
                  >
                    <img alt="Second hand" src="/images/second.webp" className="w-full h-full object-contain contrast-150 saturate-150" />
                  </div>
                  {/* Knob Pivot (Center) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img alt="" src="/images/knob.webp" className="w-full h-full object-contain scale-125 opacity-100" />
                  </div>
                </div>


                {/* DTW Label (Lower Half - Corrected Position) */}
                <div className="absolute bottom-[28%] z-10 flex flex-col items-center gap-1 opacity-100">
                  <span className="text-[9px] font-bold tracking-[0.3em] text-[#9DEDFF] drop-shadow-[0_0_8px_rgba(157,237,255,0.3)]">DTW</span>
                </div>

              </div>
            </div>
          </div>

          {/* MAIN PEDESTAL BASE (Tall darker stand matching reference) */}
          <div className="relative w-full flex justify-center -mt-[120px] md:-mt-16 pointer-events-none z-[5]">
             <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/0 via-black to-black" />
            <img 
              alt="" 
              src="/images/surface-bottom_4x.webp" 
              className="w-full max-w-4xl opacity-100 brightness-50 scale-x-150 scale-y-125" 
              loading="lazy" 
            />
          </div>
        </div>

        {/* Footer Navigation & Copyright */}
        <div className="relative z-10 mt-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 text-[#707079] text-[11px] tracking-tight">
          <div className="flex items-center gap-6 order-last md:order-first opacity-60">
            <div>© {currentYear}, Ninth Degree Group LLC</div>
            <a href="mailto:hello@ninth.llc" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 opacity-60">
            <Link href="#services" className="hover:text-white transition-colors">Capabilities</Link>
            <Link href="#timeline" className="hover:text-white transition-colors">Method</Link>
            <Link href="#intelligence" className="hover:text-white transition-colors">Intelligence</Link>
            <Link href="#teams" className="hover:text-white transition-colors">Team</Link>
            <Link href="#brand-promise" className="hover:text-white transition-colors">Principals</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
