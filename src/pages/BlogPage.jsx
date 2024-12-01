// BlogPage.jsx
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import RecentBlog from '../components/RecentBlog';
import AllBlogList from '../components/AllBlogList';
import { useSelector } from 'react-redux';

const BlogPage = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  
  return (
    <div className={`container mx-auto max-w-screen-xl py-5 px-2 ${isDarkMode ? 'bg-[#090D1F] text-white' : 'bg-white text-black'}`}>
      <HeaderComponent>the blog</HeaderComponent>
      <RecentBlog />
      <AllBlogList />
    </div>
  );
};

export default BlogPage;
