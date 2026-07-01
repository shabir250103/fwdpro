import { Mail, ArrowRight } from 'lucide-react';
import footerBackdrop from '../../assets/footer_backdrop.png';

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden border-t border-blue-400/20 bg-gradient-to-r from-[#1579c1] to-[#063559] pt-6 text-white sm:pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="mb-6 flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:items-center lg:text-left">
          
          {/* Brand & Description */}
          <div className="max-w-sm">
             <p className="text-xs leading-6 text-blue-100/70 sm:text-sm">
                Building the digital bedrock for the next generation of global innovation and creative technology.
             </p>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-auto">
             <p className="mb-2 text-xs font-medium text-blue-100 sm:text-sm">Get weekly market insights.</p>
             <div className="relative mx-auto w-full max-w-sm sm:w-80 lg:mx-0">
                <input 
                  type="email" 
                  placeholder="Your professional email address." 
                  className="w-full rounded-full border border-white/20 bg-black/20 py-2.5 pl-10 pr-12 text-xs text-white shadow-inner transition-colors placeholder:text-blue-200/50 focus:border-white focus:outline-none sm:text-sm" 
                />
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-200/50" />
                <button 
                  className="absolute bottom-1.5 right-1.5 top-1.5 flex w-8 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-blue-50"
                >
                   <ArrowRight className="w-4 h-4 text-[#0c5991]" />
                </button>
             </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="mb-6 grid grid-cols-2 gap-x-5 gap-y-5 text-center md:grid-cols-4 lg:text-left">
          
          {/* Col 1 */}
          <div>
            <h4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-blue-200 sm:text-xs">Products</h4>
            <ul className="space-y-1.5">
              {['Design Systems', 'Web Applications', 'Mobile Platforms', 'Digital Marketing'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-xs font-medium text-blue-100/70 transition-colors hover:text-white sm:text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-blue-200 sm:text-xs">Security</h4>
            <ul className="space-y-1.5">
              {['Data Privacy', 'Licensing', 'System Status', 'Insurance Policy'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-xs font-medium text-blue-100/70 transition-colors hover:text-white sm:text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-blue-200 sm:text-xs">Resources</h4>
            <ul className="space-y-1.5">
              {['Market News', 'Help Center', 'Annual Report', 'Case Studies'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-xs font-medium text-blue-100/70 transition-colors hover:text-white sm:text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-blue-200 sm:text-xs">Connect</h4>
            <ul className="space-y-1.5">
              {['LinkedIn', 'X (Formerly Twitter)', 'Discord', 'Instagram'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-xs font-medium text-blue-100/70 transition-colors hover:text-white sm:text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom separator & Copyright */}
        <div className="relative z-10 grid grid-cols-1 items-center gap-3 border-t border-white/10 py-3 text-[10px] font-mono uppercase tracking-widest text-blue-200/50 md:grid-cols-3">
           <div className="flex justify-center md:justify-start">
             <p>&copy; COPYRIGHT {new Date().getFullYear()} FWDPRO</p>
           </div>
           
           <div className="flex justify-center">
             <img src={footerBackdrop} alt="FWDPRO" className="h-10 w-auto brightness-0 invert opacity-75 md:h-14" />
           </div>

           <div className="flex flex-wrap justify-center gap-4 md:justify-end md:gap-6">
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
