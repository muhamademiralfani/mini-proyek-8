/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchBlogs } from '../redux/async/blogSlice';
import { useDispatch } from 'react-redux';

const Pagination = ({ currentPage, totalPage, handleNextPageChange, handleBackPageChange }) => {
  return (
    <div className='flex justify-center mt-4 text-2xl'>
      <button onClick={handleBackPageChange}  className={`px-4 py-2 bg-white rounded-md mr-2 hover:bg-gray-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={currentPage === 1}>
        Previous
      </button>
      <div className='px-4 py-2 '>{currentPage}</div>
      <button onClick={handleNextPageChange} className={`px-4 py-2 bg-white rounded-md ml-2 hover:bg-gray-300 ${currentPage === totalPage ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={currentPage === 10}>
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
