/* eslint-disable no-unused-vars */
import React from 'react';
import NewsLetterComponent from '../components/NewsLetterComponent';
import BlogDetailComponent from '../components/BlogDetailComponent';
import BlogListComponent from '../components/BlogListComponent';

const BlogDetail = () => {
  return (
    <div className='container mx-auto max-w-screen-xl py-5 px-2'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-x-8'>
        {/* Blog List on top for mobile */}
        <div className='col-span-1 md:col-span-1 flex flex-col gap-y-8 mt-16 md:mt-0 order-2 lg:mt-5 md:order-1'>
          <div className='overflow-x-auto'>
            <BlogListComponent />
          </div>
        </div>
        {/* Blog Detail and Newsletter on top for mobile */}
        <div className='col-span-1 md:col-span-3 order-1 md:order-2'>
          <BlogDetailComponent />
        </div>
      </div>
      <NewsLetterComponent />
    </div>
  );
};

export default BlogDetail;
