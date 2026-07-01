import { Compass, Search } from 'lucide-react';
import ServicePageShell from '../components/sections/ServicePageShell';

const ProductPage = () => {
  const sections = [
    {
      id: 'research',
      title: 'User & Product Research',
      icon: Search,
      tagline: 'De-risking product investments with data.',
      desc: "We analyze customer behavior and market structure to find your product's strongest advantage. Interviews, competitor audits, and trend mapping help prioritize what users actually need.",
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
      desc: 'A great product needs clear direction. We scope MVPs, prioritize backlogs, write requirements, and shape roadmaps that turn early concepts into focused launches.',
      points: [
        'MVP Scoping & Definition',
        'Interactive Product Roadmaps',
        'PRDs & User Story Writing',
        'Launch & Iteration Support'
      ]
    }
  ];

  return (
    <ServicePageShell
      eyebrow="Product Services"
      title="Product"
      titleAccent="Strategy"
      description="Research-backed product direction for teams that need sharper decisions before they spend engineering time."
      proofPoints={['User insight', 'Roadmaps', 'MVP clarity']}
      sections={sections}
    />
  );
};

export default ProductPage;
