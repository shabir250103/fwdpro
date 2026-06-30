import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Rocket, CheckCircle } from 'lucide-react';

const MarketingPage = () => {
  const sections = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: TrendingUp,
      tagline: 'Targeted ads that maximize acquisition.',
      desc: 'We execute data-driven campaigns across social platforms and search engines to acquire qualified leads. Through strict optimization of ad budgets and continuous copy testing, we secure high conversions and client returns.',
      points: [
        'Google & Meta Ads Setup',
        'Conversion Rate Audits',
        'Social Media Campaigning',
        'Detailed Performance Reports'
      ]
    },
    {
      id: 'seo',
      title: 'SEO & Content',
      icon: Globe,
      tagline: 'Ranking higher to gain continuous organic traffic.',
      desc: 'Get found by people searching for your services. We perform exhaustive keywords research, solve complex technical SEO crawl blocks, and author engaging editorial content that gains high authority backlinks and trust.',
      points: [
        'Technical Site SEO Audits',
        'Keyword Opportunity Maps',
        'On-Page & Schema Updates',
        'Content Strategy & Editing'
      ]
    },
    {
      id: 'growth',
      title: 'Growth Hacking',
      icon: Rocket,
      tagline: 'Rapid experiments to compound user growth.',
      desc: 'Traditional channels can be slow. We implement viral referral mechanics, refine onboarding drop-offs, configure analytics funnels, and test email campaigns to continuously lower user acquisition costs.',
      points: [
        'Funnel Optimization Maps',
        'Onboarding UX Upgrades',
        'A/B Testing Experiments',
        'Retention & Referral Loops'
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
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">(GROWTH SERVICES)</span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-black tracking-tighter mt-4 mb-6">
            Marketing <span className="text-gradient">Solutions</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-600 font-medium leading-relaxed">
            Acquire, convert, and retain high-value users through systematic campaigns and search-engine visibility.
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

export default MarketingPage;
