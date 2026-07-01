import { Users, Wrench } from 'lucide-react';
import ServicePageShell from '../components/sections/ServicePageShell';

const SupportPage = () => {
  const sections = [
    {
      id: 'maintenance',
      title: 'Platform Maintenance',
      icon: Wrench,
      tagline: 'Keeping your applications secure, active, and updated.',
      desc: 'Software needs continuous attention. We handle backups, package updates, security patches, bug fixes, and API upgrades so your web and mobile platforms keep operating smoothly.',
      points: [
        'Security Patching & Audits',
        'Database Backups & Restore Tests',
        'Package & Node Version Upgrades',
        'SLA Response Bug Fixes'
      ]
    },
    {
      id: 'client-success',
      title: 'Client Success',
      icon: Users,
      tagline: 'Dedicated partnership to help scale operations.',
      desc: 'We stay close after launch. Client success support helps resolve staff training gaps, review analytics, plan feature expansion, and align technical work to business goals.',
      points: [
        'Staff Onboarding & Training',
        'Analytics & Hosting Reviews',
        'Regular Performance Syncs',
        'Scalability Planning & Support'
      ]
    }
  ];

  return (
    <ServicePageShell
      eyebrow="Support Services"
      title="Support"
      titleAccent="Solutions"
      description="Reliable care for live platforms, from maintenance and upgrades to operational support after launch."
      proofPoints={['SLA support', 'Secure updates', 'Ongoing care']}
      sections={sections}
    />
  );
};

export default SupportPage;
