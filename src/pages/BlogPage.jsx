/* eslint-disable no-unused-vars */
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import RecentBlog from '../components/RecentBlog';
import AllBlogList from '../components/AllBlogList';

const BlogPage = () => {
  return (
    <div className='container mx-auto max-w-screen-xl py-5 px-2'>
      <HeaderComponent>the blog</HeaderComponent>
      <RecentBlog />
      <AllBlogList />
    </div>
  );
};

export default BlogPage;
