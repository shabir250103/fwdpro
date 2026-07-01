import React from 'react';
import { motion } from 'framer-motion';

const Design = () => {
  return (
    <main className="pt-32 pb-24 bg-[var(--color-bg-base)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 pt-12"
        >
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 block">Crafting Excellence</span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter text-black mb-6">
            Design <span className="text-gradient">Solutions</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Crafting premium, user-centric experiences that elevate brands and captivate audiences. We specialize in UI/UX, branding, and high-end graphics.
          </p>
        </motion.div>
        
        {/* Placeholder for Design specific content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm h-80 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">UI/UX Interface</span>
           </div>
           <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm h-80 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">Brand Identity</span>
           </div>
           <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm h-80 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">Motion Graphics</span>
           </div>
        </div>
      </div>
    </main>
  );
};

export default Design;
