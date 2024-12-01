/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <footer className='py-4  px-2'>
      {' '}
      {/* Added background and padding */}
      <div className='container mx-auto max-w-screen-xl text-center md:text-left'>
        {' '}
        {/* Centered on smaller screens, left-aligned on larger */}
        <ul className='flex flex-col md:flex-row  gap-x-4 gap-y-2 md:gap-y-0 font-normal text-xl'>
          {' '}
          {/* Stacked on smaller screens, horizontal on larger */}
          <div className='flex justify-center items-center gap-x-4'>
            <li>© 2024</li>
            <li>
              <a href='' target='_blank' rel='noopener noreferrer'>
                {' '}
                {/* Added rel="noopener noreferrer" for security */}
                Twitter
              </a>
            </li>
            <li>
              <a href='' target='_blank' rel='noopener noreferrer'>
                LinkedIn
              </a>
            </li>
          </div>
          <div className='flex justify-center items-center gap-x-4'>
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
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
