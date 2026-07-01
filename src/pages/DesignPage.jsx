import { Layout, Palette, PenTool } from 'lucide-react';
import ServicePageShell from '../components/sections/ServicePageShell';

const DesignPage = () => {
  const sections = [
    {
      id: 'ui-ux',
      title: 'UI/UX Experience',
      icon: Layout,
      tagline: 'Designing interfaces that people love to use.',
      desc: 'We map out beautiful, intuitive digital paths that make user interaction flawless. Our design philosophy bridges functional logic and visually sharp interfaces, driving engagement and brand loyalty.',
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
      desc: 'Branding is more than a logo; it is the feeling clients remember after interacting with your business. We build consistent brand ecosystems that reflect your mission and stand apart in crowded markets.',
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
      tagline: 'Creating visuals that communicate ideas clearly.',
      desc: 'From pitch decks to digital campaigns and print assets, our graphics work turns complex concepts into polished visuals that are easy to understand and ready to publish.',
      points: [
        'Pitch Decks & Presentations',
        'Social Media Graphics & Templates',
        'Custom Iconography & Illustrations',
        'Print & Digital Marketing Assets'
      ]
    }
  ];

  return (
    <ServicePageShell
      eyebrow="Creative Services"
      title="Design"
      titleAccent="Solutions"
      description="Visual systems, interfaces, and brand assets built to feel clear, memorable, and ready for real users."
      proofPoints={['UX first', 'Brand systems', 'Launch ready']}
      sections={sections}
    />
  );
};

export default DesignPage;
