import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-fuchsia-600 shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] px-6 py-3",
    outline: "bg-transparent border border-white/20 text-white hover:border-brand-primary hover:text-brand-primary px-6 py-3",
    ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
