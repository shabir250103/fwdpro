import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ConnectModal from '../ui/ConnectModal';
import logo from '../../assets/fwd logo.svg.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Home',
      path: '/',
      sub: []
    },
    {
      name: 'Design',
      path: '/design',
      sub: [
        { name: 'UI/UX', path: '/design#ui-ux' },
        { name: 'Branding', path: '/design#branding' },
        { name: 'Graphics', path: '/design#graphics' }
      ]
    },
    {
      name: 'Development',
      path: '/development',
      sub: [
        { name: 'Website Development', path: '/development#website-development' },
        { name: 'App Development', path: '/development#app-development' },
        { name: 'Ecommerce Development', path: '/development#ecommerce-development' }
      ]
    },
    
    {
      name: 'Marketing',
      path: '/marketing',
      sub: [
        { name: 'Digital Marketing', path: '/marketing#digital-marketing' },
        { name: 'SEO', path: '/marketing#seo' },
        { name: 'Growth', path: '/marketing#growth' }
      ]
    },
    {
      name: 'Support',
      path: '/support',
      sub: [
        { name: 'Maintenance', path: '/support#maintenance' },
        { name: 'Client Success', path: '/support#client-success' }
      ]
    },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-[0_15px_40px_rgba(15,23,42,0.08)]' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">

          {/* Logo - Left Side */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={logo} alt="FWDPRO" className="h-10 md:h-14 w-auto" />
            </Link>
          </div>

          {/* Centered Pill Menu - Desktop */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center space-x-1 bg-white/70 backdrop-blur-md border border-brand-light/30 rounded-full px-2 py-1.5 shadow-sm">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <Link
                    to={link.path}
                    onClick={() => setActiveLink(link.name)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 flex items-center gap-1 ${activeLink === link.name ? 'text-white' : 'text-brand-secondary hover:text-brand-primary'}`}
                  >
                    {activeLink === link.name && (
                      <motion.div
                        layoutId="pill"
                        className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] rounded-full -z-10 shadow-md"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    {link.name}
                    {link.sub.length > 0 && (
                      <ChevronDown className={`w-3 h-3 transition-transform ${hoveredLink === link.name ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hoveredLink === link.name && link.sub.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white/90 backdrop-blur-xl border border-brand-light/30 rounded-2xl shadow-[0_10px_40px_rgba(21,121,193,0.15)] overflow-hidden py-2"
                      >
                        {link.sub.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="block px-4 py-2.5 text-sm font-medium text-brand-secondary hover:bg-brand-light/20 hover:text-brand-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:inline-flex items-center justify-center rounded-full bg-brand-primary px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary/70"
            >
              Contact Us
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex lg:hidden items-center justify-center rounded-full bg-brand-primary px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary/70"
            >
              Contact
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-brand-secondary hover:text-brand-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-brand-light/20 shadow-2xl absolute w-full top-full"
          >
            <div className="px-4 py-6 flex flex-col space-y-2 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-brand-light/10 pb-2">
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-2 py-2 text-sm font-bold uppercase tracking-wider text-brand-secondary hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.sub.length > 0 && (
                    <div className="flex flex-col pl-4 space-y-1 mt-1">
                      {link.sub.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-2 py-2 text-sm font-medium text-gray-500 hover:text-brand-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
                className="w-full rounded-full bg-brand-primary px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-brand-secondary"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ConnectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
