"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";

// Icons for Mobile Menu Grid
const HomeIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-16 h-16 text-[#707079]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.97 2.59a1.5 1.5 0 0 0-1.94 0l-7.5 6.363A1.5 1.5 0 0 0 3 10.097V19.5A1.5 1.5 0 0 0 4.5 21h4.75a.75.75 0 0 0 .75-.75V14h4v6.25c0 .414.336.75.75.75h4.75a1.5 1.5 0 0 0 1.5-1.5v-9.403a1.5 1.5 0 0 0-.53-1.144l-7.5-6.363Z" />
  </svg>
);

const IntelligenceIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="w-8 h-8 text-[#707079]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z" />
  </svg>
);

const CapabilitiesIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-8 h-8 text-[#707079]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2zm16-2h-6v8h8V5c0-1.1-.9-2-2-2zm-6 18h6c1.1 0 2-.9 2-2v-6h-8v8z" />
  </svg>
);

const TeamIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-[#707079]">
    <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z" />
  </svg>
);

const MethodIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-16 h-16 text-[#707079]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H6v-2h6v2zm3-4H9v-2h6v2zm3-4h-6V7h6v2z" />
  </svg>
);

const IntelligenceIconMobile = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="w-8 h-8 text-[#707079]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z" />
  </svg>
);

const PrincipalsIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-8 h-8 text-[#707079]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" />
  </svg>
);

// Animated music visualizer bars
function MusicBars({ inverted = false, isPlaying = true }: { inverted?: boolean; isPlaying?: boolean }) {
  const bars = [0.736822, 0.570362, 0.573468, 0.812718, 0.284133];

  return (
    <span className="relative z-10 flex items-center justify-center gap-1 h-[14px]">
      {bars.map((h, i) => (
        <motion.div
           key={i}
           className={`w-px rounded-full transition-colors duration-150 ${
             inverted ? "bg-black" : "bg-white group-hover:bg-black"
           }`}
           initial={{ height: 14, scaleY: h }}
           animate={{ scaleY: isPlaying ? [h, 0.2, 0.9, 0.4, h] : 0.1 }}
           transition={{
             duration: isPlaying ? 0.8 + i * 0.1 : 0.3,
             repeat: isPlaying ? Infinity : 0,
             ease: "easeInOut",
           }}
           style={{ transformOrigin: "50% 100%" }}
        />
      ))}
    </span>
  );
}

const navItems = [
  { title: "Capabilities", href: "#services", icon: <CapabilitiesIcon /> },
  { title: "Method", href: "#timeline", icon: <MethodIcon /> },
  { title: "Intelligence", href: "#intelligence", icon: <IntelligenceIconMobile /> },
  { title: "Team", href: "#teams", icon: <TeamIcon /> },
  { title: "Principals", href: "#brand-promise", icon: <PrincipalsIcon /> },
];

const mobileGridItems = [
  { title: "Home", href: "/", icon: <HomeIcon />, large: true },
  { title: "Intelligence", href: "#intelligence", icon: <IntelligenceIconMobile /> },
  { title: "Capabilities", href: "#services", icon: <CapabilitiesIcon /> },
  { title: "Team", href: "#teams", icon: <TeamIcon /> },
  { title: "Method", href: "#timeline", icon: <MethodIcon /> },
  { title: "Principals", href: "#brand-promise", icon: <PrincipalsIcon /> },
];

// Helper component for the glass-outlined grid items
function GridItem({ item, delay }: { item: any; delay: number }) {
  const isLarge = item.large;

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 16 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className={`${isLarge ? "col-span-2 row-span-2" : ""}`}
    >
      <Link href={item.href} className="block h-full select-none active:scale-95 transition-transform duration-150">
        <div className="relative h-full">
          {/* Top highlight line */}
          <div className="absolute inset-x-0 top-0 h-[1px] -mb-[1px] z-[1] mx-[2px] rounded-t-3xl overflow-hidden" 
               style={{ backgroundImage: "linear-gradient(to right, transparent 2%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255, 0.8) 65%, transparent 98%)" }} />
          
          <div className="rounded-3xl p-1 overflow-hidden shadow-[inset_0_0_8px_rgba(0,0,0,0.4),0_0_60px_rgba(0,0,0,0.2),0_30px_80px_rgba(0,0,0,0.5)]"
               style={{ backgroundImage: "radial-gradient(circle farthest-side at 50% 0, rgba(242, 242, 242, 0.2), transparent)", outline: "1px solid rgba(242, 242, 242, 0.15)", outlineOffset: "-1px" }}>
            
            <div className="h-[2px] -mb-[2px]" style={{ backgroundImage: "linear-gradient(to right, transparent 10%, rgb(255, 255, 255) 50%, transparent 90%)" }} />
            
            <div className="rounded-2xl overflow-hidden border border-[rgba(242,242,242,0.3)] shadow-[inset_0_0_10px_rgba(0,0,0,0.1),0_0_12px_rgba(0,0,0,0.4)] backdrop-blur-xl">
              <div className={`aspect-square flex flex-col items-center justify-center gap-3 bg-linear-to-br from-white/10 to-white/5 p-4 ${isLarge ? "h-full" : "h-full"}`}>
                <div className={`${isLarge ? "scale-100" : "scale-75"}`}>
                  {item.icon}
                </div>
                <span className={`text-white/90 font-medium ${isLarge ? "text-sm" : "text-[12px]"}`}>{item.title}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function GridMenuSection({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden pointer-events-none">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto" 
      />
      <div className="absolute inset-0 flex items-center justify-center px-6 py-4 pt-24 pointer-events-auto overflow-y-auto">
        <div className="w-full max-w-sm px-3">
          <div className="grid grid-cols-3 gap-3.5" style={{ gridTemplateRows: "1fr 1fr 1fr 1fr" }}>
             {mobileGridItems.map((item, i) => (
                <GridItem key={item.title} item={item} delay={i * 50} />
             ))}
          </div>

          <div className="mt-4 w-full flex gap-1.5 opacity-100">
             <div className="flex-1">
                <Link href="/contact" className="block">
                   <button className="group relative inline-flex items-center justify-center px-[46px] py-[14px] text-white font-semibold text-lg leading-none rounded-lg overflow-hidden w-full py-4 text-base active:scale-95 transition-transform">
                      <span className="absolute inset-0 rounded-lg pointer-events-none" style={{ padding: "1px", background: "linear-gradient(178.8deg, rgba(255, 255, 255, 0.2464) 10.85%, rgba(20, 20, 20, 0.46) 24.36%, rgba(50, 50, 50, 0.46) 73.67%, rgba(255, 255, 255, 0.46) 90.68%)", mask: "linear-gradient(black, black) content-box exclude, linear-gradient(black, black)", WebkitMask: "linear-gradient(black, black) content-box exclude, linear-gradient(black, black)" }} />
                      <span className="absolute inset-0 rounded-lg bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-10" />
                      <span className="relative z-10 flex items-center justify-center gap-2">Consult</span>
                   </button>
                </Link>
             </div>
             
             <button className="group relative inline-flex items-center justify-center px-4 py-3 text-white font-semibold rounded-lg overflow-hidden active:scale-95 transition-transform"
                     style={{ background: "linear-gradient(182.51deg, rgba(255, 255, 255, 0.02) 27.09%, rgba(90, 90, 90, 0.02) 58.59%, rgba(0, 0, 0, 0.02) 92.75%)", boxShadow: "rgba(0, 0, 0, 0.12) 0px 30.0444px 16.2444px, rgba(0, 0, 0, 0.07) 0px 15.6px 8.2875px, rgba(0, 0, 0, 0.04) 0px 6.35556px 4.15556px" }}>
                <span className="absolute inset-0 rounded-lg pointer-events-none" style={{ padding: "1px", background: "linear-gradient(178.8deg, rgba(255, 255, 255, 0.2464) 10.85%, rgba(20, 20, 20, 0.46) 24.36%, rgba(50, 50, 50, 0.46) 73.67%, rgba(255, 255, 255, 0.46) 90.68%)", mask: "linear-gradient(black, black) content-box exclude, linear-gradient(black, black)", WebkitMask: "linear-gradient(black, black) content-box exclude, linear-gradient(black, black)" }} />
                <span className="absolute inset-0 rounded-lg bg-white transition-opacity duration-150 opacity-0 group-hover:opacity-100" />
                <MusicBars isPlaying={true} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hidden, setHidden] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const { isLoaded } = useLoading();
  
  // ── SMART HIDE/SHOW LOGIC ──
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true); // Scrolling Down
    } else {
      setHidden(false); // Scrolling Up or at the top
    }
  });

  // ── SCROLL-LINKED ANIMATIONS ──
  const springConfig = { stiffness: 200, damping: 30, mass: 0.5, restDelta: 0.001 };
  
  const rawCapsulePaddingLeft = useTransform(scrollY, [0, 300], [32, 12]);
  const rawCapsuleScale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const rawCapsuleY = useTransform(scrollY, [0, 300], [32, 16]); 

  const capsulePaddingLeft = useSpring(rawCapsulePaddingLeft, springConfig);
  const capsuleScale = useSpring(rawCapsuleScale, springConfig);
  const capsuleY = useSpring(rawCapsuleY, springConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  const revealVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 16 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 }
  };

  return (
    <>
      {/* ── MOBILE NAVBAR ── */}
      <motion.header 
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={revealVariants}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:hidden"
      >
        <div className="flex items-center justify-center">
          <div className="rounded-full flex items-center gap-3 gradient-border-button-glass px-4 py-2.5">
            <Link href="/" className="flex items-center text-white">
              <img src="/logo-title.svg" alt="NINTH° Logo" width="80" height="48" className="h-6 w-auto" />
            </Link>
            <div className="h-5 w-px bg-white/20" />
            <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors" onClick={() => setMenuOpen((v) => !v)}>
              <div className="relative h-4 w-4">
                <svg className="absolute inset-0 h-4 w-4 text-[#707079] transition-all duration-300" 
                     style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scale(0.7)" : "scale(1)", filter: menuOpen ? "blur(4px)" : "none" }} 
                     viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="5" r="1" /><circle cx="19" cy="5" r="1" /><circle cx="5" cy="5" r="1" />
                  <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
                  <circle cx="12" cy="19" r="1" /><circle cx="19" cy="19" r="1" /><circle cx="5" cy="19" r="1" />
                </svg>
                <svg className="absolute inset-0 h-4 w-4 text-[#707079] transition-all duration-300" 
                     style={{ opacity: menuOpen ? 1 : 0, transform: menuOpen ? "scale(1)" : "scale(0.7)", filter: menuOpen ? "none" : "blur(4px)" }} 
                     viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── MOBILE GRID OVERLAY ── */}
      <AnimatePresence>
        {menuOpen && <GridMenuSection isOpen={menuOpen} />}
      </AnimatePresence>

      {/* ── DESKTOP NAVBAR ── */}
      <motion.header 
        initial="hidden"
        animate={isLoaded ? (hidden ? "hidden" : "visible") : "hidden"}
        variants={{
          visible: { opacity: 1, filter: "blur(0px)", y: 0, scale: 1, pointerEvents: "auto" },
          hidden: isLoaded ? { opacity: 0, scale: 0.95, pointerEvents: "none" } : { opacity: 0, filter: "blur(10px)", y: 16 }
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
        className="fixed left-0 right-0 z-50 px-8 hidden md:block"
        style={{ top: capsuleY }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <motion.div 
            className="gradient-border-button-glass relative overflow-hidden flex items-center"
            style={{ paddingLeft: capsulePaddingLeft, scale: capsuleScale }}
          >
            <nav className="flex items-center gap-6 relative z-10 w-full">
              <Link href="/" className="flex items-center text-white hover:opacity-80 transition-opacity px-4 py-2">
                <img src="/logo-title.svg" alt="NINTH° Logo" width="100" height="60" className="h-10 w-auto" />
              </Link>
              <div className="h-8 w-px bg-white/20" />

              <motion.ul 
                className="flex items-center gap-1 relative flex-1" 
                onMouseLeave={() => setHoveredIndex(null)}
                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              >
                {navItems.map((item, i) => (
                  <motion.li 
                    key={item.title} 
                    className="relative" 
                    onMouseEnter={() => setHoveredIndex(i)}
                    variants={{ hidden: { opacity: 0, filter: "blur(4px)", y: 8 }, visible: { opacity: 1, filter: "blur(0px)", y: 0 } }}
                  >
                    <a href={item.href} className="px-6 py-2.5 inline-block rounded-lg cursor-pointer group relative z-10 select-none no-underline"
                       style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: "var(--text-base--line-height)" }}>
                      <span className="transition-all duration-300 block"
                            style={{ color: hoveredIndex === i ? "rgb(244, 244, 245)" : "rgba(244, 244, 245, 0.5)", filter: hoveredIndex === i ? "drop-shadow(rgba(255, 255, 255, 0.737) 0px 0px 7.37414px)" : "none" }}>
                        {item.title}
                      </span>
                    </a>
                    {hoveredIndex === i && (
                      <motion.div layoutId="nav-pill" className="absolute inset-0 rounded-lg bg-white/5 border border-white/10 -z-10" 
                                transition={{ type: "spring", stiffness: 200, damping: 30, mass: 0.5 }} 
                                style={{ backdropFilter: "blur(8px)" }} />
                    )}
                  </motion.li>
                ))}
              </motion.ul>

              <div className="flex items-center gap-1.5 relative px-4">
                <svg className="absolute w-0 h-0" aria-hidden="true"><defs><filter id="musicNoiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" /></filter></defs></svg>
                <button onClick={() => setIsPlaying(!isPlaying)} className="group relative inline-flex items-center justify-center px-3 py-3 text-white hover:text-black font-semibold text-base leading-none rounded-lg overflow-hidden transition-colors duration-100"
                        style={{ background: "linear-gradient(182.51deg, rgba(255, 255, 255, 0.02) 27.09%, rgba(90, 90, 90, 0.02) 58.59%, rgba(0, 0, 0, 0.02) 92.75%)", boxShadow: "rgba(0, 0, 0, 0.12) 0px 30.0444px 16.2444px, rgba(0, 0, 0, 0.07) 0px 15.6px 8.2875px, rgba(0, 0, 0, 0.04) 0px 6.35556px 4.15556px" }}>
                  <span className="absolute inset-0 rounded-lg pointer-events-none" style={{ padding: "1px", background: "linear-gradient(178.8deg, rgba(255, 255, 255, 0.2464) 10.85%, rgba(20, 20, 20, 0.46) 24.36%, rgba(50, 50, 50, 0.46) 73.67%, rgba(255, 255, 255, 0.46) 90.68%)", mask: "linear-gradient(black, black) content-box exclude, linear-gradient(black, black)", WebkitMask: "linear-gradient(black, black) content-box exclude, linear-gradient(black, black)" }} />
                  <span className="absolute inset-0 rounded-lg bg-white transition-opacity duration-150 opacity-0 group-hover:opacity-100" />
                  <span className="absolute inset-0 pointer-events-none opacity-10" style={{ filter: "url(#musicNoiseFilter)" }} />
                  {mounted && <MusicBars isPlaying={isPlaying} />}
                </button>
                <Link href="/contact">
                  <button className="group relative px-8 py-3 text-white hover:text-black font-semibold text-base leading-none rounded-lg overflow-hidden transition-colors duration-300" style={{ background: "linear-gradient(182.51deg, rgba(255, 255, 255, 0.02) 27.09%, rgba(90, 90, 90, 0.02) 58.59%, rgba(0, 0, 0, 0.02) 92.75%)", boxShadow: "rgba(0, 0, 0, 0.12) 0px 30.0444px 16.2444px, rgba(0, 0, 0, 0.07) 0px 15.6px 8.2875px, rgba(0, 0, 0, 0.04) 0px 6.35556px 4.15556px" }}><span className="absolute inset-0 rounded-lg pointer-events-none" style={{ padding: "1px", background: "linear-gradient(178.8deg, rgba(255, 255, 255, 0.2464) 10.85%, rgba(20, 20, 20, 0.46) 24.36%, rgba(50, 50, 50, 0.46) 73.67%, rgba(255, 255, 255, 0.46) 90.68%)", mask: "linear-gradient(black, black) content-box exclude, linear-gradient(black, black)", WebkitMask: "linear-gradient(black, black) content-box exclude, linear-gradient(black, black)" }} /><span className="absolute inset-0 rounded-lg bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-100" /><span className="relative z-10 flex items-center justify-center gap-2">Consult</span></button>
                </Link>
              </div>
            </nav>
            <motion.div className="absolute bottom-0 left-0 h-[1px] bg-white/40" style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }} />
          </motion.div>
        </div>
      </motion.header>
    </>
  );
}
