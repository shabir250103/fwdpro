import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-black mb-6">
              Let's talk about your <br /> next project.
            </h2>
            <p className="text-gray-600 mb-10 max-w-md">
              Whether you have a clear vision or just a rough idea, we're here to help you bring it to life. Reach out today.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-black font-bold mb-1">Email Us</h4>
                  <a href="mailto:hello@fwdpro.com" className="text-gray-600 hover:text-brand-primary transition-colors">hello@fwdpro.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-black font-bold mb-1">Call Us</h4>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-brand-primary transition-colors">+1 (555) 123-4567</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-fuchsia-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-fuchsia-600" />
                </div>
                <div>
                  <h4 className="text-black font-bold mb-1">Visit Us</h4>
                  <p className="text-gray-600">123 Innovation Drive, Tech District<br/>San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-[50px] rounded-full" />
            
            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 text-black placeholder:text-gray-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 text-black placeholder:text-gray-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 text-black placeholder:text-gray-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 text-black placeholder:text-gray-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <Button type="submit" className="w-full group mt-4">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
