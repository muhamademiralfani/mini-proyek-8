/* eslint-disable no-unused-vars */
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import HeroImage from '../components/HeroImage';
import { useSelector } from 'react-redux';
import AboutMeComponent from '../components/AboutMeComponent';
import { useSchema } from '../context/SchemaContext';
import { Helmet } from 'react-helmet';

const About = () => {
  const schema = useSchema();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div className={`container mx-auto max-w-screen-xl py-5 px-2 ${isDarkMode ? 'bg-[#090D1F] text-white' : 'bg-white text-black'}`}>
      <Helmet>
        <title>About Page - My Blog List</title>
        <meta name='description' content='Learn More About Me.' />
        <script type='application/ld+json'>{JSON.stringify(schema.about)}</script>
      </Helmet>

      <HeaderComponent>Emir</HeaderComponent>
      <HeroImage />
      <AboutMeComponent />
    </div>
  );
};

export default About;
