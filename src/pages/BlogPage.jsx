import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import RecentBlog from '../components/RecentBlog';
import AllBlogList from '../components/AllBlogList';
import { useSelector } from 'react-redux';
import { useSchema } from '../context/SchemaContext';
import { Helmet } from 'react-helmet';

const BlogPage = () => {
  const schema = useSchema();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div className={`container mx-auto max-w-screen-xl py-5 px-2 ${isDarkMode ? 'bg-[#090D1F] text-white' : 'bg-white text-black'}`}>
      <Helmet>
        <title>Blog Page - My Blog List</title>
        <meta name='description' content='Explore our range of services tailored to your needs.' />
        <script type='application/ld+json'>{JSON.stringify(schema.blog)}</script>
      </Helmet>
      <HeaderComponent>the blog</HeaderComponent>
      <RecentBlog />
      <AllBlogList />
    </div>
  );
};

export default BlogPage;
