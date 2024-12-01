// BlogDetail.jsx
import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import LoadingPage from '../pages/LoadingPage';

// Lazy load the components
const NewsLetterComponent = lazy(() => import('../components/NewsLetterComponent'));
const BlogDetailComponent = lazy(() => import('../components/BlogDetailComponent'));
const BlogListComponent = lazy(() => import('../components/BlogListComponent'));

const BlogDetail = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <>
      <div className={`container mx-auto max-w-screen-xl py-5 px-2 ${isDarkMode ? 'bg-[#090D1F] text-white' : 'bg-white text-black'}`}>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-x-8'>
          <div className='col-span-1 md:col-span-1 flex flex-col gap-y-8 mt-16 md:mt-0 order-2 lg:mt-5 md:order-1'>
            <div className='overflow-x-auto'>
              <Suspense fallback={<div>Loading Blog List...</div>}>
                <BlogListComponent />
              </Suspense>
            </div>
          </div>
          <div className='col-span-1 md:col-span-3 order-1 md:order-2'>
            <Suspense fallback={<div>Loading Blog Details...</div>}>
              <BlogDetailComponent />
            </Suspense>
          </div>
        </div>
        <Suspense fallback={<div>Loading Newsletter...</div>}>
          <NewsLetterComponent />
        </Suspense>
      </div>
    </>
  );
};

export default BlogDetail;
