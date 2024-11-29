/* eslint-disable no-unused-vars */
import React from 'react';
import NewsLetterComponent from '../components/NewsLetterComponent';

const BlogDetail = () => {
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
  ];
  return (
    <div className='container mx-auto max-w-screen-xl py-5 px-2 '>
      <div className='grid grid-cols-4 gap-x-8'>
        <div className='col-span-1 flex flex-col  gap-y-8'>
          {posts.map((post) => (
            <div key={post.id} className='p-4 md:p-2 lg:p-0'>
              <img src={post.image} alt={post.title} className='w-full lg:h-56 md:h-56 h-60 object-cover' />
              <div className='flex flex-col gap-y-4'>
                <div className='flex items-center text-sm text-purple-600 mt-6 '>
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
        <div className='col-span-3 '>
          <span className=' text-sm text-purple-600 mt-6 font-semibold '>1 Jan 2023</span>
          <h1 className='text-4xl font-semibold my-8'>Grid system for better Design User Interface</h1>
          <img src='https://images.unsplash.com/photo-1633624875862-2a3c50468718?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
          <p className='my-8 text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nostrum? A nemo, eaque voluptates corrupti repellendus totam possimus laborum aperiam? Ipsum quaerat, sunt perspiciatis quibusdam quae libero placeat minima
            voluptatum? Repellat officiis dolorum et quidem exercitationem quaerat adipisci ex quo nisi incidunt nam sint quos similique natus fuga eaque inventore maxime placeat, atque obcaecati veniam molestiae magnam ea? Perferendis,
            mollitia. Nisi, quam beatae quas atque at delectus enim soluta sequi ipsam repellat? In rem quidem, ad autem nesciunt dolores amet architecto ipsa eius maxime quos libero praesentium. Magni, nisi illum?
            <br />
            Eum illo iste facere asperiores veritatis, libero consequatur eius atque numquam explicabo expedita perferendis fugiat commodi, repellendus, inventore doloribus. Nisi reprehenderit animi tenetur eveniet tempora explicabo
            voluptatem enim iste ut? Ipsa delectus, ipsam tenetur accusantium corporis velit ut accusamus iusto ea explicabo necessitatibus, veniam provident repudiandae perspiciatis libero ad saepe ex soluta quibusdam distinctio tempora
            incidunt, iure temporibus odio. Odio! Temporibus exercitationem necessitatibus, assumenda suscipit sed error aut quasi nam iste dolore fugiat placeat recusandae nesciunt nihil sit eligendi incidunt nulla ipsum delectus ex. Quod
            doloremque atque consequuntur impedit consectetur. Voluptate similique asperiores ratione, totam ea vero eaque error tenetur laboriosam in fuga quaerat eligendi magnam deleniti ducimus voluptas.
            <br />
            Quisquam reprehenderit magnam totam laborum minima corporis est suscipit pariatur sequi. Dolore necessitatibus, consequatur ab, nam ut optio impedit, expedita facere ea cum unde saepe a repudiandae numquam perferendis!
            Perspiciatis quia, recusandae maiores impedit repellendus ea nostrum eius eligendi tempora saepe. Nobis, cupiditate beatae. Eaque ex officia in laudantium dolorum nulla incidunt optio odio, ullam eum aspernatur. Nemo beatae unde
            fugiat sed quia qui, temporibus expedita, molestiae ex iure, est officiis! Tempore incidunt voluptatem atque recusandae? Delectus sapiente porro cupiditate dolor accusamus illo, itaque natus temporibus repellendus esse quisquam
            nihil aliquid. Illo, voluptatum necessitatibus dolorem voluptatem consectetur accusantium deserunt natus ad!
          </p>
          <NewsLetterComponent />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
