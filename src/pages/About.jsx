// About.jsx
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import HeroImage from '../components/HeroImage';
import { useSelector } from 'react-redux';
import AboutMeComponent from '../components/AboutMeComponent';

const About = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div className={`container mx-auto max-w-screen-xl py-5 px-2 ${isDarkMode ? 'bg-[#090D1F] text-white' : 'bg-white text-black'}`}>
      <HeaderComponent>Emir</HeaderComponent>
      <HeroImage />
      <AboutMeComponent />
    </div>
  );
};

export default About;
