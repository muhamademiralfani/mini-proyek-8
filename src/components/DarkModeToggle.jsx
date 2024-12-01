/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [darkmode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkmode);
  };

  return (
    <button onClick={handleClick}  className={`text-2xl ${!darkmode ? 'bg-[#090D1F] text-white' : 'bg-white text-black'}  justify-between items-center rounded-3xl px-4 py-1  md:flex flex`}>
      {darkmode ? (
        <>
          <i className='bi bi-moon text-xl font-sm mr-2 text-[#090D1F]'></i>
          <div className='w-6 h-6 rounded-full bg-[#090D1F]'></div>
        </>
      ) : (
        <>
          <div className='w-6 h-6 rounded-full bg-white mr-2'></div>
          <i className='bi bi-brightness-low text-xl font-sm text-white'></i>
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;
