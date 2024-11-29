/* eslint-disable no-unused-vars */
import React from 'react';

const RecentBlog = () => {
  const posts = [
    {
      id: 1,
      title: 'UX review presentations',
      author: 'Olivia Rhye',
      date: '1 Jan 2023',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      image: 'https://images.unsplash.com/photo-1633624875862-2a3c50468718?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Design', 'Research', 'Presentation'],
    },
    {
      id: 2,
      title: 'Migrating to Linear 101',
      author: 'Phoenix Baker',
      date: '1 Jan 2023',
      description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...",
      image: 'https://plus.unsplash.com/premium_photo-1731951688289-1de7eb23bdd1?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Design', 'Research'],
    },
    {
      id: 3,
      title: 'Building your API Stack',
      author: 'Lana Steiner',
      date: '1 Jan 2023',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing...',
      image: 'https://images.unsplash.com/photo-1732029062012-9030cfd21549?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Design', 'Research'],
    },
    {
      id: 3,
      title: 'Building your API Jook    ',
      author: 'Lana Steiner',
      date: '1 Jan 2023',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing...',
      image: 'https://images.unsplash.com/photo-1633624875862-2a3c50468718?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Design', 'Research'],
    },
  ];

  return (
    <main className='mt-8'>
      <h2 className='text-2xl font-semibold mb-6 '>Recent Blog Posts</h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-0 lg:gap-x-8 justify-center items-center'>
        {/* Featured Post */}
        <div className='col-span-1 md:col-span-2 lg:col-span-1 row-span-1 md:row-span-2'>
          <article className='group p-4 md:p-2 lg:p-0   overflow-hidden '>
            <img src={posts[0].image} alt='Office workspace' className='w-full h-[300px] object-cover' />
            <div className=' md:p-2 lg:p-0 mt-4 md:mt-4 '>
              <div className='flex items-center text-sm text-purple-600 mb-2'>
                <span>{posts[0].author}</span>
                <span className='mx-2'>•</span>
                <span>{posts[0].date}</span>
              </div>
              <h3 className='text-xl font-semibold mb-2 group-hover:text-purple-600'>{posts[0].title}</h3>
              <p className='text-gray-600 mb-4'>{posts[0].description}</p>
              <div className='flex flex-wrap gap-2'>
                {posts[0].tags.map((tag, index) => (
                  <span key={index} className={`px-3 py-1 rounded-full text-sm ${tag === 'Design' ? 'text-purple-700 bg-purple-100' : tag === 'Research' ? 'text-blue-700 bg-blue-100' : 'text-pink-700 bg-pink-100'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
        {/* Other Posts */}
        {posts.slice(1, 3).map((post) => (
          <>
            <article key={post.id} className='lg:col-span-1 col-span-2 group p-4 md:p-2 lg:p-0   overflow-hidden'>
              <div className='lg:flex gap-4 md:flex '>
                <div className='flex-shrink-0 mb-4 lg:mb-0  lg:px-0 md:px-0'>
                  <img src={post.image} alt={post.title} className=' w-full lg:w-[290px]  md:w-[250px] h-full  lg:h-[220px] md:h-[200px]  object-cover' />
                </div>
                <div className='flex-1 lg:px-4 md:p-0 p-0 '>
                  <div className='flex items-center text-sm text-purple-600 mb-2'>
                    <span>{post.author}</span>
                    <span className='mx-2'>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className='text-lg font-semibold mb-2 group-hover:text-purple-600'>{post.title}</h3>
                  <p className='text-gray-600 mb-4'>{post.description}</p>
                  <div className='flex flex-wrap gap-2'>
                    {post.tags.map((tag, index) => (
                      <span key={index} className={`px-3 py-1 rounded-full text-sm ${tag === 'Design' ? 'text-purple-700 bg-purple-100' : 'text-blue-700 bg-blue-100'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </>
        ))}{' '}
        <article key={posts[3].id} className='lg:col-span-2 col-span-2 group p-4 md:p-2 lg:p-0 '>
          <div className='lg:flex-row gap-4 md:flex sm:flex-col '>
            <div className='flex-shrink-0 mb-4 lg:mb-0  lg:px-0 md:px-0'>
              <img src={posts[3].image} alt={posts[3].title} className=' w-full lg:w-full  h-full  lg:h-[300px] md:h-[200px]  object-cover' />
            </div>
            <div className='flex-1 lg:px-4 md:p-0 p-0 '>
              <div className='flex items-center text-sm text-purple-600 mb-2'>
                <span>{posts[3].author}</span>
                <span className='mx-2'>•</span>
                <span>{posts[3].date}</span>
              </div>
              <h3 className='text-lg font-semibold mb-2 group-hover:text-purple-600'>{posts[3].title}</h3>
              <p className='text-gray-600 mb-4'>{posts[2].description}</p>
              <div className='flex flex-wrap gap-2'>
                {posts[3].tags.map((tag, index) => (
                  <span key={index} className={`px-3 py-1 rounded-full text-sm ${tag === 'Design' ? 'text-purple-700 bg-purple-100' : 'text-blue-700 bg-blue-100'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default RecentBlog;
