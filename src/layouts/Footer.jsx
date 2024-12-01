/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

const Footer = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode); // Get dark mode state

  return (
    <footer className={`py-4 px-2 ${isDarkMode ? 'bg-dark text-white' : 'bg-white text-dark'} min-h-[60px]`}>
      <div className='container mx-auto max-w-screen-xl text-center md:text-left'>
        <div className='flex flex-col md:flex-row gap-x-4 gap-y-2 md:gap-y-0 font-normal text-xl'>
          <ul className='flex justify-center items-center gap-x-4'>
            <li>© 2024</li>
            <li>
              <a href='' target='_blank' rel='noopener noreferrer'>
                Twitter
              </a>
            </li>
            <li>
              <a href='' target='_blank' rel='noopener noreferrer'>
                LinkedIn
              </a>
            </li>
          </ul>
          <ul className='flex justify-center items-center gap-x-4'>
            <li>
              <a href='' target='_blank' rel='noopener noreferrer'>
                Email
              </a>
            </li>
            <li>
              <a href='' target='_blank' rel='noopener noreferrer'>
                RSS Feed
              </a>
            </li>
            <li>
              <a href='' target='_blank' rel='noopener noreferrer'>
                Add to Feedly
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
