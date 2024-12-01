/* eslint-disable no-unused-vars */
// SchemaContext.js
import React, { createContext, useContext } from 'react';

const SchemaContext = createContext();

export const SchemaProvider = ({ children }) => {
  const schemaData = {
    homepage: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Home Page',
      'url': 'https://mini-proyek-8.vercel.app/',
      'description': 'Welcome to the home page of Our Website.',
    },
    about: {
      '@context': 'https://schema.org',
      '@type': 'About',
      'name': 'About Us',
      'url': 'https://mini-proyek-8.vercel.app/about',
      'description': 'Learn more about Me.',
    },
    newsletter: {
      '@context': 'https://schema.org',
      '@type': 'NewsLetterPage',
      'name': 'Newsletter',
      'url': 'https://mini-proyek-8.vercel.app/newsletter',
      'description': 'Get in touch with Your Website.',
    },
    blog: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      'name': 'All Blog',
      'url': 'https://mini-proyek-8.vercel.app/blog',
      'description': 'Read our latest blog posts on industry insights and news.',
    },
  };

  return <SchemaContext.Provider value={schemaData}>{children}</SchemaContext.Provider>;
};

export const useSchema = () => useContext(SchemaContext);
