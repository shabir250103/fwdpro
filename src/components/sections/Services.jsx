import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';

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
    <section id="services" className="relative flex min-h-[600px] items-center overflow-hidden border-t border-black/5 bg-[var(--color-bg-base)] py-16 lg:h-[90vh] lg:py-0">
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-primary/10 blur-3xl lg:left-24 lg:top-1/2" />
      <div className="pointer-events-none absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-brand-light/20 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid h-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">

          {/* Left Column - Title & CTA */}
          <div className="flex flex-col items-center justify-center rounded-[1.5rem] border border-white/80 bg-white/70 p-5 text-center shadow-[0_22px_60px_rgba(10,79,130,0.08)] backdrop-blur-xl sm:p-7 lg:col-span-5 lg:items-start lg:bg-white/45 lg:p-8 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex items-center justify-center gap-2 rounded-full border border-brand-primary/15 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-secondary shadow-sm lg:justify-start"
            >
              <Sparkles className="h-3.5 w-3.5 text-brand-primary" />
              Our Services
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-5 text-4xl font-bold leading-[1.02] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-[4.6rem] lg:tracking-tighter"
            >
              Where <br />
              <span className="text-gradient pr-2 pb-1 inline-block">Creativity Meets</span> <br />
              Technology
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="mb-7 max-w-md text-sm font-medium leading-7 text-gray-600 sm:text-base"
            >
              Strategy, design, engineering, and marketing shaped into digital systems that look sharp and work hard.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex min-h-12 items-center gap-3 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary px-6 text-xs font-bold uppercase tracking-widest text-white shadow-[0_16px_38px_rgba(21,121,193,0.24)] transition hover:brightness-110"
            >
              VIEW ALL SERVICES
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>

          {/* Right Column - Interactive List */}
          <div 
            ref={scrollRef}
            className="relative z-10 mt-0 flex h-auto max-h-[480px] flex-col overflow-y-auto rounded-[1.5rem] border border-white/80 bg-white/55 p-3 pr-3 shadow-[0_22px_60px_rgba(10,79,130,0.08)] scroll-smooth backdrop-blur-xl lg:col-span-7 lg:mt-0 lg:h-[70vh] lg:max-h-none lg:p-5 lg:pr-5"
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
            <div className="flex flex-col gap-2 pb-8 lg:gap-0 lg:pb-16">
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
                    className={`group flex cursor-pointer items-center gap-4 rounded-2xl border px-4 py-4 transition-all duration-300 sm:gap-6 md:gap-8 md:py-5 lg:border-transparent lg:bg-transparent lg:px-2 ${
                      isHovered ? 'border-brand-primary/20 bg-white shadow-[0_16px_34px_rgba(10,79,130,0.08)]' : 'border-black/5 bg-white/55 lg:shadow-none'
                    }`}
                  >
                    {/* Number Circle */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 sm:h-12 sm:w-12 ${isHovered
                        ? 'border-brand-primary text-white bg-brand-primary'
                        : 'border-black/10 bg-white text-black/40'
                        }`}
                    >
                      <span className="text-[10px] font-bold tracking-widest">
                        {String(index + 1).padStart(3, '0')}
                      </span>
                    </div>

                    {/* Service Text */}
                    <h3
                        className={`flex-1 text-left text-2xl font-bold tracking-tight transition-all duration-300 sm:text-4xl md:text-5xl lg:text-[4rem] lg:tracking-tighter ${isHovered
                        ? 'text-black opacity-100 lg:translate-x-2'
                        : 'text-black opacity-55 lg:opacity-20'
                        }`}
                    >
                      {service}
                    </h3>

                    <Layers className={`hidden h-5 w-5 shrink-0 transition-colors sm:block ${isHovered ? 'text-brand-primary' : 'text-black/20'}`} />
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
