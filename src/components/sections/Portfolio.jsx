/*
  RETIRED: Portfolio (Digital products) section
  This component is currently retired and has been removed from App.jsx.
  To restore: uncomment its import and usage in src/App.jsx.
*/

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Web Design', 'App Dev', 'Branding'];
  
  const projects = [
    {
      id: 1,
      title: 'Fintech Dashboard',
      category: 'Web Design',
      metric: '+42% conversion',
      scope: 'UX, Web App, Analytics',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      category: 'App Dev',
      metric: '120k installs',
      scope: 'Mobile UI, Product Build',
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 3,
      title: 'Eco Brand Identity',
      category: 'Branding',
      metric: '3x recall lift',
      scope: 'Identity, Campaign System',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      category: 'Web Design',
      metric: '+68% checkout flow',
      scope: 'Storefront, CRO, Design System',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 5,
      title: 'Delivery Tracking App',
      category: 'App Dev',
      metric: '2.4s faster tasks',
      scope: 'Realtime UI, Operations',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 6,
      title: 'Coffee Shop Logo',
      category: 'Branding',
      metric: '12-market rollout',
      scope: 'Logo, Packaging, Social Kit',
      image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=900&q=80',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-white py-12 lg:py-14">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f7fbff] to-white" />
      <div className="absolute -right-28 top-16 h-64 w-64 rounded-full bg-brand-light/25 blur-[90px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-7 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold font-heading leading-[1.08] tracking-tighter text-gradient md:text-5xl pb-2">
              Digital products with launch-ready polish.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
              A focused look at the websites, apps, and brand systems we shape for teams that need speed, clarity, and measurable growth.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-1.5 rounded-full border border-gray-200 bg-white/80 p-1.5 shadow-[0_14px_35px_rgba(6,53,89,0.08)] backdrop-blur">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`rounded-full px-3.5 py-1.5 text-sm font-bold transition-all ${
                  activeFilter === category 
                    ? 'bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] text-white shadow-[0_8px_20px_rgba(21,121,193,0.24)]' 
                    : 'text-gray-500 hover:bg-gray-100 hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[1.15rem] border border-gray-200/80 bg-white shadow-[0_14px_35px_rgba(6,53,89,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(6,53,89,0.14)]"
              >
                <div className="relative h-40 overflow-hidden bg-gray-100 sm:h-44 lg:h-36 xl:h-40">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052d4d]/85 via-[#052d4d]/15 to-transparent" />
                  <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-secondary backdrop-blur">
                    {project.category}
                  </div>
                  <button
                    type="button"
                    aria-label={`View ${project.title}`}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-secondary shadow-lg transition-colors hover:bg-brand-primary hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-4">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-brand-primary">
                      {project.category}
                      </span>
                      <h3 className="text-xl font-bold tracking-tight text-black">{project.title}</h3>
                    </div>
                    <Sparkles className="mt-1 h-4 w-4 shrink-0 text-brand-primary/60" />
                  </div>

                  <div className="grid grid-cols-2 gap-3 border-t border-gray-100 pt-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Impact</p>
                      <p className="mt-0.5 text-sm font-bold text-black">{project.metric}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Scope</p>
                      <p className="mt-0.5 line-clamp-1 text-sm font-medium text-gray-600">{project.scope}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;
