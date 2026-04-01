"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Product Strategy & Architecture",
    description: "Defining the technical and strategic foundation for scalable digital products."
  },
  {
    title: "Engineering & Systems Design",
    description: "High-performance software development with a focus on precision and reliability."
  },
  {
    title: "Brand & Digital Experience",
    description: "Crafting interfaces that feel premium and align with your brand's core values."
  },
  {
    title: "Intelligence & Strategy",
    description: "Data-driven insights to guide product growth and market positioning."
  },
  {
    title: "Principal Partnership",
    description: "Dedicated leadership oversight and advisory for mission-critical projects."
  },
  {
    title: "Execution Discipline",
    description: "Rigorous standards for code quality, security, and deployment excellence."
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 px-6 md:py-32 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-white/40 text-sm font-semibold tracking-widest uppercase mb-4">Capabilities</p>
          <h2 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
            Specialized in high-stakes <br />
            digital infrastructure.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {capabilities.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="h-full border-l border-white/10 pl-6 py-2 group-hover:border-white transition-colors duration-500">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
