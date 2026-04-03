"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Footer() {
  const [time, setTime] = useState<Date>(new Date());

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      // Get current time in Detroit (Eastern Time)
      const detroitTimeStr = new Date().toLocaleString("en-US", {
        timeZone: "America/Detroit",
      });
      setTime(new Date(detroitTimeStr));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentYear = new Date().getFullYear();
  
  // Calculate rotation angles
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  // Format digital time strings for the overlay
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  return (
    <footer className="relative w-full bg-black pt-24 pb-12 overflow-hidden">
      <Container>
        {/* Clock Section */}
        <div className="flex flex-col items-center mb-16 relative">
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Clock Surface bottom light / base */}
            <div className="absolute inset-0 z-0">
               <img 
                 alt="Clock surface light" 
                 src="/images/surface-bottom_4x.webp" 
                 className="w-full h-auto absolute bottom-0 translate-y-1/2 opacity-60 scale-150"
                 loading="lazy" 
               />
            </div>

            {/* Clock Body / Lighting */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                alt="Clock body light" 
                src="/images/clock-body_4x.png" 
                className="w-full h-auto opacity-80"
                loading="lazy" 
              />
            </div>

            {/* Digital Time Overlays (Background/Ghost) */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
               <div className="absolute top-[20%] text-[10px] md:text-xs text-[#707079] font-mono tracking-tighter">
                 {formatTime(time)}
               </div>
            </div>

            {/* Exploded Hours / Markers */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
               <img 
                 alt="Hours exploded" 
                 src="/images/hours-exploded.svg" 
                 className="w-full h-auto opacity-40 scale-105"
                 loading="lazy" 
               />
            </div>

            {/* Main Watchface */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
               <img 
                 alt="Watch face" 
                 src="/images/watchface.svg" 
                 className="w-full h-auto"
                 loading="lazy" 
               />
            </div>

            {/* Hands Layer Container */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              {/* Hour Hand */}
              <div 
                className="absolute inset-0 transition-transform duration-700 ease-out" 
                style={{ transform: `rotate(${hourDeg}deg)` }}
              >
                <img 
                  alt="Hour hand" 
                  src="/images/hour.webp" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Minute Hand */}
              <div 
                className="absolute inset-0 transition-transform duration-700 ease-out" 
                style={{ transform: `rotate(${minuteDeg}deg)` }}
              >
                <img 
                  alt="Minute hand" 
                  src="/images/minute.webp" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Second Hand (Tick movement) */}
              <div 
                className="absolute inset-0" 
                style={{ transform: `rotate(${secondDeg}deg)` }}
              >
                <img 
                  alt="Second hand" 
                  src="/images/second.webp" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Knob */}
              <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center">
                <img 
                  alt="Clock knob" 
                  src="/images/knob.webp" 
                  className="w-full h-full object-contain opacity-90"
                />
              </div>
            </div>

            {/* DTW Label */}
            <div className="absolute bottom-[28%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-80">
               <span className="text-[10px] font-bold tracking-[0.2em] text-[#9DEDFF]">DTW</span>
            </div>
          </div>

          {/* Bottom surface asset shadow */}
          <div className="relative w-full flex justify-center -mt-20 md:-mt-24 pointer-events-none">
            <img 
              alt="Clock surface" 
              src="/images/surface-bottom_4x.webp" 
              className="w-full max-w-4xl opacity-100" 
              loading="lazy" 
            />
          </div>
        </div>

        {/* Footer Navigation & Copyright */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 text-[#707079] text-sm">
          {/* Left: Copyright and Contact */}
          <div className="flex items-center gap-4 order-last md:order-first">
            <div>© {currentYear}, Ninth Degree Group LLC</div>
            <a 
              href="mailto:hello@ninth.llc" 
              className="hover:text-white transition-colors duration-300"
              aria-label="Email hello@ninth.llc"
            >
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 512 512" 
                className="text-xl" 
                height="1em" 
                width="1em" 
              >
                <path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z" />
                <path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z" />
              </svg>
            </a>
          </div>

          {/* Right: Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[#707079]">
            <Link href="#services" className="hover:text-white transition-colors">Capabilities</Link>
            <Link href="#method" className="hover:text-white transition-colors">Method</Link>
            <Link href="#intelligence" className="hover:text-white transition-colors">Intelligence</Link>
            <Link href="#industries" className="hover:text-white transition-colors">Industries</Link>
            <Link href="#team" className="hover:text-white transition-colors">Team</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
