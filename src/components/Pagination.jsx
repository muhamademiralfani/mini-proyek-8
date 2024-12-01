/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

const Pagination = ({ currentPage, handleNextPageChange, handleBackPageChange }) => {
  const totalPage = useSelector((state) => state.blog.totalPage); // Mendapatkan total halaman dari Redux
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode); // Mendapatkan state mode gelap dari Redux

  return (
    <div className={`flex justify-center mt-4 text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}>
      <button
        cy-data='pagination-prev-button'
        onClick={handleBackPageChange}
        className={`px-4 py-2 rounded-md mr-2 hover:bg-gray-300 ${isDarkMode ? 'bg-[#090D1F] text-white hover:bg-gray-700' : 'bg-white text-black'}`}
        disabled={currentPage === 1}>
        Previous
      </button>
      <div className='current-page px-4 py-2'>{currentPage}</div>
      <button
        onClick={handleNextPageChange}
        cy-data='pagination-next-button'
        className={`px-4 py-2 rounded-md ml-2 hover:bg-gray-300 ${isDarkMode ? 'bg-[#090D1F] text-white hover:bg-gray-700' : 'bg-white text-black'}`}
        disabled={currentPage === totalPage}>
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handleNextPageChange: PropTypes.func.isRequired,
  handleBackPageChange: PropTypes.func.isRequired,
};

export default Pagination;
