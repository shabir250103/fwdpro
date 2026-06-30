import { Mail, ArrowRight } from 'lucide-react';
import footerBackdrop from '../../assets/footer_backdrop.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1579c1] to-[#063559] text-white pt-10 overflow-hidden relative border-t border-blue-400/20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10">
          
          {/* Brand & Description */}
          <div className="max-w-sm">
             <p className="text-blue-100/70 text-sm leading-relaxed">
                Building the digital bedrock for the next generation of global innovation and creative technology.
             </p>
          </div>

          {/* Newsletter */}
          <div>
             <p className="text-sm font-medium mb-3 text-blue-100">Get weekly market insights.</p>
             <div className="relative w-full sm:w-96">
                <input 
                  type="email" 
                  placeholder="Your professional email address." 
                  className="w-full bg-black/20 border border-white/20 rounded-full py-3 pl-12 pr-14 text-sm focus:outline-none focus:border-white text-white placeholder:text-blue-200/50 shadow-inner transition-colors" 
                />
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-200/50" />
                <button 
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-white hover:bg-blue-50 rounded-full w-9 flex items-center justify-center transition-colors shadow-md"
                >
                   <ArrowRight className="w-4 h-4 text-[#0c5991]" />
                </button>
             </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          
          {/* Col 1 */}
          <div>
            <h4 className="text-xs font-bold font-heading tracking-widest uppercase mb-4 text-blue-200">Products</h4>
            <ul className="space-y-2">
              {['Design Systems', 'Web Applications', 'Mobile Platforms', 'Digital Marketing'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-blue-100/70 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-bold font-heading tracking-widest uppercase mb-4 text-blue-200">Security</h4>
            <ul className="space-y-2">
              {['Data Privacy', 'Licensing', 'System Status', 'Insurance Policy'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-blue-100/70 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-bold font-heading tracking-widest uppercase mb-4 text-blue-200">Resources</h4>
            <ul className="space-y-2">
              {['Market News', 'Help Center', 'Annual Report', 'Case Studies'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-blue-100/70 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-xs font-bold font-heading tracking-widest uppercase mb-4 text-blue-200">Connect</h4>
            <ul className="space-y-2">
              {['LinkedIn', 'X (Formerly Twitter)', 'Discord', 'Instagram'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-blue-100/70 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom separator & Copyright */}
        <div className="border-t border-white/10 pt-4 pb-4 lg:pb-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-xs font-mono text-blue-200/50 uppercase tracking-widest relative z-10">
           <div className="flex justify-center md:justify-start">
             <p>&copy; COPYRIGHT {new Date().getFullYear()} FWDPRO</p>
           </div>
           
           <div className="flex justify-center">
             <img src={footerBackdrop} alt="FWDPRO" className="h-16 md:h-24 w-auto brightness-0 invert opacity-80" />
           </div>

           <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Compliance</a>
           </div>
        </div>

      </div>



    </footer>
  );
};

export default Footer;
