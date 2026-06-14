import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`glass-card p-6 md:p-8 transition-all duration-300 hover:border-brand-primary/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
