/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscribe } from '../redux/async/blogSlice';

const NewsLetterComponent = () => {
  const [email, setEmail] = useState('');
  const { subscribed } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(subscribe(email));
    setEmail('');
  };

  return (
    <div className='flex flex-col gap-y-4 justify-center items-center mt-20 mb-20 text-center'>
      <span className='text-purple-600 text-base'>Newsletters</span>
      <h1 className='lg:text-5xl md:text-3xl text-2xl font-semibold '>Stories and interviews</h1>
      <p className='text-[#667085] lg:text-xl md:text-base text-sm lg:leading-10 md:leading-6 leading-6'>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
      <form onSubmit={handleSubmit} className='flex flex-col   justify-center items-center'>
        <div className=' flex flex-col '>
          <div className='flex gap-x-4'>
            <input
              cy-data='newsletter-input'
              className='py-3 px-3 lg:h-[48px] lg:w-[360px] md:h-[40px] md:w-[300px] h-[35px] w-[200px] border text-gray-500 border-[#D0D5DD] rounded-md focus:outline-[#7F56D9]'
              type='text'
              name='email'
              value={email}
              placeholder='Email'
              onChange={onChange}
            />
            <button cy-data='newsletter-button' type='submit' className='l:py-3 lg:px-6 md:py-2 md:px-4 py-1 px-2 text-sm lg:text-xl md:text-sm  bg-[#7F56D9] text-white rounded-md'>
              Subscribe
            </button>
          </div>
          {subscribed === true ? <p className='text-[#7F56D9] text-start mt-1 text-sm'>Subscribed successfully</p> : ''}
        </div>

        <p className='text-[#667085] text-sm  w-full text-start mt-2'>
          We care about your data in our <span className='underline'>privacy policy</span>
        </p>
      </form>
    </div>
  );
};

export default NewsLetterComponent;
