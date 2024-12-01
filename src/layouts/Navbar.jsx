import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex justify-between items-center container mx-auto max-w-screen-xl py-5 px-2'>
      <Link to='/' className='font-semibold text-lg cursor-pointer'>
        LumosBlog
      </Link>
      {/* Desktop Menu */}
      <div className='hidden md:flex'>
        <ul className='flex gap-5 font-normal text-xl text-center items-center'>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/newsletter'>Newsletter</Link>
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </div>

      {/* Hamburger Menu */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='focus:outline-none'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='fixed inset-0 lg:hidden bg-white z-50 flex flex-col items-center justify-center transition-transform transform translate-y-0'>
          <ul className='flex flex-col  gap-5 font-normal  justify-center items-center text-xl text-center w-full'>
            <li className='mb-12'>
              <Link to={'/'}>LumosBlog</Link>
            </li>
            <li>
              <Link to='/blog' onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to='/newsletter' onClick={toggleMenu}>
                Newsletter
              </Link>
            </li>
            <li>
              <DarkModeToggle />
            </li>
          </ul>
          <button onClick={toggleMenu} className='absolute bottom-5'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
