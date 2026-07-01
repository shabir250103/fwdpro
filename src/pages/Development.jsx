import React from 'react';
import { motion } from 'framer-motion';

const Development = () => {
  return (
    <main className="pt-32 pb-24 bg-[var(--color-bg-base)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 pt-12"
        >
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 block">Engineering the Future</span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter text-black mb-6">
            Robust <span className="text-gradient">Development</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building scalable, high-performance web and mobile applications engineered for the modern digital ecosystem.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm h-80 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">Web Apps</span>
           </div>
           <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm h-80 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">Mobile Native</span>
           </div>
           <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm h-80 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">E-commerce Platforms</span>
           </div>
        </div>
      </div>
    </main>
  );
};

export default Development;
