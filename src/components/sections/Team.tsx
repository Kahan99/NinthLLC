"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

const principals = [
  {
    name: "Vaishali Shah",
    role: "Founding Partner",
    focus: "Strategy and Delivery",
    image: "/images/Vaishali-Shah.webp"
  },
  {
    name: "Kamal Shah",
    role: "CEO",
    focus: "Principal Sponsor",
    image: "/images/Kamal-Shah.webp"
  },
  {
    name: "Rajiv Shah",
    role: "Managing Partner",
    focus: "Client Relations",
    image: "/images/Rajiv-Shah.webp"
  }
];

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleValue = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 0.45]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.5], [0, 1, 1, 0]);

  return (
    <div id="teams" ref={containerRef} className="relative bg-black">
      {/* Intro Graphic Section */}
      <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Header Label */}
        <motion.div 
          style={{ opacity: opacityValue }}
          className="absolute top-10 sm:top-12 md:top-20 left-0 right-0 flex justify-center px-4"
        >
          <h2 id="teams-heading" className="text-[#FFA16C] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-center uppercase">
            THE TEAM
          </h2>
        </motion.div>

        {/* Central Graphic & Dynamic Headline */}
        <motion.div 
          style={{ scale: scaleValue, opacity: opacityValue }}
          className="relative z-10 w-full px-4 sm:px-5 md:px-0 flex flex-col items-center will-change-transform"
        >
          <img 
            src="/team/thirty.webp" 
            alt="30" 
            width={800} 
            height={600} 
            loading="eager" 
            className="w-full h-auto object-contain scale-[1.1] sm:scale-100 md:scale-35"
          />
          <p className="text-[#707079] text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-light text-center mt-4 md:mt-0 whitespace-nowrap px-4 md:absolute md:bottom-[26%] md:left-1/2 md:-translate-x-1/2">
            <span className="text-white">A players</span>, assembled per engagement.
          </p>
        </motion.div>


        {/* Bottom Description Paragraph */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute bottom-6 sm:bottom-4 md:bottom-4 lg:bottom-6 xl:bottom-8 left-0 right-0 flex flex-col items-center justify-center px-6 sm:px-6 text-center z-0"
        >
          <p className="text-[#707079] text-sm sm:text-base md:text-sm lg:text-base xl:text-xl font-light leading-[1.4] md:leading-[1.3] max-w-sm sm:max-w-2xl md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-balance">
            You are <span className="text-white font-medium">not hiring a generic agency roster.</span>
            {" "}You are engaging{" "}
            <span className="text-white font-medium">senior builders across design, engineering, architecture, QA, and delivery</span>
            {" "}—{" "}
            <span className="text-white font-medium">selected for your exact work.</span>
          </p>
        </motion.div>
      </div>

      {/* Founder Led Section */}
      <div className="bg-black pt-20 pb-40">
        <Container>
          <div className="flex flex-col items-center text-center mb-12 md:mb-16 lg:mb-20">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-white" style={{ boxShadow: "0 0 20px #fff" }} />
              <p className="text-xs uppercase tracking-widest text-[#707079] font-medium">
                Founding Team
              </p>
            </div>
            <h2 className="text-[25px] sm:text-[32px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-medium leading-[1.2] tracking-[-0.2px] text-white fog-effect mb-4 px-4 sm:px-0">
              Founder led. <span className="text-[#FFA16C]">Senior by default.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#707079] max-w-2xl px-6 sm:px-0 text-balance">
              You work with decision makers, backed by a team built for precision delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 auto-rows-fr px-6 sm:px-0">
            {principals.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="relative h-full flex flex-col"
              >
                {/* ── Outer Shell (Glow Border) ── */}
                <div 
                  className="absolute inset-x-0 top-0 h-[1px] -mb-[1px] z-[1] mx-[2px] rounded-t-3xl overflow-hidden" 
                  style={{ backgroundImage: 'linear-gradient(to right, transparent 2%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255, 0.8) 65%, transparent 98%)' }}
                />

                <div 
                  className="rounded-3xl p-2 overflow-hidden shadow-[inset_0_0_8px_rgba(0,0,0,0.4),0_0_60px_rgba(0,0,0,0.2),0_30px_80px_rgba(0,0,0,0.5)] flex-1 flex flex-col group" 
                  style={{ 
                    backgroundImage: 'radial-gradient(circle farthest-side at 50% 0, rgba(242, 242, 242, 0.2), transparent)',
                    outline: '1px solid rgba(242, 242, 242, 0.15)',
                    outlineOffset: '-1px'
                  }}
                >
                  {/* Top Edge Highlight */}
                  <div className="h-[2px] -mb-[2px]" style={{ backgroundImage: 'linear-gradient(to right, transparent 10%, rgb(255, 255, 255) 50%, transparent 90%)' }} />

                  {/* Inner Card Body */}
                  <div 
                    className="rounded-2xl overflow-hidden border border-[rgba(242,242,242,0.3)] shadow-[inset_0_0_10px_rgba(0,0,0,0.1),0_0_12px_rgba(0,0,0,0.4)] flex-1 flex flex-col"
                    style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
                  >
                    <div className="flex flex-col h-full bg-black flex-1">
                      {/* Portrait Container */}
                      <div className="relative w-full aspect-4/3 bg-black overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="object-contain object-bottom w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000"
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-black to-transparent" />
                      </div>

                      {/* Content Area */}
                      <div className="p-4 lg:p-6 flex flex-col flex-1 bg-black">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-white mb-1">{member.name}</h3>
                        <p className="text-xs md:text-sm lg:text-base text-[#707079] font-medium mb-2 lg:mb-3">
                          {member.role}, {member.focus}
                        </p>
                        <p className="text-xs md:text-sm lg:text-base text-[#707079] leading-relaxed flex-1">
                          {member.name === "Vaishali Shah" && "Product direction, execution oversight, and standards across every engagement."}
                          {member.name === "Kamal Shah" && "Executive leadership, client stewardship, and final accountability for outcomes."}
                          {member.name === "Rajiv Shah" && "Client communications, stakeholder alignment, and engagement coordination."}
                        </p>

                        {/* High-Fidelity Static Signature */}
                        <div className="mt-4 lg:mt-6 pt-3 lg:pt-4 border-t border-white/10 flex items-center justify-center opacity-80 h-10 lg:h-12">
                           <div className="flex items-center scale-90 lg:scale-100 signature-main">
                             {member.name === "Vaishali Shah" && <Signature_Vaishali />}
                             {member.name === "Kamal Shah" && <Signature_Kamal />}
                             {member.name === "Rajiv Shah" && <Signature_Rajiv />}
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

// ── DETAILED SIGNATURE COMPONENTS ──

function Signature_Vaishali() {
  const letters = [
    { d: "M17.7137 11.0771C1.95501 41.7408 0.214021 47.5771 2.71479 48.0771C5.21556 48.5771 21.7148 24.0771 39.2137 3.07715", w: 41 },
    { d: "M5.99958 25C5.73591 21.1582 1.99899 25.5 1.49941 28C1.00013 30.5 7.65454 23.3545 7.65454 23.3545C3.5802 27.3691 3.29278 30.5313 4.09638 30.7478C5.08629 31.0263 12.2012 24.7466 12.2012 24.7466", w: 13 },
    { d: "M3.7548 22.9229C2.60207 23.529 -0.752212 29.5295 1.61166 28.7618C3.97553 27.994 5.61205 25.8726 7.67374 24.721", w: 9 },
    { d: "M8.95035 23.3347C8.289 21.833 5.66489 23.7794 5.71956 28.8314C5.77422 33.8834 1.12107 35.424 0.98514 33.3617C0.883641 31.4008 3.52325 32.4975 12.6583 24.7513", w: 14 },
    { d: "M14.75 6.08472C8.75724 15.6124 5.74081 20.6113 1.16797 28.7222C2.27051 26.7174 7.40879 23.7648 9.19185 23.8223C10.4381 23.8798 8.46919 26.815 9.75037 27.5733C11.2054 28.4346 16.3726 24.6677 16.3726 24.6677", w: 18 },
    { d: "M5.99958 25C5.73591 21.1582 1.99899 25.5 1.49941 28C1.00013 30.5 7.65454 23.3545 7.65454 23.3545C3.5802 27.3691 3.29278 30.5313 4.09638 30.7478C5.08629 31.0263 12.2012 24.7466 12.2012 24.7466", w: 13 },
    { d: "M0.800781,34.0845C7.00167,23.7712 10.562,17.889 17.543,6.64502", w: 19 },
    { d: "M3.7548 22.9229C2.60207 23.529 -0.752212 29.5295 1.61166 28.7618C3.97553 27.994 5.61205 25.8726 7.67374 24.721", w: 9 },
  ];
  return (
    <div className="flex">
      {letters.map((l, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={`0 0 ${l.w} 51`} height="51" width={l.w}>
          <path d={l.d} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

function Signature_Kamal() {
  const letters = [
    { d: "M30.6585 5.69873C20.8873 19.471 15.4101 28.7219 5.65848 46.1987C22.4604 13.4133 39.6585 11.6987 53.1585 9.69873C64.6585 8.19873 51.1585 20.1987 51.1585 20.1987C80.6585 -7.30127 -1.22332 24.1987 1.15848 37.6987C2.39349 44.6987 37.1585 35.6987 37.1585 35.6987", w: 59 },
    { d: "M5.99958 25C5.73591 21.1582 1.99899 25.5 1.49941 28C1.00013 30.5 7.65454 23.3545 7.65454 23.3545C3.5802 27.3691 3.29278 30.5313 4.09638 30.7478C5.08629 31.0263 12.2012 24.7466 12.2012 24.7466", w: 13 },
    { d: "M4.23047 23.5026L0.871094 29.4474C3.50472 25.5411 6.75255 22.8947 9.44272 21.6504C7.06863 25.4683 5.83806 27.9029 6.63039 28.2444C7.09897 28.3943 7.92245 27.8359 12.5443 24.6228C11.5082 26.1726 11.4655 26.753 11.9412 27.2936C12.31 27.6478 13.3286 27.1883 17.2828 24.5797", w: 19 },
    { d: "M5.99958 25C5.73591 21.1582 1.99899 25.5 1.49941 28C1.00013 30.5 7.65454 23.3545 7.65454 23.3545C3.5802 27.3691 3.29278 30.5313 4.09638 30.7478C5.08629 31.0263 12.2012 24.7466 12.2012 24.7466", w: 13 },
    { d: "M0.800781,34.0845C7.00167,23.7712 10.562,17.889 17.543,6.64502", w: 19 },
  ];
  return (
    <div className="flex">
      {letters.map((l, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={`0 0 ${l.w} 51`} height="51" width={l.w}>
          <path d={l.d} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

function Signature_Rajiv() {
  const letters = [
    { d: "M12.0195 45.3685C19.1859 32.3806 23.0999 25.7226 32.0203 11.3685C21.5205 20.8685 5.01953 34.2139 1.01953 30.7139C6.01953 17.2138 71.5195 -7.28639 53.5188 13.7136C43.6613 25.2136 12.0195 41.7136 14.0195 38.2136C37.0871 17.3054 32.9838 44.188 46.7608 39.6997", w: 58 },
    { d: "M5.99958 25C5.73591 21.1582 1.99899 25.5 1.49941 28C1.00013 30.5 7.65454 23.3545 7.65454 23.3545C3.5802 27.3691 3.29278 30.5313 4.09638 30.7478C5.08629 31.0263 12.2012 24.7466 12.2012 24.7466", w: 13 },
    { d: "M18.24 23.0059C16.0413 28.6829 1.71142 51.8946 1.71177 43.8826C1.62097 38.7092 9.17395 37.2442 21.5819 24.5625", w: 23 },
    { d: "M3.7548 22.9229C2.60207 23.529 -0.752212 29.5295 1.61166 28.7618C3.97553 27.994 5.61205 25.8726 7.67374 24.721", w: 9 },
    { d: "M3.3522 23.8316C1.86784 24.4052 0.653752 28.489 0.990061 28.894C1.93472 29.1302 3.78484 26.7863 7.70664 21.334", w: 9 },
  ];
  return (
    <div className="flex">
      {letters.map((l, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={`0 0 ${l.w} 51`} height="51" width={l.w}>
          <path d={l.d} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}
