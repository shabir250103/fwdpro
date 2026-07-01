import React from 'react';
import { motion } from 'framer-motion';

const Support = () => {
  return (
    <main className="pt-32 pb-24 bg-[var(--color-bg-base)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 pt-12"
        >
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 block">Always Online</span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter text-black mb-6">
            Client <span className="text-gradient">Support</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reliable infrastructure maintenance and dedicated client success management to keep your business running smoothly.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm h-80 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">System Maintenance</span>
           </div>
           <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm h-80 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">Client Success</span>
           </div>
        </div>
      </div>
    </main>
  );
};

export default Support;
