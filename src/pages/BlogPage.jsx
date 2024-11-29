/* eslint-disable no-unused-vars */
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import RecentBlog from '../components/RecentBlog';
import BlogList from '../components/BlogList';

const BlogPage = () => {
  return (
    <div className='container mx-auto max-w-screen-xl py-5 px-2'>
      <HeaderComponent />
      <RecentBlog />
      <BlogList />
    </div>
  );
};

export default BlogPage;
