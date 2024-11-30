/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/async/blogSlice';
import BlogListComponent from './BlogListComponent';
import Pagination from './Pagination';

const AllBlogList = () => {
  const dispatch = useDispatch();
  const { currentPage, loading } = useSelector((state) => state.blog);

  const handleNextPageChange = () => {
    dispatch(setCurrentPage(currentPage + 1)); // Set currentPage to the next page
  };

  const handleBackPageChange = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1)); // Set currentPage to the previous page
    }
  };

  return (
    <main className='mt-16'>
      <h2 className='text-2xl font-semibold mb-6'>All Blog Post</h2>
      <div className={`grid grid-cols-1 md:grid-cols-2 ${loading ? 'lg:grid-cols-1' : 'lg:grid-cols-3'} gap-8`}>
        <BlogListComponent />
      </div>
      <div className='flex flex-col justify-center mt-4'>
        <Pagination currentPage={currentPage} handleBackPageChange={handleBackPageChange} handleNextPageChange={handleNextPageChange} />
      </div>
    </main>
  );
};

export default AllBlogList;
