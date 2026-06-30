import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  // Word cycling (suffix only)
  const suffixes = ["duct", "cess"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % suffixes.length);
    }, 3000); // changes every 3 seconds
    return () => clearInterval(interval);
  }, [suffixes.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg-base)]">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex flex-col justify-center opacity-[0.04]">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className={`whitespace-nowrap text-[5vw] font-bold font-heading leading-[0.85] tracking-tighter ${i % 2 === 0 ? '-ml-10' : 'ml-0'}`}
          >
            forward products forward products forward products forward products forward products
          </div>
        ))}
      </div>

      {/* Subtle ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Main Huge Typography Content - Fitted to screen */}
      <div className="w-full px-4 relative z-10 flex flex-col items-center justify-center">
        
        <div className="flex items-center justify-center text-center w-full">
          {/* Adjusted text size to ensure it fits perfectly without overflowing */}
          <h1 className="text-[10vw] sm:text-[11vw] lg:text-[12vw] font-bold font-heading leading-none tracking-tighter whitespace-nowrap flex items-center justify-center w-full">
            <span className="text-gradient pr-1">Forward Pro</span>
            <div className="relative inline-flex overflow-hidden h-[11vw] sm:h-[12vw] lg:h-[13vw] items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={suffixes[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 text-gradient pr-2 pb-2"
                >
                  {suffixes[index]}
                </motion.span>
              </AnimatePresence>
              {/* invisible spacer to keep layout stable */}
              <span className="invisible pl-1 pr-4">duct</span>
            </div>
          </h1>
        </div>

        <div className="mt-12 flex flex-col items-center gap-5 text-center">
          <div className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gray-700 shadow-sm backdrop-blur-sm">
            Crafted for startups, scaleups, and ambitious digital products
          </div>
          <button className="rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_45px_rgba(21,121,193,0.24)] transition hover:brightness-110">
            Explore our work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
