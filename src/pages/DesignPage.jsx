import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, PenTool, CheckCircle } from 'lucide-react';

const DesignPage = () => {
  const sections = [
    {
      id: 'ui-ux',
      title: 'UI/UX Experience',
      icon: Layout,
      tagline: 'Designing interfaces that people love to use.',
      desc: 'We map out beautiful, intuitive digital paths that make user interaction flawless. Our design philosophy bridges the gap between functional logic and visually stunning interfaces, driving engagement and brand loyalty.',
      points: [
        'User Research & Persona Building',
        'Wireframing & Interactive Prototyping',
        'High-Fidelity UI Design',
        'Usability Testing & Iteration'
      ]
    },
    {
      id: 'branding',
      title: 'Branding & Identity',
      icon: Palette,
      tagline: 'Crafting unique visual stories for companies.',
      desc: 'Branding is more than a logo; it is the unique feeling your clients experience when they interact with your business. We build complete, consistent brand ecosystems that clearly reflect your mission and stand out in crowded markets.',
      points: [
        'Brand Strategy & Positioning',
        'Logo & Visual Identity Systems',
        'Brand Style Guides & Guidelines',
        'Marketing Collateral Templates'
      ]
    },
    {
      id: 'graphics',
      title: 'Graphics & Visuals',
      icon: PenTool,
      tagline: 'Creating engaging graphics that communicate ideas clearly.',
      desc: 'Our graphics design service helps companies communicate complex concepts visually. From stunning pitch decks to dynamic digital advertising banners and print assets, we deliver pixel-perfect assets tailored to your business needs.',
      points: [
        'Pitch Decks & Presentations',
        'Social Media Graphics & Templates',
        'Custom Iconography & Illustrations',
        'Print & Digital Marketing Assets'
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
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">(CREATIVE SERVICES)</span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-black tracking-tighter mt-4 mb-6">
            Design <span className="text-gradient">Solutions</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-600 font-medium leading-relaxed">
            We build state-of-the-art interactive and visual experiences that capture attention and transform user expectations.
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

export default DesignPage;
