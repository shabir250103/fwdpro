import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const ServicePageShell = ({ eyebrow, title, titleAccent, description, proofPoints, sections }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--color-bg-base)] pb-16 pt-24 sm:pb-20 sm:pt-28">
      <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-80 h-80 w-80 rounded-full bg-brand-light/25 blur-3xl" />

      <header className="relative mx-auto mb-10 max-w-7xl px-4 sm:mb-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/75 p-5 text-center shadow-[0_24px_70px_rgba(10,79,130,0.1)] backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-secondary shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-primary" />
            {eyebrow}
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.02] tracking-tight text-black sm:text-5xl md:text-7xl md:tracking-tighter">
            {title} <span className="text-gradient inline-block pb-2 pr-2">{titleAccent}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-gray-600 sm:text-base">
            {description}
          </p>

          <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
            {proofPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-brand-primary/10 bg-[#f7fbff] px-2 py-3 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-brand-secondary sm:px-4 sm:text-xs"
              >
                {point}
              </div>
            ))}
          </div>
        </motion.div>
      </header>

      <main className="relative mx-auto max-w-7xl space-y-5 px-4 sm:space-y-10 sm:px-6 lg:px-8">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="scroll-mt-28 overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/78 p-4 shadow-[0_20px_55px_rgba(10,79,130,0.08)] backdrop-blur-xl sm:p-6 lg:p-8"
            >
              <div className={`grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 ${isEven ? '' : 'lg:[&>*:first-child]:order-2'}`}>
                <div className="lg:col-span-5">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-secondary to-brand-primary text-white shadow-[0_14px_35px_rgba(21,121,193,0.22)] sm:h-14 sm:w-14">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-heading text-4xl font-bold tracking-tight text-brand-primary/15 sm:text-5xl">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl md:tracking-tighter">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-xs font-bold uppercase leading-5 tracking-[0.16em] text-brand-secondary/75 sm:text-sm">
                    {section.tagline}
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-sm font-medium leading-7 text-gray-700 sm:text-base">
                    {section.desc}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                    {section.points.map((point) => (
                      <div
                        key={point}
                        className="group flex min-h-28 flex-col items-center justify-center gap-2 rounded-2xl border border-black/5 bg-[#f7fbff] p-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-brand-primary/20 hover:bg-white sm:min-h-0 sm:flex-row sm:justify-start sm:gap-3 sm:p-4 sm:text-left"
                      >
                        <CheckCircle className="h-4 w-4 shrink-0 text-brand-primary" />
                        <span className="text-xs font-semibold leading-5 text-black sm:text-sm">{point}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`#${section.id}`}
                    className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand-primary/20 bg-white px-5 text-xs font-bold uppercase tracking-[0.14em] text-brand-secondary shadow-sm transition hover:border-brand-primary/40 hover:text-brand-primary"
                  >
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.section>
          );
        })}
      </main>
    </div>
  );
};

export default ServicePageShell;
