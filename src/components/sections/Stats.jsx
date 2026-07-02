import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const Counter = ({ from, to, duration = 2 }) => {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true });
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

  const marqueeItems = ["FWDPRO", "DESIGN", "DEVELOPMENT", "PRODUCT", "MARKETING", "SUPPORT", "UI UX", "BRANDING"];
  const marqueeContent = marqueeItems.map((item, idx) => {
    const isGradient = idx % 2 === 0;
    return (
      <span
        key={`${item}-${idx}`}
        className={`inline-flex items-center justify-center rounded-[20px] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] shadow-[0_8px_24px_rgba(21,121,193,0.08)] mx-2 ${isGradient ? 'text-gradient bg-transparent' : 'text-brand-secondary bg-white/95'}`}
      >
        {item}
      </span>
    );
  });

  return (
    <section className="relative overflow-hidden border-t border-black/5 bg-[var(--color-bg-base)] py-16 sm:py-24">
      {/* Marquee Ribbon */}
      <div className="absolute left-0 top-8 z-0 w-full overflow-hidden select-none pointer-events-none">
        <div className="relative mx-auto max-w-full overflow-hidden rounded-[30px] border border-brand-primary/10 bg-gradient-to-r from-[var(--color-bg-base)] via-white/75 to-[var(--color-bg-base)] py-3 shadow-[0_18px_50px_rgba(21,121,193,0.08)] backdrop-blur-md">
          {/* decorative white-blue-white stripe at top/bottom */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-white via-[var(--color-brand-primary)] to-white opacity-95 rounded-t-[30px]" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-white via-[var(--color-brand-primary)] to-white opacity-95 rounded-b-[30px]" />

          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-bg-base)] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-bg-base)] to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, repeatType: 'loop', ease: "linear", duration: 10 }}
            style={{ willChange: 'transform', transform: 'translateZ(0)' }}
            className="flex items-center whitespace-nowrap py-1"
          >
            {marqueeContent}
            {marqueeContent}
          </motion.div>

          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, repeatType: 'loop', ease: "linear", duration: 12 }}
            style={{ willChange: 'transform', transform: 'translateZ(0)' }}
            className="flex items-center whitespace-nowrap py-1"
          >
            {marqueeContent}
            {marqueeContent}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-12 lg:mb-32 lg:grid-cols-12 lg:gap-8">

          {/* Left Column */}
          <div className="flex flex-col items-center justify-center text-center lg:col-span-5 lg:items-start lg:text-left">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">(SUSTAINED SUCCESS)</span>
            <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl md:text-6xl lg:mb-8 lg:tracking-tighter">
              Agency <span className="text-gradient pr-2 pb-1 inline-block">Goals</span>
            </h2>
            <button className="flex items-center gap-3 rounded-full border border-black/20 px-6 py-3 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white">
              MORE ABOUT AGENCY
              <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white transition-colors" />
            </button>
          </div>

          {/* Right Column - Grid */}
          <div className="mt-2 grid grid-cols-2 gap-4 text-center sm:gap-8 lg:col-span-7 lg:mt-0 lg:gap-16 lg:text-left">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex min-h-36 flex-col items-center justify-center rounded-2xl border border-black/10 bg-white/55 p-4 shadow-sm backdrop-blur-sm sm:min-h-0 sm:rounded-none sm:border-x-0 sm:border-t-0 sm:bg-transparent sm:p-0 sm:shadow-none lg:items-start">
                <div className="mb-2 flex items-baseline text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-7xl lg:tracking-tighter">
                  <Counter from={0} to={stat.value} duration={2 + idx * 0.2} />
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-xs font-medium leading-5 text-gray-600 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default Stats;
