"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Method() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Card 1 Animations
  const card1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.4], [0, 1, 1, 0.4]);
  const card1Blur = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.4], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(3px)"]);
  const card1X = useTransform(scrollYProgress, [0, 0.15], [-40, 0]);

  // Card 2 Animations
  const card2Opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.55, 0.65], [0, 1, 1, 0.4]);
  const card2Blur = useTransform(scrollYProgress, [0.25, 0.4, 0.55, 0.65], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(3px)"]);
  const card2X = useTransform(scrollYProgress, [0.25, 0.4], [-40, 0]);

  // Card 3 Animations
  const card3Opacity = useTransform(scrollYProgress, [0.5, 0.65, 1], [0, 1, 1]);
  const card3Blur = useTransform(scrollYProgress, [0.5, 0.65, 1], ["blur(10px)", "blur(0px)", "blur(0px)"]);
  const card3X = useTransform(scrollYProgress, [0.5, 0.65], [-40, 0]);

  return (
    <section ref={containerRef} id="method" className="relative w-full xl:h-[300vh]">
      <div className="xl:sticky xl:top-0 xl:h-screen w-full flex flex-col items-center justify-center p-4 container mx-auto mt-24 xl:mt-0 xl:pt-16">
        <div className="flex flex-col gap-4 mb-6 lg:mb-10 w-full max-w-7xl px-5 lg:px-0">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white" style={{ boxShadow: "0 0 20px #fff" }}></div>
            <span className="text-xs uppercase tracking-widest text-[#707079] font-medium">Process</span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[28px] md:text-[40px] font-medium leading-[1.3] tracking-[-0.2px] text-white fog-effect">
              <span className="whitespace-pre-wrap text-[#FFA16C] fog-effect" aria-label="A composed process," style={{ opacity: 1 }}>
                <span className="sr-only">A composed process,</span>
                {["A", " ", "composed", " ", "process,"].map((word, i) => (
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
              </span>
              {" "}
              <span className="whitespace-pre-wrap" aria-label="even when the work is complex." style={{ opacity: 1 }}>
                <span className="sr-only">even when the work is complex.</span>
                {["even", " ", "when", " ", "the", " ", "work", " ", "is", " ", "complex."].map((word, i) => (
                  <motion.span 
                    key={i + 5} 
                    initial={{ opacity: 0, filter: "blur(10px)" }} 
                    whileInView={{ opacity: 1, filter: "blur(0px)" }} 
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: (i + 5) * 0.08 }}
                    className="inline-block whitespace-pre"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h2>
            <p className="text-base font-light leading-[150%] tracking-[0.4px] text-[#707079]">
              No noise. No chaos. Just precision.
            </p>
          </div>
        </div>

        <div className="w-full max-w-7xl rounded-2xl border bg-[#0e0e0e] border-[#252525] p-2 sm:p-8 xl:p-16 flex items-center justify-center min-h-[500px]">
          {/* Timeline container for Desktop (Scroll Hijacked) */}
          <div className="w-full h-full relative font-['Neue_Montreal',sans-serif] hidden xl:block">
            
            {/* BG Grid Lines for 6 weeks */}
            <div className="absolute inset-0 flex justify-between pointer-events-none">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col items-center flex-1 border-r border-[#252525]/50 first:border-l relative">
                  <span className="absolute top-0 text-[11px] text-[#707079] tracking-widest mt-2">{`Week ${i}`}</span>
                </div>
              ))}
            </div>

            <div className="relative w-full h-[400px] mt-20">
              {/* Card 1: Discovery */}
              <motion.div 
                style={{ opacity: card1Opacity, filter: card1Blur, x: card1X }}
                className="absolute top-0 left-[2%] w-[29%] z-30"
              >
                <div className="p-[1px] rounded-xl bg-gradient-to-br from-white/15 to-transparent">
                  <div className="bg-[#18181A]/95 backdrop-blur-xl border border-white/5 p-4 md:p-6 rounded-xl flex flex-col gap-3 shadow-2xl">
                    <div className="flex justify-between items-start">
                      <div className="text-[#FFA16C]">
                         <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                           <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                         </svg>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-[#707079] font-medium mt-1">1-2 weeks</span>
                    </div>
                    <h3 className="text-white font-medium text-[15px] mt-1">Discovery</h3>
                    <p className="text-[#707079] text-xs font-light leading-relaxed">Define outcomes, constraints, and success metrics</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Blueprint */}
              <motion.div 
                style={{ opacity: card2Opacity, filter: card2Blur, x: card2X }}
                className="absolute top-[35%] left-[30%] w-[33%] z-20"
              >
                <div className="p-[1px] rounded-xl bg-gradient-to-br from-white/10 to-transparent">
                   <div className="bg-[#18181A]/95 backdrop-blur-xl border border-white/5 p-4 md:p-6 rounded-xl flex flex-col gap-3 shadow-2xl">
                    <div className="flex justify-between items-start">
                      <div className="text-[#FFA16C]">
                         <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                           <line x1="3" y1="9" x2="21" y2="9"></line>
                           <line x1="9" y1="21" x2="9" y2="9"></line>
                         </svg>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-[#707079] font-medium mt-1">1-2 weeks</span>
                    </div>
                    <h3 className="text-white font-medium text-[15px] mt-1">Blueprint</h3>
                    <p className="text-[#707079] text-xs font-light leading-relaxed">Architecture, scope boundaries, and execution plan</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Design */}
              <motion.div 
                style={{ opacity: card3Opacity, filter: card3Blur, x: card3X }}
                className="absolute top-[68%] left-[55%] w-[42%] z-10"
              >
                 <div className="p-[1px] rounded-xl bg-gradient-to-br from-white/10 to-transparent">
                   <div className="bg-[#18181A]/95 backdrop-blur-xl border border-white/5 p-4 md:p-6 rounded-xl flex flex-col gap-3 shadow-2xl">
                    <div className="flex justify-between items-start">
                      <div className="text-[#FFA16C]">
                         <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                           <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                           <circle cx="6" cy="6" r="3"></circle>
                         </svg>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-[#707079] font-medium mt-1">3 weeks</span>
                    </div>
                    <h3 className="text-white font-medium text-[15px] mt-1">Design</h3>
                    <p className="text-[#707079] text-xs font-light leading-relaxed">User journeys, UI system, prototypes</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile View (Stack - Non-Hijacked) */}
          <div className="w-full flex xl:hidden flex-col gap-6 font-['Neue_Montreal',sans-serif] p-4 mt-4">
             {/* Card 1 */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="p-[1px] rounded-xl bg-gradient-to-br from-white/15 to-transparent"
             >
                <div className="bg-[#18181A]/95 backdrop-blur-xl border border-white/5 p-5 rounded-xl flex flex-col gap-3 shadow-2xl">
                  <div className="flex justify-between items-start">
                    <div className="text-[#FFA16C]">
                       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                         <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                         <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                       </svg>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-[#707079] font-medium mt-1">Week 1 (1-2 weeks)</span>
                  </div>
                  <h3 className="text-white font-medium text-[16px] mt-1">Discovery</h3>
                  <p className="text-[#707079] text-[13px] font-light leading-relaxed">Define outcomes, constraints, and success metrics</p>
                </div>
             </motion.div>

             {/* Card 2 */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="p-[1px] rounded-xl bg-gradient-to-br from-white/10 to-transparent"
             >
                <div className="bg-[#18181A]/95 backdrop-blur-xl border border-white/5 p-5 rounded-xl flex flex-col gap-3 shadow-2xl">
                  <div className="flex justify-between items-start">
                    <div className="text-[#FFA16C]">
                       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                         <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                         <line x1="3" y1="9" x2="21" y2="9"></line>
                         <line x1="9" y1="21" x2="9" y2="9"></line>
                       </svg>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-[#707079] font-medium mt-1">Week 2-3 (1-2 weeks)</span>
                  </div>
                  <h3 className="text-white font-medium text-[16px] mt-1">Blueprint</h3>
                  <p className="text-[#707079] text-[13px] font-light leading-relaxed">Architecture, scope boundaries, and execution plan</p>
                </div>
             </motion.div>

             {/* Card 3 */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="p-[1px] rounded-xl bg-gradient-to-br from-white/10 to-transparent"
             >
                <div className="bg-[#18181A]/95 backdrop-blur-xl border border-white/5 p-5 rounded-xl flex flex-col gap-3 shadow-2xl">
                  <div className="flex justify-between items-start">
                    <div className="text-[#FFA16C]">
                       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                         <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                         <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                         <circle cx="6" cy="6" r="3"></circle>
                       </svg>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-[#707079] font-medium mt-1">Week 4-6 (3 weeks)</span>
                  </div>
                  <h3 className="text-white font-medium text-[16px] mt-1">Design</h3>
                  <p className="text-[#707079] text-[13px] font-light leading-relaxed">User journeys, UI system, prototypes</p>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

