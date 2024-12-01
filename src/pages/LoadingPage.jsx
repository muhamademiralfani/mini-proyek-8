// LoadingPage.jsx
import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

const LoadingPage = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode); // Get dark mode state

  return (
    <div className={`flex items-center justify-center h-screen ${isDarkMode ? 'bg-[#090D1F]' : 'bg-white'}`}>
      <div className={`animate-spin rounded-full h-10 w-10 border-8 ${isDarkMode ? 'border-[#C0C5D0] border-t-transparent' : 'border-black border-t-transparent'}`}></div>
    </div>
  );
};

export default LoadingPage;
