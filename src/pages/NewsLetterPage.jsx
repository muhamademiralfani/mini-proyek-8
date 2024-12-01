/* eslint-disable no-unused-vars */
import React from 'react';
import NewsLetterComponent from '../components/NewsLetterComponent';
import AllBlogList from '../components/AllBlogList';

const NewsLetterPage = () => {
  return (
    <div className='container mx-auto max-w-screen-xl '>
      <div className='flex flex-col gap-y-4 justify-center items-center mt-20 mb-20 text-center'>
        <div>
          <NewsLetterComponent />
        </div>
        <AllBlogList />
      </div>
    </div>
  );
};

export default NewsLetterPage;
