import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Mail } from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.4 3.6A10.03 10.03 0 0 0 3.6 20.4L2 22l1.6-4.6A10.03 10.03 0 0 0 20.4 3.6Z" />
    <path d="M15.2 14.8c-.3.8-1.2 1.6-1.8 1.8-.5.2-1.1.2-1.5.1-.4-.1-1.1-.4-1.7-1.1-.6-.6-1.1-1.4-1.3-1.8-.2-.4-.1-.7.1-.9.2-.2.5-.4.7-.6.2-.1.3-.2.5-.2.2-.1.4-.1.6.1.2.2.6.7.8.9.2.2.4.3.6.4.2.1.3.1.5 0 .2-.1.6-.2.9-.5.3-.3.6-.6.8-.8.2-.2.3-.3.4-.5.1-.1.1-.3 0-.5-.1-.2-.3-.4-.5-.6-.2-.2-.4-.3-.6-.5-.2-.1-.4-.1-.6 0-.2.1-.5.2-.8.4-.3.2-.7.5-1.1.5s-.7 0-1.1-.2c-.4-.2-.7-.5-1-.8-.3-.3-.5-.6-.7-1-.2-.4-.2-.8-.1-1.1.1-.3.4-.7.8-1 1.1-.9 2.3-1 2.6-1 .3 0 .7 0 1 .1.3.1.7.2 1 .3.2.1.3.1.4.2.1.1.2.2.3.4.1.2.1.3 0 .5-.1.2-.2.4-.4.6-.2.2-.4.3-.5.4-.2.1-.3.2-.5.2-.2 0-.5-.1-.8-.2-.3-.1-.6-.2-.8-.2-.2 0-.3.1-.4.2-.1.1-.1.2-.1.3 0 .1.1.3.2.4.1.1.4.3.6.4.2.2.5.3.8.5.3.2.5.4.7.5.2.2.3.4.3.6 0 .2-.1.4-.2.6-.1.2-.3.4-.4.6-.1.2-.2.4-.2.5 0 .1.1.3.3.4.2.1.4.1.7.1.3 0 .7-.1 1-.3.3-.2.6-.4.8-.7.2-.3.4-.5.5-.7.1-.2.2-.4.4-.4.2 0 .4.1.6.3.2.1.3.3.3.5 0 .2-.1.4-.2.6-.1.2-.3.4-.4.5-.2.2-.2.4-.1.6.1.2.2.4.4.6.2.2.4.4.6.5.3.2.6.2.9.1.3-.1.6-.2.8-.3.2-.1.4-.2.6-.2s.3.1.4.2c.1.1.1.2.1.4 0 .1 0 .3-.1.4-.2.5-.5 1.2-.8 1.7Z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M8.5 16.5V10.5H10.5V16.5H8.5Z" />
    <path d="M11 10.5H13.5C15.1 10.5 16 11.25 16 12.6V16.5H14V12.75C14 12.25 13.8 12 13.3 12C12.8 12 12.6 12.3 12.6 12.75V16.5H11V10.5Z" />
    <path d="M8.5 9.5H10.5" />
  </svg>
);

const ConnectModal = ({ isOpen, onClose }) => {
  // lock background scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
    return undefined;
  }, [isOpen]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 z-50">
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="fixed left-1/2 top-1/2 z-10 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl"
          >
            <button onClick={onClose} className="absolute right-4 top-4 text-gray-600 hover:text-gray-900">
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-lg font-bold mb-2">Connect with us</h3>
            <p className="text-sm text-gray-600 mb-4">Choose a channel to reach our team directly.</p>

            <div className="grid gap-3">
              <a
                href="https://wa.me/8531920610"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-start gap-3 rounded-[20px] bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] px-4 py-3 text-white font-semibold"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>

              <a
                href="mailto:info@fwdpro.in"
                className="inline-flex w-full items-center justify-start gap-3 rounded-[20px] bg-white text-brand-secondary px-4 py-3 border border-brand-primary/10"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>

              <a
                href="https://www.instagram.com/_fwdpro?igsh=NjRjZ3BodHhudHUz"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-start gap-3 rounded-[20px] bg-white text-brand-secondary px-4 py-3 border border-brand-primary/10"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>

              <a
                href="https://facebook.com/fwdpro"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-start gap-3 rounded-[20px] bg-white text-brand-secondary px-4 py-3 border border-brand-primary/10"
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </a>

              <a
                href="https://x.com/Fwd_pro"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-start gap-3 rounded-[20px] bg-white text-brand-secondary px-4 py-3 border border-brand-primary/10"
              >
                <XIcon className="h-4 w-4" />
                X
              </a>

              <a
                href="https://www.linkedin.com/in/fwd-pro/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-start gap-3 rounded-[20px] bg-white text-brand-secondary px-4 py-3 border border-brand-primary/10"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ConnectModal;
