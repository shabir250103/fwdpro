import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const serviceData = {
  'ui-ux': {
    title: 'UI/UX Design',
    description: 'We map out beautiful, intuitive digital paths that make user interaction flawless. Our design philosophy bridges functional logic and visually sharp interfaces.',
    process: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Final UI Delivery'],
    projects: [
      { title: 'Fintech Dashboard', category: 'Finance', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80' },
      { title: 'Health Tracking App', category: 'Healthcare', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80' },
      { title: 'E-commerce Redesign', category: 'Retail', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  'branding': {
    title: 'Branding & Identity',
    description: 'Branding is more than a logo; it is the feeling clients remember after interacting with your business. We build consistent brand ecosystems.',
    process: ['Brand Discovery', 'Positioning', 'Visual Identity', 'Brand Guidelines', 'Rollout Strategy'],
    projects: [
      { title: 'EcoBrand Identity', category: 'Sustainability', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80' },
      { title: 'Tech Startup Rebrand', category: 'Technology', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80' },
      { title: 'Boutique Coffee', category: 'Food & Beverage', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  'graphics': {
    title: 'Graphics & Visuals',
    description: 'From pitch decks to digital campaigns and print assets, our graphics work turns complex concepts into polished visuals that are easy to understand.',
    process: ['Concept Sketching', 'Asset Creation', 'Illustration', 'Typography', 'Final Polish'],
    projects: [
      { title: 'Investor Pitch Deck', category: 'Corporate', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80' },
      { title: 'Social Media Campaign', category: 'Marketing', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80' },
      { title: 'Event Posters', category: 'Entertainment', image: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  'website-development': {
    title: 'Website Development',
    description: 'Your website is your digital flagship. We build scalable, high-performance platforms optimized for search engines and flawless user journeys.',
    process: ['Architecture Planning', 'Frontend Development', 'Backend Integration', 'Performance Tuning', 'Deployment'],
    projects: [
      { title: 'Corporate Portal', category: 'Enterprise', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80' },
      { title: 'SaaS Platform', category: 'Software', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80' },
      { title: 'Creative Portfolio', category: 'Agency', image: 'https://images.unsplash.com/photo-1481481600451-24ce5340f120?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  'app-development': {
    title: 'Mobile App Development',
    description: 'Connect with your audience directly on mobile devices. We create cross-platform applications using modern architecture for smooth performance.',
    process: ['Requirement Analysis', 'UI/UX Design', 'Native/Hybrid Build', 'QA Testing', 'App Store Launch'],
    projects: [
      { title: 'Fitness Tracker', category: 'Health', image: 'https://images.unsplash.com/photo-1526428784277-227a8581e197?auto=format&fit=crop&w=900&q=80' },
      { title: 'On-Demand Delivery', category: 'Logistics', image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=900&q=80' },
      { title: 'Social Networking', category: 'Community', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  'ecommerce-development': {
    title: 'E-commerce Platforms',
    description: 'Turn visitors into loyal customers. We craft secure, fast, and highly optimized online stores designed to maximize conversions.',
    process: ['Store Setup', 'Custom Theme Dev', 'Payment Integration', 'Inventory Sync', 'Conversion Optimization'],
    projects: [
      { title: 'Fashion Retailer', category: 'Apparel', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80' },
      { title: 'Electronics Store', category: 'Tech', image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=900&q=80' },
      { title: 'Artisan Marketplace', category: 'Crafts', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'We execute data-driven campaigns across social platforms and search engines to acquire qualified leads and grow your brand presence.',
    process: ['Market Research', 'Campaign Strategy', 'Ad Creation', 'Monitoring', 'Analytics Reporting'],
    projects: [
      { title: 'Lead Gen Campaign', category: 'B2B', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80' },
      { title: 'Product Launch', category: 'Consumer Goods', image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=900&q=80' },
      { title: 'Brand Awareness', category: 'Startup', image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  'seo': {
    title: 'SEO & Organic Growth',
    description: 'Sustainable visibility requires more than paid ads. We optimize your technical foundation and content to dominate search engine results.',
    process: ['Technical SEO Audit', 'Keyword Strategy', 'On-Page Optimization', 'Link Building', 'Performance Tracking'],
    projects: [
      { title: 'E-commerce SEO', category: 'Retail', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=900&q=80' },
      { title: 'Local Business Ranking', category: 'Services', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80' },
      { title: 'Content Strategy', category: 'Publishing', image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  'growth': {
    title: 'Growth Marketing',
    description: 'Rapid experimentation across the entire funnel. We focus on acquisition, activation, and retention to scale your business aggressively.',
    process: ['Funnel Analysis', 'A/B Testing', 'Conversion Optimization', 'Retention Strategies', 'Scaling Winners'],
    projects: [
      { title: 'App Install Campaign', category: 'Mobile', image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80' },
      { title: 'SaaS User Acquisition', category: 'Software', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80' },
      { title: 'Subscription Growth', category: 'Media', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80' }
    ]
  }
};

const ServiceDetailPage = () => {
  const { id } = useParams();

  const fallbackDetails = {
    title: id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    description: "This is a detailed explanation of our " + id.replace(/-/g, ' ') + " services. We build robust solutions that scale with your business needs.",
    process: ["Discovery & Strategy", "Design & Prototyping", "Development", "Quality Assurance", "Launch"],
    projects: [
      { title: "Project Alpha", category: "Enterprise Solution", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80" },
      { title: "Project Beta", category: "Consumer Platform", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80" },
      { title: "Project Gamma", category: "B2B Application", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80" }
    ]
  };

  const serviceDetails = serviceData[id] || fallbackDetails;

  return (
    <div className="relative min-h-screen bg-[var(--color-bg-base)] pb-16 pt-24 sm:pb-20 sm:pt-28 text-black">
      <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-primary/10 blur-3xl" />
      
      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <Link to={-1} className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-black">{serviceDetails.title}</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl leading-relaxed font-medium">
            {serviceDetails.description}
          </p>
        </motion.section>

        {/* Process Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-black">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDetails.process.map((step, index) => (
              <div key={index} className="bg-white/70 border border-black/5 rounded-2xl p-6 backdrop-blur-sm shadow-sm">
                <div className="text-brand-primary text-xl font-bold mb-4">0{index + 1}</div>
                <h3 className="text-lg font-bold text-black">{step}</h3>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Portfolio Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-black">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceDetails.projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-white border border-black/5 shadow-sm">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-brand-primary text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-bold text-black">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-brand-primary/20 rounded-3xl p-10 text-center shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4 text-black">Ready to get started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-medium">Let's discuss how our {serviceDetails.title} services can help achieve your business goals.</p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-inquiry'))}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-110 shadow-md"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.section>

      </main>
    </div>
  );
};

export default ServiceDetailPage;
