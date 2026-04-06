"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ─────────────────────── GlassCard ──────────────────────────── */

interface GlassCardProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  shimmerOpacity?: number;
}

function GlassCard({
  children,
  className = "",
  style,
  shimmerOpacity = 1,
}: GlassCardProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Top shimmer line - Matching user reference exactly */}
      <div
        className="absolute inset-[2px] top-0 z-10 h-px rounded-t-3xl"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent 10%, rgba(255,255,255,1) 50%, transparent 90%)",
          opacity: shimmerOpacity,
        }}
      />
      {/* Outer shell with user-provided shadow and gradient */}
      <div
        className="relative h-full w-full overflow-hidden rounded-[2rem] p-1 shadow-[inset_0_0_8px_rgba(0,0,0,0.4),0_0_60px_rgba(0,0,0,0.2),0_30px_80px_rgba(0,0,0,0.5)]"
        style={{
          backgroundImage:
            "radial-gradient(circle farthest-side at 50% 0px, rgba(242,242,242,0.2), transparent)",
          outline: "rgba(242,242,242,0.15) solid 1px",
          outlineOffset: "-1px",
          ...style,
        }}
      >
        {/* Inner top highlight divider */}
        <div
          className="h-[2px] -mb-[2px] relative z-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, transparent 10%, rgb(255,255,255) 50%, transparent 90%)",
          }}
        />
        {/* Inner glass frame */}
        <div
          className="relative h-full w-full overflow-hidden rounded-[1.8rem] border border-[rgba(242,242,242,0.3)] shadow-[inset_0_0_10px_rgba(0,0,0,0.1),0_0_12px_rgba(0,0,0,0.4)]"
          style={{ backdropFilter: "blur(20px)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}



export default function Capabilities() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // High-fidelity Scroll Progress for the grid reveal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Animation values for the grid container
  const gridScale = useTransform(smoothProgress, [0, 1], [0.85, 1]);
  const gridOpacity = useTransform(smoothProgress, [0, 0.5], [0, 1]);

  return (
    <section
      id="services"
      ref={containerRef}
      aria-labelledby="capabilities-heading"
      className="relative w-full bg-black pb-24 pt-0 md:pb-32"
    >
      <Container className="relative flex flex-col items-center justify-center pt-8">

        {/* ── Heading ── */}
        <div className="mb-14 flex w-full max-w-7xl flex-col items-center text-center md:mb-24 lg:px-0">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full bg-white/90"
              aria-hidden="true"
              style={{ boxShadow: "0 0 15px #fff" }}
            />
            <p className="text-[10px] sm:text-[12px] font-medium uppercase tracking-[2px] text-[#707079]">
              Capabilities
            </p>
          </div>

          <div className="max-w-4xl px-4 sm:px-0">
            <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-[-0.2px] text-white fog-effect">
              <span className="whitespace-pre-wrap text-[#FFA16C] fog-effect block" aria-label="Software is the foundation.">
                <span className="sr-only">Software is the foundation.</span>
                {["Software", " ", "is", " ", "the", " ", "foundation."].map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block whitespace-pre"
                    aria-hidden="true"
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.08 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="whitespace-pre-wrap mt-1 block" aria-label="Everything else exists to make it exceptional.">
                <span className="sr-only">Everything else exists to make it exceptional.</span>
                {["Everything", " ", "else", " ", "exists", " ", "to", " ", "make", " ", "it", " ", "exceptional."].map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block whitespace-pre"
                    aria-hidden="true"
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: (i + 7) * 0.08 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h2>
          </div>
        </div>

        {/* ── CINEMATIC GRID: 7-column layout with Scroll-Linked Zoom ── */}
        <motion.div 
          style={{ scale: gridScale, opacity: gridOpacity }}
          className="mx-auto w-full max-w-[1400px] px-5 sm:px-4 md:px-0"
        >
          {/* Grid: 3-column layout (Desktop) / 1-column (Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 w-full">
            
            {/* 1st row 1st card */}
            <div className="rounded-3xl p-2 overflow-hidden shadow-[inset_0_0_8px_rgba(0,0,0,0.4),0_0_60px_rgba(0,0,0,0.2),0_30px_80px_rgba(0,0,0,0.5)]" style={{backgroundImage: 'radial-gradient(circle farthest-side at 50% 0px, rgba(242, 242, 242, 0.2), transparent)', outline: 'rgba(242, 242, 242, 0.15) solid 1px', outlineOffset: '-1px', backdropFilter: 'none'}}><div className="h-[2px] -mb-[2px]" style={{backgroundImage: 'linear-gradient(to right, transparent 10%, rgb(255, 255, 255) 50%, transparent 90%)'}}></div><div className="rounded-2xl overflow-hidden border border-[rgba(242,242,242,0.3)] shadow-[inset_0_0_10px_rgba(0,0,0,0.1),0_0_12px_rgba(0,0,0,0.4)]" style={{backdropFilter: 'blur(20px)'}}><div className=""><div className="relative h-full w-full overflow-hidden cursor-pointer group"><div className="h-full w-full" style={{filter: 'blur(0px)'}}><div className="h-full w-full overflow-hidden rounded-[inherit]"><div className="group cursor-pointer h-full w-full"><video className="h-full w-full object-cover focus:outline-none focus:ring-0 aspect-square" src="https://stream.mux.com/01cEjb4KT7loGeMCdScL8E9uR54BBbKTIWWXoOSrhNgk/high.mp4" poster="https://image.mux.com/01cEjb4KT7loGeMCdScL8E9uR54BBbKTIWWXoOSrhNgk/thumbnail.jpg" playsInline={true} loop={true} autoPlay={true} muted={true} preload="metadata" disablePictureInPicture={true} disableRemotePlayback={true}></video></div></div></div></div></div></div></div>

            {/* 1st row 2nd card (Tall Center Column) */}
            <div className="rounded-3xl p-2 overflow-hidden shadow-[inset_0_0_8px_rgba(0,0,0,0.4),0_0_60px_rgba(0,0,0,0.2),0_30px_80px_rgba(0,0,0,0.5)]" style={{backgroundImage: 'radial-gradient(circle farthest-side at 50% 0px, rgba(242, 242, 242, 0.2), transparent)', outline: 'rgba(242, 242, 242, 0.15) solid 1px', outlineOffset: '-1px', backdropFilter: 'none'}}><div className="h-[2px] -mb-[2px]" style={{backgroundImage: 'linear-gradient(to right, transparent 10%, rgb(255, 255, 255) 50%, transparent 90%)'}}></div><div className="rounded-2xl overflow-hidden border border-[rgba(242,242,242,0.3)] shadow-[inset_0_0_10px_rgba(0,0,0,0.1),0_0_12px_rgba(0,0,0,0.4)]" style={{backdropFilter: 'blur(20px)'}}><div className=""><div className="relative h-full w-full overflow-hidden cursor-pointer group"><div className="h-full w-full" style={{filter: 'blur(0px)'}}><div className="h-full w-full"><div className="h-full w-full object-cover"><div className="w-full flex justify-center bg-[#0a0a0a] p-4"><div className="relative h-[500px] w-full"><Image src="/images/capabilities/iphones_mockup.png" alt="Mobile interfaces" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain" /></div></div></div></div></div></div></div></div></div>

            {/* 1st row 3rd card */}
            <div className="rounded-3xl p-2 overflow-hidden shadow-[inset_0_0_8px_rgba(0,0,0,0.4),0_0_60px_rgba(0,0,0,0.2),0_30px_80px_rgba(0,0,0,0.5)]" style={{backgroundImage: 'radial-gradient(circle farthest-side at 50% 0px, rgba(242, 242, 242, 0.2), transparent)', outline: 'rgba(242, 242, 242, 0.15) solid 1px', outlineOffset: '-1px', backdropFilter: 'none'}}><div className="h-[2px] -mb-[2px]" style={{backgroundImage: 'linear-gradient(to right, transparent 10%, rgb(255, 255, 255) 50%, transparent 90%)'}}></div><div className="rounded-2xl overflow-hidden border border-[rgba(242,242,242,0.3)] shadow-[inset_0_0_10px_rgba(0,0,0,0.1),0_0_12px_rgba(0,0,0,0.4)]" style={{backdropFilter: 'blur(20px)'}}><div className=""><div className="relative h-full w-full overflow-hidden cursor-pointer group"><div className="h-full w-full" style={{filter: 'blur(0px)'}}><div className="h-full w-full"><div className="h-full w-full object-cover"><div className="relative aspect-square bg-zinc-950/50"><Image src="/images/capabilities/brand_icons.png" alt="Brand identity grid" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div></div></div></div></div></div></div></div>

            {/* 2nd row 1st card */}
            <div className="rounded-3xl p-2 overflow-hidden shadow-[inset_0_0_8px_rgba(0,0,0,0.4),0_0_60px_rgba(0,0,0,0.2),0_30px_80px_rgba(0,0,0,0.5)]" style={{backgroundImage: 'radial-gradient(circle farthest-side at 50% 0px, rgba(242, 242, 242, 0.2), transparent)', outline: 'rgba(242, 242, 242, 0.15) solid 1px', outlineOffset: '-1px', backdropFilter: 'none'}}><div className="h-[2px] -mb-[2px]" style={{backgroundImage: 'linear-gradient(to right, transparent 10%, rgb(255, 255, 255) 50%, transparent 90%)'}}></div><div className="rounded-2xl overflow-hidden border border-[rgba(242,242,242,0.3)] shadow-[inset_0_0_10px_rgba(0,0,0,0.1),0_0_12px_rgba(0,0,0,0.4)]" style={{backdropFilter: 'blur(20px)'}}><div className=""><div className="relative h-full w-full overflow-hidden cursor-pointer group"><div className="h-full w-full" style={{filter: 'blur(0px)'}}><div className="h-full w-full"><div className="h-full w-full object-cover"><div className="relative aspect-square"><Image src="/images/capabilities/cap_green_tile_1775111517477.png" alt="Motion blur visual" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div></div></div></div></div></div></div></div>

            {/* 2nd row 2nd card */}
            <div className="rounded-3xl p-2 overflow-hidden shadow-[inset_0_0_8px_rgba(0,0,0,0.4),0_0_60px_rgba(0,0,0,0.2),0_30px_80px_rgba(0,0,0,0.5)]" style={{backgroundImage: 'radial-gradient(circle farthest-side at 50% 0px, rgba(242, 242, 242, 0.2), transparent)', outline: 'rgba(242, 242, 242, 0.15) solid 1px', outlineOffset: '-1px', backdropFilter: 'none'}}><div className="h-[2px] -mb-[2px]" style={{backgroundImage: 'linear-gradient(to right, transparent 10%, rgb(255, 255, 255) 50%, transparent 90%)'}}></div><div className="rounded-2xl overflow-hidden border border-[rgba(242,242,242,0.3)] shadow-[inset_0_0_10px_rgba(0,0,0,0.1),0_0_12px_rgba(0,0,0,0.4)]" style={{backdropFilter: 'blur(20px)'}}><div className=""><div className="relative h-full w-full overflow-hidden cursor-pointer group"><div className="h-full w-full" style={{filter: 'blur(0px)'}}><div className="h-full w-full"><div className="h-full w-full object-cover"><div className="relative aspect-square flex items-center justify-center bg-zinc-900"><Image src="/images/capabilities/wwdc_card.png" alt="WWDC24 Highlights" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-8" /></div></div></div></div></div></div></div></div>

            {/* 2nd row 3rd card */}
            <div className="rounded-3xl p-2 overflow-hidden shadow-[inset_0_0_8px_rgba(0,0,0,0.4),0_0_60px_rgba(0,0,0,0.2),0_30px_80px_rgba(0,0,0,0.5)]" style={{backgroundImage: 'radial-gradient(circle farthest-side at 50% 0px, rgba(242, 242, 242, 0.2), transparent)', outline: 'rgba(242, 242, 242, 0.15) solid 1px', outlineOffset: '-1px', backdropFilter: 'none'}}><div className="h-[2px] -mb-[2px]" style={{backgroundImage: 'linear-gradient(to right, transparent 10%, rgb(255, 255, 255) 50%, transparent 90%)'}}></div><div className="rounded-2xl overflow-hidden border border-[rgba(242,242,242,0.3)] shadow-[inset_0_0_10px_rgba(0,0,0,0.1),0_0_12px_rgba(0,0,0,0.4)]" style={{backdropFilter: 'blur(20px)'}}><div className=""><div className="relative h-full w-full overflow-hidden cursor-pointer group"><div className="h-full w-full" style={{filter: 'blur(0px)'}}><div className="h-full w-full"><div className="h-full w-full object-cover"><div className="relative aspect-square"><Image src="/images/capabilities/cap_laptop_zen_tile_1775111535973.png" alt="Laptop mockup" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div></div></div></div></div></div></div></div>
          </div>

        </motion.div>

      </Container>
    </section>
  );
}
