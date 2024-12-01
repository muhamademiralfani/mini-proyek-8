/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogDetail } from '../redux/async/blogSlice';
import parse from 'html-react-parser';
import LoadingPage from '../pages/LoadingPage';

const BlogDetailComponent = () => {
  const { id } = useParams();
  const originalId = decodeURIComponent(id);
  const [blogDetail, setBlogDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { blog, error } = useSelector((state) => state.blog);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode); // Get dark mode state

  // Fetch blog details when the component mounts or when the id changes
  useEffect(() => {
    if (!blog || blogDetail.title !== blog.title) {
      dispatch(fetchBlogDetail(originalId));
      setBlogDetail(blog);
      setLoading(true);
    }
  }, [dispatch, originalId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog || Object.keys(blog).length === 0) {
    return <div>Blog not found</div>;
  }
  

  const options = {
    replace: (domNode) => {
      if (domNode.name === 'iframe') {
        return (
          <div className='relative overflow-hidden pb-[56.25%] h-0 mb-4'>
            <iframe className='absolute top-0 left-0 w-full h-full border-0' src={domNode.attribs.src} title='Embedded content' allowFullScreen />
          </div>
        );
      }
      if (domNode.name === 'p') {
        // Replace newlines with <span> for spacing
        const modifiedText = domNode.children[0].data.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < domNode.children[0].data.split('\n').length - 1 && <span className='block mb-1'></span>} {/* Add spacing between lines */}
          </span>
        ));

        return <p className={`mb-1 mt-1 leading-relaxed ${isDarkMode ? 'text-[#C0C5D0]' : 'text-gray-700'}`}>{modifiedText}</p>;
      }
    },
  };

  return (
    <div className={`px-4 md:px-8 lg:px-16 ${isDarkMode ? 'bg-[#090D1F] text-white' : 'bg-white text-black'}`}>
      <span className={`text-sm text-purple-600 font-semibold ${isDarkMode ? 'text-[#C0C5D0]' : 'text-purple-600'}`}>{blog.date}</span>
      <h1 className={`text-3xl md:text-4xl font-semibold my-4 md:my-8 ${isDarkMode ? 'text-[#C0C5D0]' : 'text-black'}`}>{blog.title}</h1>
      <div className={`flex flex-col gap-y-1 prose lg:prose-xl ${isDarkMode ? 'prose-invert' : ''}`}>{parse(blog.content, options)}</div>
    </div>
  );
};

export default BlogDetailComponent;
