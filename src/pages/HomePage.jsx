/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import HeaderComponent from '../components/HeaderComponent';
import RecentBlog from '../components/RecentBlog';
import { Helmet } from 'react-helmet';
import { useSchema } from '../context/SchemaContext';

const HomePage = () => {
  const schema = useSchema();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div className={`container mx-auto max-w-screen-xl py-5 px-2 ${isDarkMode ? 'bg-[#090D1F] text-white' : 'bg-white text-black'}`}>
      <Helmet>
        <title>Home Page - My Blog List</title>
        <meta name='description' content='Welcome to My Blog List. Explore our range of services tailored to your needs.' />
        <script type='application/ld+json'>{JSON.stringify(schema.homepage)}</script>
      </Helmet>
      <HeaderComponent>the blog</HeaderComponent>
      <RecentBlog />
    </div>
  );
};

export default HomePage;
