"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

const industries = [
  { 
    name: "E-commerce", 
    image: "/images/Ecom.png",
    description: "From DTC storefronts to marketplace platforms, we build buying experiences that convert and scale."
  },
  { 
    name: "Fintech", 
    image: "/images/Fintech.png",
    description: "High-precision interfaces and secure workflows for modern financial systems and digital assets."
  },
  { 
    name: "Real Estate", 
    image: "/images/Real-estate.png",
    description: "Immersive digital platforms that transform property discovery, management, and transactions."
  },
  { 
    name: "Manufacturing", 
    image: "/images/Manufacturing.png",
    description: "Intelligent interfaces for complex supply chains, IoT monitoring, and operational efficiency."
  },
  { 
    name: "Healthcare", 
    image: "/images/Healthcare.png",
    description: "HIPAA-compliant platforms designed for patient care, data privacy, and clinical efficiency."
  },
  { 
    name: "Logistics", 
    image: "/images/Logistics.jpg",
    description: "Real-time tracking and optimization tools for global moving parts and complex delivery networks."
  },
];

export default function Industries() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <Section id="industries" className="py-12 md:py-20 lg:py-24 bg-black">
      <Container>
        <div className="flex flex-col gap-4 mb-6 lg:mb-10">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full bg-white"
              style={{ boxShadow: "0 0 20px #fff" }}
            />
            <span className="text-xs uppercase tracking-widest text-[#707079] font-medium">
              Industries
            </span>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-medium sm:leading-[125%] leading-none tracking-[-0.1px] text-white">
            <span className="block mb-2">
              Enterprise, consumer, regulated, fast moving, niche, or mass
              market. If it has users, workflows, and real stakes,
            </span>
            <span className="text-[#FFA16C]">we have built for it.</span>
          </h2>
        </div>
      </Container>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-5 lg:px-[max(1.25rem,calc((100vw-80rem)/2))]"
      >
        {industries.map((industry, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="relative shrink-0 rounded-3xl overflow-hidden group"
          >
            <div className="relative h-full w-full overflow-hidden cursor-pointer">
              {/* Image with Blur Filter */}
              <div className="h-full w-full transition-all duration-500 group-hover:blur-[10px]">
                <img
                  src={industry.image}
                  alt={industry.name}
                  width={400}
                  height={520}
                  loading="lazy"
                  className="h-[320px] sm:h-[min(43svh,520px)] w-auto object-contain"
                />
              </div>

              {/* Text Overlay - Visible on Hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-t from-black/80 via-black/40 to-transparent text-left">
                <h3 className="text-white text-2xl lg:text-3xl font-medium mb-2 lg:mb-4">
                  {industry.name}
                </h3>
                <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-[280px]">
                  {industry.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Controls */}
      <Container>
        <div className="flex items-center justify-between mt-8 px-5 lg:px-0">
          <div className="flex items-center gap-2 text-[#707079] hover:text-white transition-colors cursor-pointer group">
            <span className="text-md">Improved outcomes for millions</span>
          </div>
          <div className="flex gap-3">
            {/* Scroll Left Button */}
            <button 
              onClick={() => scroll('left')}
              aria-label="Scroll left" 
              className="flex items-center justify-center p-2.5 
                cursor-pointer
                bg-[linear-gradient(137deg,#111214_4.87%,#0c0d0f_75.88%)]
                border-t border-l border-r border-white/[0.06]
                rounded-[86px]
                shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.1)]
                transition-all duration-300 ease-in-out
                text-white hover:text-white/80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-5 h-5 rotate-180" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
            </button>

            {/* Scroll Right Button */}
            <button 
              onClick={() => scroll('right')}
              aria-label="Scroll right" 
              className="flex items-center justify-center p-2.5 
                cursor-pointer
                bg-[linear-gradient(137deg,#111214_4.87%,#0c0d0f_75.88%)]
                border-t border-l border-r border-white/[0.06]
                rounded-[86px]
                shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.1)]
                transition-all duration-300 ease-in-out
                text-white hover:text-white/80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-5 h-5" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
