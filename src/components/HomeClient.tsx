"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import GlowBackground from "@/components/GlowBackground";
import Button from "@/components/Button";
import Capabilities from "@/components/sections/Capabilities";
import Method from "@/components/sections/Method";
import Team from "@/components/sections/Team";

export default function HomeClient() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <main className="relative flex flex-col min-h-svh overflow-hidden">
      <GlowBackground />
      <Navbar />
      
      <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center lg:pt-48 lg:pb-32 overflow-hidden">
        <motion.div 
          className="z-10 max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
            variants={fadeInUp}
          >
            Your Vision. <br />
            <span className="text-white/70">Our Precision.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
            variants={fadeInUp}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            NINTH° builds software products and digital systems end to end, from first principles to production, for those who value discretion, clarity, and uncompromising execution.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeInUp}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Button size="lg" className="w-full sm:w-auto">
              Request Call
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              View Capabilities
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <Capabilities />
      <Method />
      <Team />

      <section className="py-32 px-6 text-center bg-transparent border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-10 leading-tight">Ready to build?</h2>
          <Button size="lg" className="px-12 py-6 text-lg">Start Project Inquiry</Button>
        </motion.div>
      </section>
    </main>
  );
}
