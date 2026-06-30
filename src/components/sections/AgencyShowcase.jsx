import { motion } from 'framer-motion';
import { ArrowRight, Globe, Megaphone, Search, TrendingUp } from 'lucide-react';

const floatingCards = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites built to convert visitors into customers.',
    icon: Globe,
    position: 'lg:left-6 lg:top-10 xl:left-10',
    floatDelay: 0,
  },
  {
    title: 'SEO Optimization',
    description: 'Search strategies that help the right audience find you faster.',
    icon: Search,
    position: 'lg:right-6 lg:top-10 xl:right-10',
    floatDelay: 0.4,
  },
  {
    title: 'Digital Marketing',
    description: 'Campaigns shaped around awareness, trust, and measurable demand.',
    icon: Megaphone,
    position: 'lg:left-16 lg:bottom-9 xl:left-24',
    floatDelay: 0.8,
  },
  {
    title: 'Growth Strategy',
    description: 'Clear roadmaps for scaling your product, brand, and acquisition.',
    icon: TrendingUp,
    position: 'lg:right-8 lg:bottom-12 xl:right-20',
    floatDelay: 1.2,
  },
];

const AgencyShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 border-t border-[#1579c1]/10 bg-gradient-to-b from-white/80 to-transparent" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-14 h-72 w-72 rounded-full bg-[#8cbce6]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-16 h-72 w-72 rounded-full bg-[#1579c1]/15 blur-3xl" />

      <svg
        viewBox="0 0 1440 520"
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 hidden w-full -translate-y-1/2 text-brand-primary/20 lg:block"
      >
        <path
          d="M48 270C254 82 488 78 720 260C952 442 1186 438 1392 250"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M48 250C254 438 488 442 720 260C952 78 1186 82 1392 270"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute left-[9%] top-[22%] h-2.5 w-2.5 rounded-full bg-brand-primary/30" />
        <div className="absolute right-[12%] top-[30%] h-2 w-2 rounded-full bg-brand-light/60" />
        <div className="absolute bottom-[22%] left-[22%] h-2 w-2 rounded-full bg-brand-primary/25" />
        <div className="absolute bottom-[18%] right-[24%] h-3 w-3 rounded-full bg-brand-light/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:min-h-[560px] lg:px-8">
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center justify-center text-center lg:min-h-[560px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-secondary shadow-sm backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-brand-primary" />
            Digital Growth Agency
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-7 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-[4.8rem]"
          >
            Transforming Ideas Into{' '}
            <span className="text-gradient inline-block pr-2 pb-5">Digital Growth</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg"
          >
            We combine websites, SEO, and digital marketing into focused systems that help ambitious businesses attract better leads and grow with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center"
          >
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary px-7 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_18px_45px_rgba(21,121,193,0.24)] transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-primary/25 bg-white/80 px-7 text-sm font-bold uppercase tracking-[0.14em] text-brand-secondary shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-primary/50 hover:bg-white"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <div className="relative z-20 mt-12 grid gap-4 sm:grid-cols-2 lg:absolute lg:inset-0 lg:mt-0 lg:block">
          {floatingCards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className={`lg:absolute ${card.position}`}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4.5,
                    delay: card.floatDelay,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="h-full rounded-[1.15rem] border border-white/80 bg-white/90 p-4 shadow-[0_24px_70px_rgba(10,79,130,0.12)] backdrop-blur-xl lg:w-[220px]"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-black">{card.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-gray-600">{card.description}</p>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgencyShowcase;
