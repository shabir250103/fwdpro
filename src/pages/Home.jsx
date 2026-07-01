import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Stats from '../components/sections/Stats';
import Portfolio from '../components/sections/Portfolio';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
