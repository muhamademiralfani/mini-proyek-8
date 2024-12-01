/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import AllBlogList from '../../components/AllBlogList'; 
import blogReducer from '../../redux/async/blogSlice'; 

// Membuat store untuk Redux
const createStore = (initialState) => {
  return configureStore({
    reducer: {
      blog: blogReducer,
    },
    preloadedState: initialState,
  });
};

describe('AllBlogList Component', () => {
  test('renders loading state', () => {
    const store = createStore({ blog: { currentPage: 1, loading: true, error: null, totalPage: 5 } });

    render(
      <Provider store={store}>
        <AllBlogList />
      </Provider>
    );

    // Memastikan LoadingPage dirender saat loading
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders error message', () => {
    const store = createStore({ blog: { currentPage: 1, loading: false, error: 'Failed to fetch', totalPage: 5 } });

    render(
      <Provider store={store}>
        <AllBlogList />
      </Provider>
    );

    // Memastikan pesan error dirender
    expect(screen.getByText(/error: failed to fetch/i)).toBeInTheDocument();
  });

  test('renders blog list and pagination', () => {
    const store = createStore({ blog: { currentPage: 1, loading: false, error: null, totalPage: 5 } });

    render(
      <Provider store={store}>
        <AllBlogList />
      </Provider>
    );

    // Memastikan judul blog post dirender
    expect(screen.getByText(/all blog post/i)).toBeInTheDocument();

    // Memastikan komponen BlogListComponent dirender
    expect(screen.getByText(/blog list/i)).toBeInTheDocument(); // Ganti dengan teks yang sesuai di BlogListComponent

    // Memastikan pagination dirender
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
  });

  test('handles next page change', () => {
    const store = createStore({ blog: { currentPage: 1, loading: false, error: null, totalPage: 5 } });
    const { dispatch } = store;

    render(
      <Provider store={store}>
        <AllBlogList />
      </Provider>
    );

    // Klik tombol Next
    fireEvent.click(screen.getByRole('button', { name: /next/i }));

    // Memastikan dispatch dipanggil dengan currentPage + 1
    expect(dispatch).toHaveBeenCalledWith({ type: 'blog/setCurrentPage', payload: 2 });
  });

  test('handles back page change', () => {
    const store = createStore({ blog: { currentPage: 2, loading: false, error: null, totalPage: 5 } });
    const { dispatch } = store;

    render(
      <Provider store={store}>
        <AllBlogList />
      </Provider>
    );

    // Klik tombol Previous
    fireEvent.click(screen.getByRole('button', { name: /previous/i }));

    // Memastikan dispatch dipanggil dengan currentPage - 1
    expect(dispatch).toHaveBeenCalledWith({ type: 'blog/setCurrentPage', payload: 1 });
  });
});
