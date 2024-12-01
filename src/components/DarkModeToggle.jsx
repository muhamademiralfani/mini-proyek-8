/* eslint-disable react/no-unknown-property */
// components/DarkModeToggle.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/slice/darkModeSlice'; // Import the toggle action

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode); // Get the dark mode state from Redux

  const handleClick = () => {
    dispatch(toggleDarkMode()); // Dispatch the toggle action
  };

  return (
    <button cy-data="dark-mode-toggle"
      onClick={handleClick}
      className={`flex justify-between items-center rounded-3xl px-4 py-1 transition-all duration-300 ease-in-out 
        ${isDarkMode ? 'bg-white text-black' : 'bg-[#090D1F] text-white'}`}
    >
      {isDarkMode ? (
        <>
          <i className='bi bi-moon text-xl font-sm mr-2 text-[#090D1F]'></i>
          <div className='w-6 h-6 rounded-full bg-[#090D1F] transition-all duration-300 ease-in-out'></div>
        </>
      ) : (
        <>
          <div className='w-6 h-6 rounded-full bg-white mr-2 transition-all duration-300 ease-in-out'></div>
          <i className='bi bi-brightness-low text-xl font-sm text-white'></i>
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;
