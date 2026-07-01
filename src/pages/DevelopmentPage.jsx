import { Code, Smartphone, ShoppingBag } from 'lucide-react';
import ServicePageShell from '../components/sections/ServicePageShell';

const DevelopmentPage = () => {
  const sections = [
    {
      id: 'website-development',
      title: 'Website Development',
      icon: Code,
      tagline: 'High-performance, secure, responsive web platforms.',
      desc: 'We design and build custom web architectures from the ground up. Whether it is a fast marketing site, a SaaS dashboard, or a complex portal, we write modern, clean, search-engine-optimized code.',
      points: [
        'Vite, Next.js, & React Frontends',
        'Custom CMS Implementations',
        'Performance & SEO Optimizations',
        'API Architectures & Integrations'
      ]
    },
    {
      id: 'app-development',
      title: 'App Development',
      icon: Smartphone,
      tagline: 'Engaging, native iOS & Android applications.',
      desc: 'Connect with your audience directly on mobile devices. We create cross-platform applications using modern architecture for smooth performance, offline support, and intuitive hardware interactions.',
      points: [
        'React Native Mobile Apps',
        'Offline-First Data Storage',
        'Push Notifications & Alerts',
        'App Store & Play Store Submissions'
      ]
    },
    {
      id: 'ecommerce-development',
      title: 'Ecommerce Development',
      icon: ShoppingBag,
      tagline: 'Frictionless checkouts that optimize conversion rates.',
      desc: 'Turn casual visitors into regular customers with stores that pair secure checkout, clean inventory systems, and marketing automation built for scale.',
      points: [
        'Shopify & Custom E-Shops',
        'Stripe & Paypal Implementations',
        'Inventory & Logistics Syncing',
        'High-Conversion Checkout Flows'
      ]
    }
  ];

  return (
    <ServicePageShell
      eyebrow="Engineering Services"
      title="Development"
      titleAccent="Solutions"
      description="Secure, scalable, and responsive technology platforms designed to move quickly without feeling fragile."
      proofPoints={['Fast builds', 'Clean systems', 'Scale ready']}
      sections={sections}
    />
  );
};

export default DevelopmentPage;
