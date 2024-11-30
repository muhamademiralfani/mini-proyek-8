/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogDetail } from '../redux/async/blogSlice';
import parse from 'html-react-parser';
import LoadingPage from '../pages/LoadingPage';

const BlogDetailComponent = () => {
  const { id } = useParams();
  const originalId = decodeURIComponent(id);
  
  const dispatch = useDispatch();
  const { blog, loading, error } = useSelector((state) => state.blog);
  console.log(blog);
  

  // Fetch blog details when the component mounts or when the id changes
  useEffect(() => {
    dispatch(fetchBlogDetail(originalId));
  }, [dispatch, originalId]);

  if (loading) {
    return <LoadingPage />;
  }

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

        return <p className='mb-1 mt-1 text-gray-700 leading-relaxed'>{modifiedText}</p>;
      }
    },
  };

  return (
    <>
      <span className='text-sm text-purple-600 font-semibold'>{blog.date}</span>
      <h1 className='text-4xl font-semibold my-8'>{blog.title}</h1>
      <div className='flex flex-col gap-y-1 prose lg:prose-xl'>{parse(blog.content, options)}</div>
    </>
  );
};

export default BlogDetailComponent;
