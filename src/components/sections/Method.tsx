"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Aligning on core principles, product vision, and technical constraints."
  },
  {
    step: "02",
    title: "System Architecture",
    description: "Designing modern, modular systems built for performance and scale."
  },
  {
    step: "03",
    title: "Iterative Development",
    description: "Rapid execution with high frequency updates and constant feedback."
  },
  {
    step: "04",
    title: "Launch & Optimization",
    description: "Deploying to production and fine-tuning for real-world excellence."
  }
];

export default function Method() {
  return (
    <section id="method" className="py-24 px-6 md:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="text-white/40 text-sm font-semibold tracking-widest uppercase mb-4">Method</p>
          <h2 className="text-4xl md:text-6xl font-bold">The NINTH° Way.</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />

          <div className="space-y-24">
            {steps.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 text-center md:text-right">
                  {index % 2 === 0 ? (
                    <>
                      <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                      <p className="text-white/50 text-lg">{item.description}</p>
                    </>
                  ) : <div className="hidden md:block" />}
                </div>

                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white text-black font-bold rounded-full border-4 border-background">
                  {item.step}
                </div>

                <div className="flex-1 text-center md:text-left">
                  {index % 2 !== 0 ? (
                    <>
                      <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                      <p className="text-white/50 text-lg">{item.description}</p>
                    </>
                  ) : <div className="hidden md:block" />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
