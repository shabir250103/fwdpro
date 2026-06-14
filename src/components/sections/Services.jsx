import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const scrollRef = useRef(null);

  const services = [
    "UI/UX Experience",
    "Development",
    "App Solutions",
    "Product Design",
    "Branding",
    "Digital Marketing"
  ];

  return (
    <section id="services" className="py-16 lg:py-0 lg:h-[90vh] min-h-[600px] flex items-center bg-[var(--color-bg-base)] border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center h-full">

          {/* Left Column - Title & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="text-xs font-bold tracking-widest text-gray-500">(OUR SERVICES)</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold font-heading text-black leading-[0.95] tracking-tighter mb-12"
            >
              Where <br />
              <span className="text-gradient pr-2 pb-1 inline-block">Creativity Meets</span> <br />
              Technology
            </motion.h2>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="px-6 py-3 text-black rounded-full border border-black/20 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors flex items-center gap-3"
            >
              VIEW ALL SERVICES
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
            </motion.button>
          </div>

          {/* Right Column - Interactive List */}
          <div 
            ref={scrollRef}
            className="lg:col-span-7 flex flex-col relative z-10 h-[500px] lg:h-[70vh] overflow-y-auto scroll-smooth pr-4 mt-12 lg:mt-0"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
            }}
          >
            <style>{`
              .lg\\:col-span-7::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="flex flex-col pb-16">
              {services.map((service, index) => {
                const isHovered = hoveredIndex === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ root: scrollRef, once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="flex items-center gap-6 md:gap-10 py-6 cursor-pointer group"
                  >
                    {/* Number Circle */}
                    <div
                      className={`shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-colors duration-300 ${isHovered
                        ? 'border-brand-primary text-brand-primary bg-brand-primary/5'
                        : 'border-black/10 text-black/40'
                        }`}
                    >
                      <span className="text-[10px] font-bold tracking-widest">
                        {String(index + 1).padStart(3, '0')}
                      </span>
                    </div>

                    {/* Service Text */}
                    <h3
                      className={`text-4xl md:text-5xl lg:text-[4rem] font-bold font-heading tracking-tighter transition-all duration-300 ${isHovered
                        ? 'text-black opacity-100 translate-x-2'
                        : 'text-black opacity-20'
                        }`}
                    >
                      {service}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
