/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { fetchRecentBlog } from '../redux/async/blogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RecentBlog = () => {
  const { recentBlog, loading, error, isSuccess } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecentBlog());
  }, [dispatch]);

  useEffect(() => {
    if (!isSuccess && !loading) {
      dispatch(fetchRecentBlog());
    }
  }, [dispatch, isSuccess, loading]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className='mt-8 mb-8'>
      <h2 className='text-2xl font-semibold mb-6'>Recent Blog Posts</h2>

      <div className='grid grid-cols-1 grid-rows-2 lg:grid-cols-2 gap-y-8 gap-x-0 lg:gap-x-8 justify-center items-center'>
        {/* Featured Post */}
        {recentBlog.slice(0, 1).map((post) => (
          <Link to={`/blog/${encodeURIComponent(post.key)}`} key={post.key} cy-data='blog-detail' className='col-span-1 md:col-span-2 lg:col-span-1 row-span-1 md:row-span-2'>
            <article className='group p-4 md:p-2 lg:p-0 overflow-hidden'>
              <img src={post.thumb} alt='Office workspace' className='w-full h-[250px] object-cover ' />
              <div className='md:p-2 lg:p-0 mt-4 md:mt-4'>
                <div className='flex items-center text-sm text-purple-600 mb-2'>
                  <span>{post.author}</span>
                  <span className='mx-2'>•</span>
                  <span>{post.time}</span>
                </div>
                <h3 className='text-xl font-semibold mb-2 group-hover:text-purple-600'>{post.title}</h3>
                <p className='text-gray-600 mb-4 line-clamp-2'>{post.desc}</p>
                <div className='flex flex-wrap gap-2'>
                  <span className={`px-3 py-1 rounded-full text-sm ${post.tag === 'Games' ? 'text-purple-700 bg-purple-100' : post.tag === 'Game News' ? 'text-blue-700 bg-blue-100' : 'text-pink-700 bg-pink-100'}`}>{post.tag}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
        {/* Other Posts */}
        {recentBlog.slice(1, 3).map((post) => (
          <Link key={post.key} to={`/blog/${encodeURIComponent(post.key)}`}>
            <article className='lg:col-span-1 col-span-2 overflow-hidden row-span-2 group p-4 md:p-2 lg:p-0'>
              <div className='lg:flex gap-4 md:flex'>
                <div className='flex-shrink-0 mb-4 lg:mb-0'>
                  <img src={post.thumb} alt={post.title} className='w-full lg:w-[290px] md:w-[250px] h-[200px] object-cover ' />
                </div>
                <div className='flex-1 lg:px-4 md:p-0 p-0'>
                  <div className='flex items-center text-sm text-purple-600 mb-2'>
                    <span>{post.author}</span>
                    <span className='mx-2'>•</span>
                    <span>{post.time}</span>
                  </div>
                  <h3 className='text-lg font-semibold mb-2 group-hover:text-purple-600 line-clamp-2'>{post.title}</h3>
                  <p className='text-gray-600 mb-4 line-clamp-2'>{post.desc}</p>
                  <div className='flex flex-wrap gap-2'>
                    <span className={`px-3 py-1 rounded-full text-sm ${post.tag === 'Games' ? 'text-purple-700 bg-purple-100' : post.tag === 'Game News' ? 'text-blue-700 bg-blue-100' : 'text-pink-700 bg-pink-100'}`}>{post.tag}</span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
      {recentBlog.slice(3, 4).map((post) => (
        <Link key={post.key} to={`/blog/${encodeURIComponent(post.key)}`}>
          <article className=' mt-10 group p-4 md:p-2 lg:p-0'>
            <div className='lg:flex-row md:flex-row gap-4 md:flex sm:flex-col'>
              <div className='flex-shrink-0 mb-4 lg:mb-0'>
                <img src={post.thumb} alt={post.title} className='w-full lg:w-full h-[300px] object-cover ' />
              </div>
              <div className='flex-1 lg:px-4 md:p-0 p-0'>
                <div className='flex items-center text-sm text-purple-600 mb-2'>
                  <span>{post.author}</span>
                  <span className='mx-2'>•</span>
                  <span>{post.time}</span>
                </div>
                <h3 className='text-lg font-semibold mb-2 group-hover:text-purple-600'>{post.title}</h3>
                <p className='text-gray-600 mb-4 line-clamp-2 lg:line-clamp-6 md:line-clamp-2'>{post.desc}</p>
                <div className='flex flex-wrap gap-2'>
                  <span className={`px-3 py-1 rounded-full text-sm ${post.tag === 'Games' ? 'text-purple-700 bg-purple-100' : post.tag === 'Game News' ? 'text-blue-700 bg-blue-100' : 'text-pink-700 bg-pink-100'}`}>{post.tag}</span>
                </div>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </main>
  );
};

export default RecentBlog;
