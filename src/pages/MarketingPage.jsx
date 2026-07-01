import { Globe, Rocket, TrendingUp } from 'lucide-react';
import ServicePageShell from '../components/sections/ServicePageShell';

const MarketingPage = () => {
  const sections = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: TrendingUp,
      tagline: 'Targeted campaigns that maximize acquisition.',
      desc: 'We execute data-driven campaigns across social platforms and search engines to acquire qualified leads. Continuous budget optimization and copy testing keep performance moving.',
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
      desc: 'Get found by people searching for your services. We research keywords, solve technical crawl issues, and shape content that builds authority and trust.',
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
      desc: 'We implement referral loops, refine onboarding drop-offs, configure analytics funnels, and test campaigns to lower acquisition costs over time.',
      points: [
        'Funnel Optimization Maps',
        'Onboarding UX Upgrades',
        'A/B Testing Experiments',
        'Retention & Referral Loops'
      ]
    }
  ];

  return (
    <ServicePageShell
      eyebrow="Growth Services"
      title="Marketing"
      titleAccent="Solutions"
      description="Acquisition, search, and conversion systems built around measurable demand instead of noisy activity."
      proofPoints={['Paid growth', 'SEO systems', 'Conversion lift']}
      sections={sections}
    />
  );
};

export default MarketingPage;
