import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/fwd logo.svg.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Design');
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Design', sub: ['UI/UX', 'Branding', 'Graphics'] },
    { name: 'Development', sub: ['Website Development ', 'App Development', 'Ecommerce Development '] },
    { name: 'Product', sub: ['Research', 'Strategy'] },
    { name: 'Marketing', sub: ['Digital Marketing', 'SEO', 'Growth'] },
    { name: 'Support', sub: ['Maintenance', 'Client Success'] },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">

          {/* Logo - Left Side */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#">
              <img src={logo} alt="FWDPRO" className="h-10 md:h-14 w-auto" />
            </a>
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
                  <button
                    onClick={() => setActiveLink(link.name)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 flex items-center gap-1 ${activeLink === link.name
                      ? 'text-white'
                      : 'text-brand-secondary hover:text-brand-primary'
                      }`}
                  >
                    {activeLink === link.name && (
                      <motion.div
                        layoutId="pill"
                        className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] rounded-full -z-10 shadow-md"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {link.name}
                    <ChevronDown className={`w-3 h-3 transition-transform ${hoveredLink === link.name ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hoveredLink === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white/90 backdrop-blur-xl border border-brand-light/30 rounded-2xl shadow-[0_10px_40px_rgba(21,121,193,0.15)] overflow-hidden py-2"
                      >
                        {link.sub.map((item, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="block px-4 py-2.5 text-sm font-medium text-brand-secondary hover:bg-brand-light/20 hover:text-brand-primary transition-colors"
                          >
                            {item}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Mobile toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-secondary hover:text-brand-primary focus:outline-none"
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
                  <div className="px-2 py-2 text-sm font-bold uppercase tracking-wider text-brand-secondary">
                    {link.name}
                  </div>
                  <div className="flex flex-col pl-4 space-y-1 mt-1">
                    {link.sub.map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-2 text-sm font-medium text-gray-500 hover:text-brand-primary transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
