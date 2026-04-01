"use client";

import { motion } from "framer-motion";

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 md:py-32 bg-white/5 backdrop-blur-xl border-y border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <p className="text-white/40 text-sm font-semibold tracking-widest uppercase mb-4">Intelligence</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Strategic <br />Precision.</h2>
          <p className="text-white/50 text-xl leading-relaxed max-w-lg">
            We don't just build, we architect. Every line of code is an investment in your product's future, guided by strategic foresight and technical excellence.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <p className="text-white/40 text-sm font-semibold tracking-widest uppercase mb-4">The Team</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Principals <br />Driven.</h2>
          <p className="text-white/50 text-xl leading-relaxed max-w-lg">
            From founders to senior engineers, our team is composed of multidisciplinary experts who have built at scale for the world's most demanding organizations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
