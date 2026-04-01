"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "@/components/Button";
import GlowBackground from "@/components/GlowBackground";

const steps = [
  { id: 1, question: "What should we call you?", label: "Name", placeholder: "Your name" },
  { id: 2, question: "How can we reach you?", label: "Email", placeholder: "your@email.com" },
  { id: 3, question: "What's the project about?", label: "Project Type", options: ["Product Design", "Engineering", "Digital Strategy", "Other"] },
  { id: 4, question: "What is your budget range?", label: "Budget", options: ["<$10k", "$10k-$50k", "$50k-$100k", "$100k+"] },
  { id: 5, question: "Tell us more about your vision.", label: "Brief", placeholder: "Project details..." },
  { id: 6, question: "Review & Submit", label: "Final Step" }
];

export default function Contact() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const currentStepData = steps[currentStep - 1];

  return (
    <main className="relative min-h-svh bg-background text-foreground flex flex-col justify-center p-6 md:p-12 lg:p-24 overflow-hidden">
      <GlowBackground />
      
      {/* Back to Home Link */}
      <div className="absolute top-12 left-6 md:left-12 lg:left-24 z-50">
         <Link href="/" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Home
         </Link>
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10">
        <div className="mb-12">
           <p className="text-white/40 text-sm font-semibold tracking-widest uppercase mb-2">Step {currentStep} of {steps.length}</p>
           <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-white" 
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / steps.length) * 100}%` }}
              />
           </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-12">
               {currentStepData.question}
             </h1>

             {currentStepData.options ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentStepData.options.map(option => (
                    <button 
                      key={option}
                      onClick={() => {
                        setFormData({...formData, [currentStepData.label]: option});
                        handleNext();
                      }}
                      className="p-6 text-left border border-white/10 rounded-xl hover:bg-white/5 transition-colors text-xl font-medium"
                    >
                      {option}
                    </button>
                  ))}
               </div>
             ) : currentStep < 6 ? (
               <input 
                  type="text"
                  placeholder={currentStepData.placeholder}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl outline-none focus:border-white transition-colors"
                  onChange={(e) => setFormData({...formData, [currentStepData.label]: e.target.value})}
                  value={formData[currentStepData.label] || ""}
                  autoFocus
               />
             ) : (
               <div className="space-y-4">
                  {Object.entries(formData).map(([label, value]) => (
                    <div key={label} className="flex justify-between border-b border-white/5 py-4">
                      <span className="text-white/40">{label}</span>
                      <span className="font-bold">{value}</span>
                    </div>
                  ))}
               </div>
             )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-20 flex items-center gap-6">
          {currentStep > 1 && (
            <button onClick={handlePrev} className="text-white/40 hover:text-white transition-colors font-medium">
              Previous
            </button>
          )}
          {currentStep < 6 && !currentStepData.options && (
            <Button size="lg" onClick={handleNext}>Continue</Button>
          )}
          {currentStep === 6 && (
            <Button size="lg" onClick={() => alert("Submission Successful!")}>Submit Inquiry</Button>
          )}
        </div>
      </div>
    </main>
  );
}
