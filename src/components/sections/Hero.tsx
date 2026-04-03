"use client";

import { motion, type MotionValue, useTransform, useMotionValue } from "framer-motion";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import Link from "next/link";

interface HeroProps {
  scrollProgress?: MotionValue<number>;
  isStatic?: boolean;
}

function GlassButton({
  children,
  className = "",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const content = (
    <button
      className={`group relative px-12 py-4 text-white hover:text-black font-semibold text-lg leading-none rounded-full overflow-hidden transition-colors duration-300 min-w-[240px] ${className}`}
      style={{
        background: "linear-gradient(182.51deg, rgba(255,255,255,0.02) 27.09%, rgba(90,90,90,0.02) 58.59%, rgba(0,0,0,0.02) 92.75%)",
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 30.0444px 16.2444px, rgba(0, 0, 0, 0.07) 0px 15.6px 8.2875px, rgba(0, 0, 0, 0.04) 0px 6.35556px 4.15556px"
      }}
    >
      <span 
        className="absolute inset-0 rounded-full pointer-events-none" 
        style={{
          padding: "1px",
          background: "linear-gradient(178.8deg, rgba(255, 255, 255, 0.2464) 10.85%, rgba(20, 20, 20, 0.46) 24.36%, rgba(50, 50, 50, 0.46) 73.67%, rgba(255, 255, 255, 0.46) 90.68%)",
          mask: "linear-gradient(black, black) content-box exclude, linear-gradient(black, black)",
          WebkitMask: "linear-gradient(black, black) content-box exclude, linear-gradient(black, black)"
        }}
      />
      <span className="absolute inset-0 rounded-full bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      <span className="absolute inset-0 pointer-events-none opacity-10" style={{ filter: "url(#noiseFilter)" }} />
      <span className="relative z-10">{children}</span>
    </button>
  );

  if (href) return <Link href={href}>{content}</Link>;
  return content;
}

export default function Hero({ scrollProgress, isStatic = true }: HeroProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  };

  const fallbackValue = useMotionValue(0);
  const activeProgress = scrollProgress || fallbackValue;

  // If isStatic is true, we don't apply scroll-based transforms
  // If false, we use the provided progress
  const opacity = useTransform(activeProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y = useTransform(activeProgress, [0, 0.15], [0, -50]);

  const style = isStatic ? {} : { opacity, y };

  return (
    <motion.section 
      style={style}
      className={`${isStatic ? "relative h-screen" : "absolute inset-0"} z-10 flex items-center justify-center overflow-hidden bg-black`}
    >
      {/* High-Fidelity Shader Background */}
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
        {/* Subtle Scanline/Monitor Detail Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: "url(/images/noise.png)", backgroundRepeat: "repeat" }}
        />
      </div>
      
      <div className="relative z-10 px-4 mx-auto text-center flex-1 flex flex-col justify-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {/* Main Heading */}
          <motion.div 
            className="text-[2.75rem] leading-[1.1] tracking-tight sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] text-white font-medium"
            variants={fadeInUp}
          >
            <span className="whitespace-pre-wrap inline-block sm:whitespace-nowrap" aria-label="Your Vision.">
              <span className="sr-only">Your Vision.</span>
              <span className="block" aria-hidden="true">Your Vision.</span>
            </span>
            <br className="sm:hidden" />
            <span className="whitespace-pre-wrap inline-block sm:whitespace-nowrap sm:ml-2" aria-label="Our Precision.">
              <span className="sr-only">Our Precision.</span>
              <span className="block" aria-hidden="true">Our Precision.</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Subtext */}
        <div className="max-w-2xl mx-auto mt-4">
          <motion.p 
            className="whitespace-pre-wrap text-[0.95rem] md:text-[1.5rem] text-[#707079] leading-[1.3]"
            aria-label="NINTH° builds software products and digital systems end to end, from first principles to production, for those who value discretion, clarity, and uncompromising execution."
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <span className="sr-only">NINTH° builds software products and digital systems end to end, from first principles to production, for those who value discretion, clarity, and uncompromising execution.</span>
            <span className="block" aria-hidden="true">NINTH° builds software products and digital systems end to end, from first principles to production, for those who value discretion, clarity, and uncompromising execution.</span>
          </motion.p>
        </div>

        {/* Hero Actions */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-4 px-8 sm:px-0 mt-10 sm:flex-row"
          initial="initial"
          animate="animate"
        >
          {/* Request Call Button */}
          <motion.div className="w-full sm:w-auto" variants={fadeInUp}>
            <Link href="/contact" className="w-full sm:w-auto">
              <button 
                className="w-full sm:w-56 min-w-[120px] whitespace-nowrap inline-flex items-center justify-center px-8 py-[14px] text-white hover:text-black font-semibold text-lg leading-none rounded-lg transition-all duration-300 bg-white/5 hover:bg-white border border-white/10"
                style={{ backdropFilter: "blur(10px)", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 30px" }}
              >
                Request Call
              </button>
            </Link>
          </motion.div>

          {/* View Capabilities Button */}
          <motion.div className="w-full sm:w-auto" variants={fadeInUp}>
            <button className="group relative inline-flex items-center justify-center px-8 py-[14px] text-white font-semibold text-lg leading-none rounded-lg overflow-hidden transition-all duration-300 w-full sm:w-56 min-w-[160px] whitespace-nowrap">
              <span 
                className="absolute inset-0 rounded-lg pointer-events-none" 
                style={{ 
                  padding: "1px", 
                  background: "linear-gradient(178.8deg, rgba(255, 255, 255, 0.247) 10.85%, rgba(20, 20, 20, 0.46) 24.36%, rgba(50, 50, 50, 0.46) 73.67%, rgba(255, 255, 255, 0.46) 90.68%)", 
                  mask: "linear-gradient(black, black) content-box exclude, linear-gradient(black, black)",
                  WebkitMask: "linear-gradient(black, black) content-box exclude, linear-gradient(black, black)"
                }}
              />
              <span className="absolute inset-0 rounded-lg bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-[0]" />
              <span className="absolute inset-0 pointer-events-none opacity-10" style={{ filter: "url(#noiseFilter)" }} />
              <span className="relative z-10 flex items-center justify-center gap-2">View Capabilities</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background ambient lighting hint */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </motion.section>
  );
}
