/* eslint-disable no-unused-vars */
import React from 'react';
import NewsLetterComponent from '../components/NewsLetterComponent';
import BlogDetailComponent from '../components/BlogDetailComponent';
import BlogListComponent from '../components/BlogListComponent';

const BlogDetail = () => {
  return (
    <div className='container mx-auto max-w-screen-xl py-5 px-2 '>
      <div className='grid grid-cols-4 gap-x-8'>
        <div className='col-span-1 flex flex-col gap-y-8 mt-16'>
          <BlogListComponent />
        </div>
        <div className='col-span-3 '>
          <BlogDetailComponent />
          <NewsLetterComponent />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
