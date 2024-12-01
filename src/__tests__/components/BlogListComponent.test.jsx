/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import BlogListComponent from '../../components/BlogListComponent';
import { BrowserRouter } from 'react-router-dom';

// Mock data blog
const mockBlogs = [
  {
    id: 1,
    title: 'Blog Pertama',
    description: 'Deskripsi blog pertama',
    image: 'image1.jpg',
    date: '2024-01-01',
  },
  {
    id: 2,
    title: 'Blog Kedua',
    description: 'Deskripsi blog kedua',
    image: 'image2.jpg',
    date: '2024-01-02',
  },
];

// Setup mock store
const createMockStore = (isDarkMode = false) => {
  return configureStore({
    reducer: {
      darkMode: () => ({ isDarkMode }),
      blogs: () => ({ blogs: mockBlogs }),
    },
  });
};

describe('BlogListComponent', () => {
  const renderBlogList = (isDarkMode = false) => {
    const store = createMockStore(isDarkMode);
    return render(
      <Provider store={store}>
        <BrowserRouter>
          <BlogListComponent />
        </BrowserRouter>
      </Provider>
    );
  };

  test('menampilkan daftar blog dengan benar', () => {
    renderBlogList();
    expect(screen.getByText('Blog Pertama')).toBeInTheDocument();
    expect(screen.getByText('Blog Kedua')).toBeInTheDocument();
  });

  test('menampilkan mode terang dengan benar', () => {
    renderBlogList(false);
    const container = screen.getByTestId('blog-list-container');
    expect(container).toHaveClass('bg-white');
    expect(container).toHaveClass('text-black');
  });

  test('menampilkan mode gelap dengan benar', () => {
    renderBlogList(true);
    const container = screen.getByTestId('blog-list-container');
    expect(container).toHaveClass('bg-[#090D1F]');
    expect(container).toHaveClass('text-white');
  });

  test('menampilkan gambar blog dengan benar', () => {
    renderBlogList();
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mockBlogs.length);
    expect(images[0]).toHaveAttribute('src', 'image1.jpg');
    expect(images[1]).toHaveAttribute('src', 'image2.jpg');
  });

  test('menampilkan tanggal blog dengan format yang benar', () => {
    renderBlogList();
    expect(screen.getByText('01 January 2024')).toBeInTheDocument();
    expect(screen.getByText('02 January 2024')).toBeInTheDocument();
  });

  test('memiliki link navigasi yang benar untuk setiap blog', () => {
    renderBlogList();
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/blog/1');
    expect(links[1]).toHaveAttribute('href', '/blog/2');
  });

  test('menampilkan deskripsi blog dengan benar', () => {
    renderBlogList();
    expect(screen.getByText('Deskripsi blog pertama')).toBeInTheDocument();
    expect(screen.getByText('Deskripsi blog kedua')).toBeInTheDocument();
  });
});
