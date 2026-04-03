"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";

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
      {/* Top shimmer line */}
      <div
        className="absolute inset-x-[2px] top-0 z-10 h-px rounded-t-3xl"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent 2%, rgba(255,255,255,0.8) 35%, rgba(255,255,255,0.8) 65%, transparent 98%)",
          opacity: shimmerOpacity,
        }}
      />
      {/* Outer shell */}
      <div
        className="relative h-full w-full overflow-hidden rounded-3xl p-2 shadow-[inset_0_0_8px_rgba(0,0,0,0.4),0_0_60px_rgba(0,0,0,0.2),0_30px_80px_rgba(0,0,0,0.5)]"
        style={{
          backgroundImage:
            "radial-gradient(circle farthest-side at 50% 0px, rgba(242,242,242,0.2), transparent)",
          outline: "rgba(242,242,242,0.15) solid 1px",
          outlineOffset: "-1px",
          ...style,
        }}
      >
        {/* Inner top highlight */}
        <div
          className="h-px -mb-px relative z-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, transparent 10%, rgb(255,255,255) 50%, transparent 90%)",
          }}
        />
        {/* Inner rounded frame */}
        <div
          className="relative h-full w-full overflow-hidden rounded-2xl border border-[rgba(242,242,242,0.3)] shadow-[inset_0_0_10px_rgba(0,0,0,0.1),0_0_12px_rgba(0,0,0,0.4)]"
          style={{ backdropFilter: "blur(20px)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── Right Side Collage Grid ────────────────── */

function CollageGrid() {
  return (
    <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-2 bg-black p-2">
      {/* Tile 1: Blue branding */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0d0e12] p-3">
        <div className="grid grid-cols-3 grid-rows-3 gap-1.5 opacity-90">
          <div className="col-span-2 row-span-2 rounded-sm bg-[#0061FF]"></div>
          <div className="rounded-sm bg-white"></div>
          <div className="rounded-sm bg-[#0061FF]"></div>
          <div className="rounded-sm bg-white"></div>
          <div className="col-span-2 rounded-sm bg-white"></div>
        </div>
      </div>
      
      {/* Tile 2: Dark UI Dashboard */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#16171a] p-3">
        <div className="mb-2 h-1.5 w-8 rounded-full bg-white/20"></div>
        <div className="space-y-1.5">
          <div className="h-1 w-full rounded-full bg-white/10"></div>
          <div className="h-1 w-5/6 rounded-full bg-white/10"></div>
          <div className="h-1 w-4/6 rounded-full bg-white/10"></div>
        </div>
        <div className="absolute -bottom-4 -right-4 h-16 w-20 rounded-tl-xl border border-white/5 bg-[#22242a]"></div>
      </div>

      {/* Tile 3: Camera/App UI */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0c]">
        <div className="absolute inset-x-2 bottom-2 grid grid-cols-4 gap-1.5 opacity-80">
          <div className="aspect-square rounded-md bg-white"></div>
          <div className="aspect-square rounded-md bg-zinc-800"></div>
          <div className="aspect-square rounded-md bg-emerald-600"></div>
          <div className="aspect-square rounded-md bg-blue-600"></div>
        </div>
      </div>

      {/* Tile 4: Logo split */}
      <div className="grid grid-rows-2 gap-2">
        <div className="rounded-xl border border-white/10 bg-linear-to-br from-emerald-900/40 to-black p-2">
           <div className="h-full w-full rounded-md border border-emerald-500/20"></div>
        </div>
        <div className="flex items-center justify-center rounded-xl border border-white/10 bg-black">
          <span className="font-serif text-3xl text-white">Ki</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Main export ───────────────────────── */

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="relative w-full bg-black pb-24 pt-0 md:pb-32"
    >
      <Container className="relative flex flex-col items-center justify-center pt-8">

        {/* ── Heading ── */}
        <div className="mb-16 flex w-full max-w-7xl flex-col items-center text-center md:mb-24 lg:px-0">
          <div className="mb-5 flex items-center justify-center gap-2.5">
            <span
              className="h-2 w-2 rounded-full bg-white/90"
              aria-hidden="true"
              style={{ boxShadow: "0 0 20px #fff" }}
            />
            <p className="text-[12px] font-medium uppercase tracking-[2px] text-[#707079]">
              Capabilities
            </p>
          </div>

          <h2
            id="capabilities-heading"
            className="text-[28px] font-medium leading-[1] tracking-[-0.2px] text-white fog-effect md:text-[44px]"
          >
            <span className="block text-[#FFA16C] mb-1">
              Software is the foundation.
            </span>
            <span className="block text-white/90">
              Everything else exists to make it exceptional.
            </span>
          </h2>
        </div>

        {/* ── Desktop Grid Layout ── */}
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="grid w-full grid-cols-1 items-center gap-4 sm:grid-cols-2 lg:grid-cols-7 lg:gap-[clamp(8px,1vw,16px)]">
            
            {/* Left Column (Span 2) */}
            <div className="flex flex-col gap-[clamp(8px,1vw,16px)] lg:col-span-2">
              <GlassCard className="aspect-square">
                <Image 
                  src="/images/capabilities/cap_dropbox_tile_1775111490883.png" 
                  alt="Dropbox UI capability tile" 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </GlassCard>
              
              <GlassCard className="aspect-[4/3] lg:aspect-square">
                <Image 
                  src="/images/capabilities/cap_green_tile_1775111517477.png" 
                  alt="Abstract nature design" 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </GlassCard>
            </div>

            {/* Center Column (Span 3) */}
            <div className="flex flex-col gap-[clamp(8px,1vw,16px)] lg:col-span-3 sm:col-span-2 sm:px-12 lg:px-0">
              <GlassCard className="aspect-square sm:aspect-[4/3] lg:aspect-[1/1.1]">
                <div className="relative h-full w-full bg-[#030303]">
                  {/* Subtle radial inner glow */}
                  <div className="absolute -top-[20%] left-[10%] h-[50%] w-[80%] rounded-full bg-white/10 blur-[100px]" />
                  <div className="absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
              </GlassCard>
              
              <GlassCard className="aspect-square">
                <Image 
                  src="/images/capabilities/cap_ai_doc_tile_1775111567841.png" 
                  alt="AI document interface mockup" 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </GlassCard>
            </div>

            {/* Right Column (Span 2) */}
            <div className="flex flex-col gap-[clamp(8px,1vw,16px)] lg:col-span-2">
              <GlassCard className="aspect-square">
                <CollageGrid />
              </GlassCard>
              
              <GlassCard className="aspect-[4/3] lg:aspect-square">
                <Image 
                  src="/images/capabilities/cap_laptop_zen_tile_1775111535973.png" 
                  alt="Laptop in zen setting" 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </GlassCard>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}

