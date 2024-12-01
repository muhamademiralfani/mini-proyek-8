// NewsLetterPage.jsx
import React from 'react';
import NewsLetterComponent from '../components/NewsLetterComponent';
import AllBlogList from '../components/AllBlogList';
import { useSelector } from 'react-redux';

const NewsLetterPage = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className={`container mx-auto max-w-screen-xl ${isDarkMode ? 'bg-[#090D1F] text-white' : 'bg-white text-black'}`}>
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
