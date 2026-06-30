import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Stats from '../components/sections/Stats';
import AgencyShowcase from '../components/sections/AgencyShowcase';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <AgencyShowcase />
    </>
  );
};

export default HomePage;
