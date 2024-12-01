/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundBlog = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-gray-900'>
      <h1 className='text-6xl font-bold mb-4'>404</h1>
      <h2 className='text-3xl font-semibold mb-2'>Oops! Blog Not Found</h2>
      <p className='text-lg mb-6'>The blog post you are looking for does not exist.</p>
      <Link to='/' className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300'>
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFoundBlog;
