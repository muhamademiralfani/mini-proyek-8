/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import RecentBlog from '../../components/RecentBlog'; // Ganti dengan path yang sesuai
import blogReducer from '../../redux/async/blogSlice'; // Ganti dengan path yang sesuai

// Membuat store untuk Redux
const createStore = (initialState) => {
  return configureStore({
    reducer: {
      blog: blogReducer,
    },
    preloadedState: initialState,
  });
};

describe('RecentBlog Component', () => {
  test('renders loading state', () => {
    const store = createStore({ blog: { recentBlog: [], loading: true, error: null, isSuccess: false } });

    render(
      <Provider store={store}>
        <RecentBlog />
      </Provider>
    );

    // Memastikan LoadingPage dirender saat loading
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders error message', () => {
    const store = createStore({ blog: { recentBlog: [], loading: false, error: 'Failed to fetch', isSuccess: false } });

    render(
      <Provider store={store}>
        <RecentBlog />
      </Provider>
    );

    // Memastikan pesan error dirender
    expect(screen.getByText(/error: failed to fetch/i)).toBeInTheDocument();
  });

  test('renders recent blog posts', () => {
    const mockRecentBlogs = [
      {
        key: '1',
        thumb: 'image1.jpg',
        author: 'Author 1',
        time: '2 mins ago',
        title: 'Recent Blog Post 1',
        desc: 'Description for recent blog post 1',
        tag: 'Games',
      },
      {
        key: '2',
        thumb: 'image2.jpg',
        author: 'Author 2',
        time: '5 mins ago',
        title: 'Recent Blog Post 2',
        desc: 'Description for recent blog post 2',
        tag: 'Game News',
      },
      {
        key: '3',
        thumb: 'image3.jpg',
        author: 'Author 3',
        time: '10 mins ago',
        title: 'Recent Blog Post 3',
        desc: 'Description for recent blog post 3',
        tag: 'Games',
      },
    ];

    const store = createStore({ blog: { recentBlog: mockRecentBlogs, loading: false, error: null, isSuccess: true } });

    render(
      <Provider store={store}>
        <RecentBlog />
      </Provider>
    );

    // Memastikan judul dan konten blog dirender
    expect(screen.getByText(/recent blog posts/i)).toBeInTheDocument();
    expect(screen.getByText(/recent blog post 1/i)).toBeInTheDocument();
    expect(screen.getByText(/recent blog post 2/i)).toBeInTheDocument();
    expect(screen.getByText(/recent blog post 3/i)).toBeInTheDocument();
  });

  test('renders blog posts with correct links', () => {
    const mockRecentBlogs = [
      {
        key: '1',
        thumb: 'image1.jpg',
        author: 'Author 1',
        time: '2 mins ago',
        title: 'Recent Blog Post 1',
        desc: 'Description for recent blog post 1',
        tag: 'Games',
      },
    ];

    const store = createStore({ blog: { recentBlog: mockRecentBlogs, loading: false, error: null, isSuccess: true } });

    render(
      <Provider store={store}>
        <RecentBlog />
      </Provider>
    );

    // Memastikan tautan mengarah ke URL yang benar
    const linkElement = screen.getByText(/recent blog post 1/i).closest('a');
    expect(linkElement).toHaveAttribute('href', '/blog/1');
  });
});
