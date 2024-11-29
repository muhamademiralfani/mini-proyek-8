/* eslint-disable no-unused-vars */
import React from 'react';

const BlogList = () => {
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
    <main className='mt-16'>
      <h2 className='text-2xl font-semibold mb-6'>Recent Blog Posts</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((post) => (
          <div key={post.id} className='p-4 md:p-2 lg:p-0'>
            <img src={post.image} alt={post.title} className='w-full lg:h-56 md:h-56 h-60 object-cover' />
            <div className='flex flex-col gap-y-4'>
              <div className='flex items-center text-sm text-purple-600 mt-6 '>
                <span>{post.author}</span>
                <span className='mx-2'>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className='text-xl font-semibold '>{post.title}</h3>
              <p className='text-sm text-gray-500 '>{post.description}</p>
              <div className='flex flex-wrap gap-2'>
                {post.tags.map((tag, index) => (
                  <span key={index} className={`px-3 py-1 rounded-full text-sm ${tag === 'Design' ? 'text-purple-700 bg-purple-100' : tag === 'Research' ? 'text-blue-700 bg-blue-100' : 'text-pink-700 bg-pink-100'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BlogList;
