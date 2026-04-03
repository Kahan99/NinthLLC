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

  const scaleValue = useTransform(scrollYProgress, [0.1, 0.4], [0.5, 0.35]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.5], [0, 1, 1, 0]);

  return (
    <div id="team" ref={containerRef} className="relative bg-black">
      {/* Intro Graphic Section - Matches the provided reference HTML/Visual */}
      <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Header Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute top-8 sm:top-12 md:top-20 left-0 right-0 flex justify-center px-4 z-20"
        >
          <h2 className="text-[#FFA16C] text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight text-center uppercase">
            THE TEAM
          </h2>
        </motion.div>

        {/* Central Graphic & Dynamic Headline */}
        <motion.div 
          style={{ scale: scaleValue, opacity: opacityValue }}
          className="relative z-10 w-full px-3 sm:px-5 md:px-0 flex flex-col items-center will-change-transform"
        >
          <img 
            src="/images/thirty.webp" 
            alt="30" 
            width={800} 
            height={600} 
            loading="eager" 
            className="w-full h-auto object-contain scale-100 px-3 sm:px-5 md:px-0"
          />
          <p className="text-[#707079] text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-light text-center mt-2 md:mt-0 whitespace-nowrap px-2 md:absolute md:bottom-[26%] md:left-1/2 md:-translate-x-1/2">
            <span className="text-white">A players</span>, assembled per engagement.
          </p>
        </motion.div>

        {/* Bottom Description Paragraph */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24 xl:bottom-32 left-0 right-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center z-20"
        >
          <p className="text-[#707079] text-base sm:text-lg md:text-sm lg:text-base xl:text-xl 2xl:text-[28px] font-light leading-[1.3] max-w-88 sm:max-w-2xl md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl text-balance">
            You are <span className="text-white font-medium">not hiring a generic agency roster.</span>
            {" "}You are engaging{" "}
            <span className="text-white font-medium">senior builders across design, engineering, architecture, QA, and delivery</span>
            {" "}—{" "}
            <span className="text-white font-medium">selected for your exact work.</span>
          </p>
        </motion.div>
      </div>

      {/* Founder Led Section: Matches the "Founder led. Senior by default." layout */}
      <div className="bg-black pt-20 pb-40">
        <Container>
          <div className="flex flex-col items-center text-center mb-12 md:mb-16 lg:mb-20">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-white" style={{ boxShadow: "0 0 20px #fff" }} />
              <p className="text-xs uppercase tracking-widest text-[#707079] font-medium">
                Founding Team
              </p>
            </div>
            <h2 className="text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-medium leading-[1.2] tracking-[-0.2px] text-white fog-effect mb-4">
              Founder led. <span className="text-[#FFA16C]">Senior by default.</span>
            </h2>
            <p className="text-lg md:text-xl text-[#707079] max-w-2xl text-balance">
              You work with decision makers, backed by a team built for precision delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {principals.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="relative h-full"
              >
                {/* Glow Line Top (Outer) */}
                <div 
                  className="absolute inset-x-0 top-0 h-[1px] -mb-[1px] z-[1] mx-[2px] rounded-t-3xl overflow-hidden" 
                  style={{ backgroundImage: 'linear-gradient(to right, transparent 2%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255, 0.8) 65%, transparent 98%)' }}
                />

                {/* Outer Frame Shell */}
                <div 
                  className="rounded-3xl p-2 overflow-hidden shadow-[inset_0_0_8px_rgba(0,0,0,0.4),0_0_60px_rgba(0,0,0,0.2),0_30px_80px_rgba(0,0,0,0.5)]" 
                  style={{ 
                    backgroundImage: 'radial-gradient(circle farthest-side at 50% 0, rgba(242, 242, 242, 0.2), transparent)',
                    outline: '1px solid rgba(242, 242, 242, 0.15)',
                    outlineOffset: '-1px'
                  }}
                >
                  {/* Inner Glow Stripe */}
                  <div className="h-[2px] -mb-[2px]" style={{ backgroundImage: 'linear-gradient(to right, transparent 10%, rgb(255, 255, 255) 50%, transparent 90%)' }} />

                  {/* Inner Glass Card Body */}
                  <div 
                    className="rounded-2xl overflow-hidden border border-[rgba(242,242,242,0.3)] shadow-[inset_0_0_10px_rgba(0,0,0,0.1),0_0_12px_rgba(0,0,0,0.4)] backdrop-blur-[20px]"
                  >
                    <div className="flex flex-col h-full bg-black">
                      {/* Portrait Container */}
                      <div className="relative w-full aspect-4/3 bg-black overflow-hidden group">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="object-contain object-bottom w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000"
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
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

                        {/* Signature Section - Exact SVGs from Reference */}
                        <div className="mt-4 lg:mt-6 pt-3 lg:pt-4 border-t border-white/10 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-700 h-10 lg:h-12 overflow-hidden">
                          <div className="flex items-center text-white scale-75 lg:scale-100">
                             {member.name === "Vaishali Shah" && (
                               <div className="flex gap-1">
                                 <svg height="51" width="41" viewBox="0 0 41 51"><path d="M17.7137 11.0771C1.95501 41.7408 0.214021 47.5771 2.71479 48.0771C5.21556 48.5771 21.7148 24.0771 39.2137 3.07715" stroke="currentColor" fill="none" /></svg>
                                 <svg height="51" width="13" viewBox="0 0 13 51"><path d="M5.99958 25C5.73591 21.1582 1.99899 25.5 1.49941 28C1.00013 30.5 7.65454 23.3545 7.65454 23.3545C3.5802 27.3691 3.29278 30.5313 4.09638 30.7478C5.08629 31.0263 12.2012 24.7466 12.2012 24.7466" stroke="currentColor" fill="none" /></svg>
                                 <svg height="51" width="9" viewBox="0 0 9 51"><path d="M3.7548 22.9229C2.60207 23.529 -0.752212 29.5295 1.61166 28.7618C3.97553 27.994 5.61205 25.8726 7.67374 24.721" stroke="currentColor" fill="none" /></svg>
                                 <svg height="51" width="14" viewBox="0 0 14 51"><path d="M8.95035 23.3347C8.289 21.833 5.66489 23.7794 5.71956 28.8314C5.77422 33.8834 1.12107 35.424 0.98514 33.3617C0.883641 31.4008 3.52325 32.4975 12.6583 24.7513" stroke="currentColor" fill="none" /></svg>
                                 <svg height="51" width="18" viewBox="0 0 18 51"><path d="M14.75 6.08472C8.75724 15.6124 5.74081 20.6113 1.16797 28.7222C2.27051 26.7174 7.40879 23.7648 9.19185 23.8223C10.4381 23.8798 8.46919 26.815 9.75037 27.5733C11.2054 28.4346 16.3726 24.6677 16.3726 24.6677" stroke="currentColor" fill="none" /></svg>
                               </div>
                             )}
                             {member.name === "Kamal Shah" && (
                               <div className="flex gap-1">
                                 <svg height="51" width="59" viewBox="0 0 59 51"><path d="M30.6585 5.69873C20.8873 19.471 15.4101 28.7219 5.65848 46.1987C22.4604 13.4133 39.6585 11.6987 53.1585 9.69873C64.6585 8.19873 51.1585 20.1987 51.1585 20.1987C80.6585 -7.30127 -1.22332 24.1987 1.15848 37.6987C2.39349 44.6987 37.1585 35.6987 37.1585 35.6987" stroke="currentColor" fill="none" /></svg>
                                 <svg height="51" width="13" viewBox="0 0 13 51"><path d="M5.99958 25C5.73591 21.1582 1.99899 25.5 1.49941 28C1.00013 30.5 7.65454 23.3545 7.65454 23.3545C3.5802 27.3691 3.29278 30.5313 4.09638 30.7478C5.08629 31.0263 12.2012 24.7466 12.2012 24.7466" stroke="currentColor" fill="none" /></svg>
                                 <svg height="51" width="19" viewBox="0 0 19 51"><path d="M4.23047 23.5026L0.871094 29.4474C3.50472 25.5411 6.75255 22.8947 9.44272 21.6504C7.06863 25.4683 5.83806 27.9029 6.63039 28.2444C7.09897 28.3943 7.92245 27.8359 12.5443 24.6228C11.5082 26.1726 11.4655 26.753 11.9412 27.2936C12.31 27.6478 13.3286 27.1883 17.2828 24.5797" stroke="currentColor" fill="none" /></svg>
                               </div>
                             )}
                             {member.name === "Rajiv Shah" && (
                               <div className="flex gap-1">
                                 <svg height="51" width="58" viewBox="0 0 58 51"><path d="M12.0195 45.3685C19.1859 32.3806 23.0999 25.7226 32.0203 11.3685C21.5205 20.8685 5.01953 34.2139 1.01953 30.7139C6.01953 17.2138 71.5195 -7.28639 53.5188 13.7136C43.6613 25.2136 12.0195 41.7136 14.0195 38.2136C37.0871 17.3054 32.9838 44.188 46.7608 39.6997" stroke="currentColor" fill="none" /></svg>
                                 <svg height="51" width="13" viewBox="0 0 13 51"><path d="M5.99958 25C5.73591 21.1582 1.99899 25.5 1.49941 28C1.00013 30.5 7.65454 23.3545 7.65454 23.3545C3.5802 27.3691 3.29278 30.5313 4.09638 30.7478C5.08629 31.0263 12.2012 24.7466 12.2012 24.7466" stroke="currentColor" fill="none" /></svg>
                                 <svg height="51" width="23" viewBox="0 0 23 51"><path d="M18.24 23.0059C16.0413 28.6829 1.71142 51.8946 1.71177 43.8826C1.62097 38.7092 9.17395 37.2442 21.5819 24.5625" stroke="currentColor" fill="none" /></svg>
                               </div>
                             )}
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
