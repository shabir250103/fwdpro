import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const Counter = ({ from, to, duration = 2 }) => {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, inView, to, duration]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

const Stats = () => {
  const stats = [
    { value: 370, suffix: "+", label: "Creating and Optimizing Websites" },
    { value: 10, suffix: "+", label: "Brand Awareness and Recognition" },
    { value: 4, suffix: "X", label: "Measure and Analyze Performance" },
    { value: 50, suffix: "%", label: "Increase Conversions and Sales" }
  ];

  const marqueeText = "DESIGN • DEVELOPMENT • PRODUCT • MARKETING • SUPPORT • UI/UX • BRANDING • GRAPHICS • ";

  return (
    <section className="relative py-24 bg-[var(--color-bg-base)] overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-16 lg:mb-32">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">(SUSTAINED SUCCESS)</span>
            <h2 className="text-5xl md:text-6xl font-bold font-heading text-black tracking-tighter mb-8 leading-tight">
              Agency <span className="text-gradient pr-2 pb-1 inline-block">Goals</span>
            </h2>
            <button className="px-6 py-3 text-black rounded-full border border-black/20 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors flex items-center gap-3">
              MORE ABOUT AGENCY
              <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white transition-colors" />
            </button>
          </div>

          {/* Right Column - Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 mt-8 lg:mt-0">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col border-b border-black/20 pb-4">
                <div className="text-6xl md:text-7xl font-bold font-heading text-black tracking-tighter mb-2 flex items-baseline">
                  <Counter from={0} to={stat.value} duration={2 + idx * 0.2} />
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Marquee Background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex whitespace-nowrap opacity-10 text-black select-none pointer-events-none z-0 pb-8 mt-16">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex whitespace-nowrap"
        >
          <span className="text-[10vw] font-bold font-heading tracking-tighter uppercase mr-8">{marqueeText}</span>
          <span className="text-[10vw] font-bold font-heading tracking-tighter uppercase mr-8">{marqueeText}</span>
          <span className="text-[10vw] font-bold font-heading tracking-tighter uppercase mr-8">{marqueeText}</span>
          <span className="text-[10vw] font-bold font-heading tracking-tighter uppercase mr-8">{marqueeText}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
