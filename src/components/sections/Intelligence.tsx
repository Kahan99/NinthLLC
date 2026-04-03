"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

const aiLogos = [
  { name: "OpenAI", src: "/images/openai.svg" },
  { name: "Claude", src: "/images/claude.svg" },
  { name: "Gemini", src: "/images/gemini.svg" },
  { name: "Perplexity", src: "/images/perplexity.svg" },
  { name: "Midjourney", src: "/images/midjourney.svg" },
];

export default function Intelligence() {
  // Double logos for continuous feel
  const displayLogos = [...aiLogos, ...aiLogos, ...aiLogos, ...aiLogos];

  return (
    <Section id="intelligence" className="py-12 md:py-20 lg:py-24 bg-black overflow-hidden">
      <Container>
        <div className="flex flex-col gap-12 md:gap-20 items-stretch max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" style={{ boxShadow: "0 0 20px #fff" }}></div>
              <span className="text-xs uppercase tracking-widest text-[#707079] font-medium">Artificial Intelligence</span>
            </div>
            <h2 className="whitespace-pre-wrap text-[28px] md:text-[40px] font-medium leading-[1.3] tracking-[-0.2px] text-white fog-effect" aria-label="AI native by standard, not by slogan.">
              <span className="sr-only">AI native by standard, not by slogan.</span>
              {["AI", " ", "native", " ", "by", " ", "standard,", " ", "not", " ", "by", " ", "slogan."].map((word, i) => (
                <motion.span 
                  key={i} 
                  initial={{ opacity: 0, filter: "blur(10px)" }} 
                  whileInView={{ opacity: 1, filter: "blur(0px)" }} 
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: i * 0.08 }}
                  className="inline-block whitespace-pre"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium text-white fog-effect z-10 leading-none">
                <span className="mr-2">No hype.</span><span style={{ color: "#FFA16C" }} className="fog-effect">Just advantage.</span>
              </h2>
              <div className="flex w-full items-center justify-start py-10">
                <div className="relative w-full max-w-lg">
                  {/* Upper decorative edge lighting */}
                  <div className="absolute inset-x-0 top-0 h-[1px] -mb-[1px] z-[1] mx-[2px] rounded-t-3xl overflow-hidden" style={{ backgroundImage: "linear-gradient(to right, transparent 2%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255, 0.8) 65%, transparent 98%)" }}></div>
                  
                  {/* The glowing outer casing */}
                  <div className="rounded-3xl p-1 overflow-hidden shadow-[inset_0_0_8px_rgba(0,0,0,0.4),0_0_60px_rgba(0,0,0,0.2),0_30px_80px_rgba(0,0,0,0.5)]" style={{ backgroundImage: "radial-gradient(circle farthest-side at 50% 0, rgba(242, 242, 242, 0.2), transparent)", outline: "1px solid rgba(242, 242, 242, 0.15)", outlineOffset: "-1px" }}>
                    <div className="h-[2px] -mb-[2px]" style={{ backgroundImage: "linear-gradient(to right, transparent 10%, rgb(255, 255, 255) 50%, transparent 90%)" }}></div>
                    
                    {/* The screen surface layer */}
                    <div className="rounded-2xl overflow-hidden border border-[rgba(242,242,242,0.3)] shadow-[inset_0_0_10px_rgba(0,0,0,0.1),0_0_12px_rgba(0,0,0,0.4)]" style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
                      <div className="flex w-full relative h-80 rounded-2xl overflow-hidden bg-[#0a0a0a]">
                        
                        {/* Left Side: Continuous Scrolling AI Logos */}
                        <div className="w-1/2 relative overflow-hidden">
                          <div className="absolute inset-0 z-20 pointer-events-none" style={{ backgroundImage: "linear-gradient(to bottom, #0a0a0a 0%, transparent 20%, transparent 80%, #0a0a0a 100%)" }}></div>
                          <motion.div 
                            className="relative z-10 border-r border-[#252525]/30 flex flex-col"
                            animate={{ y: ["0%", "-50%"] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                          >
                            {displayLogos.map((logo, idx) => (
                              <div key={idx} className="relative aspect-square flex items-center justify-center p-6 border-b border-[#252525]/30 w-full shrink-0">
                                <div className="absolute inset-[23px] rounded-full"></div>
                                <div className="size-28 md:size-32 rounded-full relative flex items-center justify-center transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:border before:border-neutral-800">
                                  <div className="rounded-full flex items-center justify-center transition-all duration-400 relative size-24 scale-90 opacity-40">
                                    <div className="size-14 flex items-center justify-center">
                                      <img src={logo.src} alt={logo.name} width={32} height={32} loading="lazy" className="object-contain opacity-60" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        </div>

                        {/* Center Linking SVG */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                          <div className="size-10 rounded-full bg-neutral-900 border border-[#FFA16C]/30 flex items-center justify-center relative overflow-hidden drop-shadow-2xl">
                            <motion.svg 
                              className="absolute" fill="none" height="39" viewBox="0 0 39 39" width="39" style={{ color: "rgba(255, 255, 255, 0.49)" }}
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <path d="M16.57939 15H15.5C13.0147 15 11 17.0147 11 19.5V19.5C11 21.9853 13.0147 24 15.5 24H16.57939" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25"></path>
                            </motion.svg>
                            <svg className="absolute opacity-70" fill="none" height="39" viewBox="0 0 39 39" width="39" style={{ color: "rgba(255, 255, 255, 0.49)" }}>
                              <path d="M16 19.5H23" stroke="currentColor" strokeLinecap="round" strokeWidth="1.25"></path>
                            </svg>
                            <motion.svg 
                              className="absolute" fill="none" height="39" viewBox="0 0 39 39" width="39" style={{ color: "rgba(255, 255, 255, 0.49)" }}
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 2, delay: 0.4, repeat: Infinity }}
                            >
                              <path d="M22.44329 15H23.5C25.9853 15 28 17.0147 28 19.5V19.5C28 21.9853 25.9853 24 23.5 24H22.44329" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25"></path>
                            </motion.svg>
                          </div>
                        </div>

                        {/* Right Side: Output Graphic */}
                        <div className="w-1/2 relative flex items-center justify-center">
                          <div className="relative aspect-square flex items-center justify-center p-6 border-none w-full">
                            <div className="absolute inset-[23px] rounded-full"></div>
                            <div className="size-28 md:size-32 rounded-full relative flex items-center justify-center transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:border before:border-neutral-800">
                              <div className="rounded-full flex items-center justify-center transition-all duration-400 relative size-24 bg-neutral-800 scale-100 opacity-100" style={{ boxShadow: "0px 24px 32px -12px rgba(0, 0, 0, 0.5), 0px 16px 24px -8px rgba(0, 0, 0, 0.5), 0px 8px 16px -4px rgba(0, 0, 0, 0.5), 0px 0px 0px 1px rgba(255, 255, 255, 0.1)" }}>
                                <div className="relative overflow-hidden flex flex-col justify-between" style={{ width: "56px", height: "42px" }}>
                                  {[...Array(9)].map((_, i) => (
                                    <motion.div 
                                      key={i} 
                                      className="bg-[#707079]/80 w-full" 
                                      style={{ height: "4px" }}
                                      animate={{ 
                                        opacity: [0.2, 0.8, 0.2],
                                        scaleX: [0.8, 1, 0.8]
                                      }}
                                      transition={{ 
                                        duration: 1.5, 
                                        delay: i * 0.1, 
                                        repeat: Infinity 
                                      }}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Features Column */}
            <div className="flex flex-col gap-8 justify-center">
              <div className="text-lg font-medium leading-[140%] tracking-[0.2px] text-[#707079]">
                <p>
                  AI is not an add-on here. It is{' '}
                  <span className="text-white font-normal fog-effect">embedded</span> 
                  {' '}in how we think,{' '}
                  <span className="text-white font-normal fog-effect">design</span>
                  , and{' '}
                  <span className="text-white font-normal fog-effect">deliver</span>
                  . From modern workflows to intelligent product layers, we build with today&apos;s best practices, and{' '}
                  <span className="text-white font-normal fog-effect">tomorrow&apos;s</span>
                  {' '}expectations, already in mind.
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group flex items-center gap-5 p-5 bg-white/[0.02] border border-white/5 rounded-xl transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10"
                >
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/5 group-hover:border-[#FFA16C]/20 group-hover:bg-[#FFA16C]/10 transition-all duration-300">
                    <div className="transition-transform duration-300 group-hover:scale-110 opacity-80 group-hover:opacity-100">
                      <motion.svg 
                        fill="none" height="20" stroke="#FFA16C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                      >
                        <motion.circle cx="12" cy="12" r="10" 
                          variants={{ initial: { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 } }} 
                          transition={{ duration: 1 }}
                        />
                        <motion.line 
                          x1="12" x2="12" y1="12" y2="6" 
                          style={{ transformOrigin: '12px 12px' }}
                          variants={{ animate: { rotate: 360 } }}
                          transition={{ duration: 1.5 }}
                        />
                        <motion.line 
                          x1="12" x2="16" y1="12" y2="12" 
                          style={{ transformOrigin: '12px 12px' }}
                          variants={{ animate: { rotate: 45 } }}
                          transition={{ duration: 1.2 }}
                        />
                      </motion.svg>
                    </div>
                  </div>
                  <div className="text-base md:text-lg font-light tracking-wide text-[#707079] group-hover:text-white transition-colors duration-300">AI informed product thinking</div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group flex items-center gap-5 p-5 bg-white/[0.02] border border-white/5 rounded-xl transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10"
                >
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/5 group-hover:border-[#FFA16C]/20 group-hover:bg-[#FFA16C]/10 transition-all duration-300">
                    <div className="transition-transform duration-300 group-hover:scale-110 opacity-80 group-hover:opacity-100">
                      <motion.svg 
                        fill="none" height="20" stroke="#FFA16C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                      >
                        <motion.circle cx="18" cy="18" r="3" 
                          variants={{ initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 } }}
                          transition={{ delay: 0.6 }}
                        />
                        <motion.circle cx="6" cy="6" r="3" 
                          variants={{ initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 } }}
                          transition={{ delay: 0.2 }}
                        />
                        <motion.path 
                          d="M6 21V9a9 9 0 0 0 9 9"
                          variants={{ initial: { pathLength: 0 }, animate: { pathLength: 1 } }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        />
                      </motion.svg>
                    </div>
                  </div>
                  <div className="text-base md:text-lg font-light tracking-wide text-[#707079] group-hover:text-white transition-colors duration-300">Modern delivery workflows</div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group flex items-center gap-5 p-5 bg-white/[0.02] border border-white/5 rounded-xl transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10"
                >
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/5 group-hover:border-[#FFA16C]/20 group-hover:bg-[#FFA16C]/10 transition-all duration-300">
                    <div className="transition-transform duration-300 group-hover:scale-110 opacity-80 group-hover:opacity-100">
                      <motion.svg 
                        fill="none" height="20" stroke="#FFA16C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                      >
                        <motion.path 
                          d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" 
                          fill="currentColor"
                          variants={{ initial: { scale: 0, rotate: -45, opacity: 0 }, animate: { scale: 1, rotate: 0, opacity: 1 } }}
                          transition={{ duration: 0.6 }}
                        />
                        <motion.path d="M20 3v4" variants={{ animate: { opacity: [0, 1, 0] } }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} />
                        <motion.path d="M22 5h-4" variants={{ animate: { opacity: [0, 1, 0] } }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} />
                        <motion.path d="M4 17v2" variants={{ animate: { opacity: [0, 1, 0] } }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.8 }} />
                        <motion.path d="M5 18H3" variants={{ animate: { opacity: [0, 1, 0] } }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.8 }} />
                      </motion.svg>
                    </div>
                  </div>
                  <div className="text-base md:text-lg font-light tracking-wide text-[#707079] group-hover:text-white transition-colors duration-300">Systems that stay current</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
