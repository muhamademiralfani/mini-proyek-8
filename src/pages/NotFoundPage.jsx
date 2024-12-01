import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

const NotFoundPage = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode); // Get dark mode state

  return (
    <div className={`flex flex-col items-center justify-center h-screen ${isDarkMode ? 'bg-[#090D1F] text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className='text-5xl font-bold mb-4'>404 - Page Not Found</h1>
      <p className='text-xl mb-6'>Sorry, the page you are looking for does not exist.</p>
      <Link to='/' className='px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition duration-300'>Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
