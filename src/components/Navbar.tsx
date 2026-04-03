"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";

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
  { title: "Capabilities", href: "#services" },
  { title: "Method", href: "#timeline" },
  { title: "Intelligence", href: "#intelligence" },
  { title: "Team", href: "#teams" },
  { title: "Principals", href: "#brand-promise" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hidden, setHidden] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  
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

  return (
    <>
      {/* ── MOBILE NAVBAR ── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:hidden">
        <div className="flex items-center justify-center">
          <div className="rounded-full flex items-center gap-3 gradient-border-button-glass px-4 py-2">
            <Link href="/" className="flex items-center text-white">
              <img src="/logo-title.svg" alt="NINTH° Logo" width="80" height="48" className="h-6 w-auto md:h-10" />
            </Link>
            <div className="h-5 w-px bg-white/20" />
            <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors" onClick={() => setMenuOpen((v) => !v)}>
              <div className="relative h-4 w-4">
                <svg className="absolute inset-0 h-4 w-4 text-[#707079] transition-all duration-300" style={{ opacity: menuOpen ? 0 : 1 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25"><circle cx="12" cy="5" r="1" /><circle cx="19" cy="5" r="1" /><circle cx="5" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /><circle cx="12" cy="19" r="1" /><circle cx="19" cy="19" r="1" /><circle cx="5" cy="19" r="1" /></svg>
                <svg className="absolute inset-0 h-4 w-4 text-[#707079] transition-all duration-300" style={{ opacity: menuOpen ? 1 : 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ── DESKTOP NAVBAR ── */}
      <motion.header 
        className="fixed left-0 right-0 z-50 px-8 hidden md:block"
        variants={{
          visible: { opacity: 1, scale: 1, pointerEvents: "auto" },
          hidden: { opacity: 0, scale: 0.95, pointerEvents: "none" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} 
        style={{ top: capsuleY }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <motion.div 
            className="gradient-border-button-glass relative overflow-hidden flex items-center"
            style={{ 
              paddingLeft: capsulePaddingLeft,
              scale: capsuleScale
            }}
          >
            <nav className="flex items-center gap-6 relative z-10 w-full">
              <Link href="/" className="flex items-center text-white hover:opacity-80 transition-opacity px-4 py-2">
                <img src="/logo-title.svg" alt="NINTH° Logo" width="100" height="60" className="h-10 w-auto" />
              </Link>
              <div className="h-8 w-px bg-white/20" />

              <motion.ul 
                className="flex items-center gap-1 relative flex-1" 
                onMouseLeave={() => setHoveredIndex(null)}
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {navItems.map((item, i) => (
                  <motion.li 
                    key={item.title} 
                    className="relative" 
                    onMouseEnter={() => setHoveredIndex(i)}
                    variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <a 
                      href={item.href} 
                      className="px-6 py-2.5 inline-block rounded-lg cursor-pointer group relative z-10 select-none no-underline"
                      style={{ 
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-medium)",
                        lineHeight: "var(--text-base--line-height)"
                      }}
                    >
                      <span 
                        className="transition-all duration-300 block"
                        style={{
                          color: hoveredIndex === i ? "rgb(244, 244, 245)" : "rgba(244, 244, 245, 0.5)",
                          filter: hoveredIndex === i ? "drop-shadow(rgba(255, 255, 255, 0.737) 0px 0px 7.37414px)" : "none"
                        }}
                      >
                        {item.title}
                      </span>
                    </a>
                    {hoveredIndex === i && (
                      <motion.div 
                        layoutId="nav-pill" 
                        className="absolute inset-0 rounded-lg bg-white/5 border border-white/10 -z-10" 
                        transition={{ type: "spring", stiffness: 200, damping: 30, mass: 0.5 }} 
                        style={{ backdropFilter: "blur(8px)" }} 
                      />
                    )}
                  </motion.li>
                ))}
              </motion.ul>

              <div className="flex items-center gap-1.5 relative px-4">
                <svg className="absolute w-0 h-0" aria-hidden="true"><defs><filter id="musicNoiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" /></filter></defs></svg>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="group relative inline-flex items-center justify-center px-3 py-3 text-white hover:text-black font-semibold text-base leading-none rounded-lg overflow-hidden transition-colors duration-100"
                  style={{
                    background: "linear-gradient(182.51deg, rgba(255, 255, 255, 0.02) 27.09%, rgba(90, 90, 90, 0.02) 58.59%, rgba(0, 0, 0, 0.02) 92.75%)",
                    boxShadow: "rgba(0, 0, 0, 0.12) 0px 30.0444px 16.2444px, rgba(0, 0, 0, 0.07) 0px 15.6px 8.2875px, rgba(0, 0, 0, 0.04) 0px 6.35556px 4.15556px"
                  }}
                >
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
