import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, CheckCircle } from 'lucide-react';

const ProductPage = () => {
  const sections = [
    {
      id: 'research',
      title: 'User & Product Research',
      icon: Search,
      tagline: 'De-risking product investments with data.',
      desc: 'We analyze consumer habits and structural industry trends to find your product’s unfair competitive advantage. By conducting in-depth user interviews and auditing direct competitors, we build features that customers truly care about.',
      points: [
        'User Interviews & Surveys',
        'Competitor Audits & Matrix Analysis',
        'Market Trend Identification',
        'Feature Prioritization Maps'
      ]
    },
    {
      id: 'strategy',
      title: 'Product Strategy & Roadmap',
      icon: Compass,
      tagline: 'Bridging ideas and engineering velocity.',
      desc: 'A great product needs a solid direction. We help you scope a minimum viable product (MVP), prioritize your engineering backlogs, write detailed requirements, and layout a sustainable roadmap to take your platform from concept to launch.',
      points: [
        'MVP Scoping & Definition',
        'Interactive Product Roadmaps',
        'PRDs & User Story Writing',
        'Launch & Iteration Support'
      ]
    }
  ];

  return (
    <div className="bg-[var(--color-bg-base)] min-h-screen pt-28 pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">(MANAGEMENT SERVICES)</span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-black tracking-tighter mt-4 mb-6">
            Product <span className="text-gradient">Strategy</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-600 font-medium leading-relaxed">
            De-risk feature development and alignment with research-backed roadmaps built for agile deployment.
          </p>
        </motion.div>
      </div>

      {/* Grouped Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 py-12 border-b border-black/5 last:border-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left side: Icon & Title */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-brand-primary/10 shadow-[0_8px_30px_rgb(21,121,193,0.06)] text-brand-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold font-heading text-black tracking-tighter">
                    {section.title}
                  </h2>
                  <p className="text-sm font-semibold text-brand-secondary/80 tracking-wide uppercase">
                    {section.tagline}
                  </p>
                </div>

                {/* Right side: Detailed Description */}
                <div className="lg:col-span-7 space-y-8">
                  <p className="text-base text-gray-700 leading-relaxed font-medium">
                    {section.desc}
                  </p>
                  
                  {/* Grid points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {section.points.map((point, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white/70 border border-black/5 rounded-xl p-4 shadow-sm backdrop-blur-sm">
                        <CheckCircle className="w-4 h-4 text-brand-primary shrink-0" />
                        <span className="text-sm font-medium text-black">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
