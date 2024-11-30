/* eslint-disable no-unused-vars */
import React from 'react';

const NewsLetterComponent = () => {
  return (
    <div className='flex flex-col gap-y-4 justify-center items-center mt-80 mb-20 text-center'>
      <span className='text-purple-600 text-base'>Newsletters</span>
      <h1 className='text-5xl font-semibold'>Stories and interviews</h1>
      <p className='text-[#667085] text-xl leading-10'>
        Subscribe to learn about new product features, the latest in technology, <br /> solutions, and updates.
      </p>
      <form className='flex flex-col   justify-center items-center'>
        <div className=' flex gap-x-4'>
          <input className='py-3 px-3 h-[48px] w-[360px] border border-[#D0D5DD] rounded-md focus:outline-[#7F56D9]' type='text' placeholder='Email' />
          <button type='submit' className='py-3 px-6 bg-[#7F56D9] text-white rounded-md'>
            Subscribe
          </button>
        </div>
        <p className='text-[#667085] text-sm  w-full text-start mt-2'>We care about your data in our <span className='underline'>privacy policy</span></p>
      </form>
    </div>
  );
};

export default NewsLetterComponent;
