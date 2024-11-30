/* eslint-disable no-unused-vars */
import React from 'react';
import NewsLetterComponent from '../components/NewsLetterComponent';
import AllBlogList from '../components/AllBlogList';

const NewsLetterPage = () => {
  return (
    <div className='container mx-auto max-w-screen-xl '>
      <NewsLetterComponent />
      <AllBlogList />
    </div>
  )
};

export default NewsLetterPage;
