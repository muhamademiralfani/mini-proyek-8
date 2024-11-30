/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs, fetchBlogDetail, setCurrentPage } from '../redux/async/blogSlice';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoadingPage from '../pages/LoadingPage';

const BlogListComponent = () => {
  const dispatch = useDispatch();
  const { blogs, loading, error, isSuccess } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogs()); // Mengambil blog berdasarkan currentPage
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(fetchBlogs()); // Mengambil blog berdasarkan currentPage
    }
  }, [isSuccess, dispatch]);

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen w-full'>
        <LoadingPage />
      </div>
    );
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {loading && <LoadingPage />}{' '}
      {blogs.map((post) => (
        <Link key={post.key} to={`/blog/${encodeURIComponent(post.key)}`} onClick={() => dispatch(fetchBlogDetail(post.key))} className='p-4 md:p-2 lg:p-0'>
          <img src={post.thumb} alt={post.title} className='w-full lg:h-56 md:h-56 h-60 object-cover' />
          <div className='flex flex-col gap-y-4'>
            <div className='flex items-center text-sm text-purple-600 mt-6 '>
              <span>{post.author}</span>
              <span className='mx-2'>•</span>
              <span>{post.time}</span>
            </div>
            <h3 className='text-xl font-semibold line-clamp-2'>{post.title}</h3>
            <p className='text-sm text-gray-500 line-clamp-2'>{post.desc}</p>
            <div className='flex flex-wrap gap-2 '>
              <span className={`px-3 py-1 rounded-full text-sm ${post.tag === 'Games' ? 'text-purple-700 bg-purple-100' : post.tag === 'News' ? 'text-blue-700 bg-blue-100' : 'text-pink-700 bg-pink-100'}`}>{post.tag}</span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

BlogListComponent.propTypes = {
  slice: PropTypes.array,
};

export default BlogListComponent;