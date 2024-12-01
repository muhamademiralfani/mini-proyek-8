/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/async/blogSlice';
import BlogListComponent from './BlogListComponent';
import LoadingPage from '../pages/LoadingPage';
import Pagination from './Pagination';

const AllBlogList = () => {
  const dispatch = useDispatch();
  const { currentPage, loading, error, totalPage } = useSelector((state) => state.blog);

  const handleNextPageChange = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const handleBackPageChange = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  if (error === !null) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <main className='mt-8'>
        <h2 className='text-2xl font-semibold mb-6'>All Blog Post</h2>

        {loading && <LoadingPage />}
        <div className={`grid grid-cols-1 md:grid-cols-2  'lg:grid-cols-3' gap-8`}>
          <BlogListComponent />
        </div>
        <div className='flex flex-col justify-center mt-4'>
          <Pagination currentPage={currentPage} handleBackPageChange={handleBackPageChange} handleNextPageChange={handleNextPageChange} totalPage={totalPage} />
        </div>
      </main>
    </>
  );
};

export default AllBlogList;
