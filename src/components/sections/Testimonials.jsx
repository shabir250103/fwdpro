import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO at TechStart",
      content: "FwdPro completely transformed our online presence. Their attention to detail and modern design approach helped us increase our conversion rate by 150% in just two months.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Marcus Chen",
      role: "Founder, GreenLeaf",
      content: "The app they built for us is incredibly smooth and intuitive. The team was communicative throughout the entire process and delivered exactly what we envisioned.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Director",
      content: "Their SEO strategies and beautiful landing pages gave us the competitive edge we needed. Highly recommend FwdPro for any serious startup looking to scale.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-bg-base)] relative overflow-hidden border-t border-black/5">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-black mb-6">
            Client <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-gray-600">
            Don't just take our word for it. Here's what our partners have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-10 bg-white border border-black/5 rounded-3xl shadow-sm hover:shadow-xl transition-shadow flex flex-col"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-black/5" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed italic flex-grow">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="text-black font-bold">{t.name}</h4>
                  <p className="text-sm text-brand-primary font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
