/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Footer from '../../layouts/Footer'; // Ganti dengan path yang sesuai
import darkModeReducer from '../../redux/slice/darkModeSlice'; // Ganti dengan path yang sesuai

// Membuat store untuk Redux
const createStore = (initialState) => {
  return configureStore({
    reducer: {
      darkMode: darkModeReducer,
    },
    preloadedState: initialState,
  });
};

describe('Footer Component', () => {
  test('renders footer with light mode styles', () => {
    const store = createStore({ darkMode: { isDarkMode: false } });

    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );

    // Memastikan footer dirender dengan gaya mode terang
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('bg-white text-dark');
    expect(screen.getByText(/© 2024/i)).toBeInTheDocument();
    expect(screen.getByText(/twitter/i)).toBeInTheDocument();
    expect(screen.getByText(/linkedin/i)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/rss feed/i)).toBeInTheDocument();
    expect(screen.getByText(/add to feedly/i)).toBeInTheDocument();
  });

  test('renders footer with dark mode styles', () => {
    const store = createStore({ darkMode: { isDarkMode: true } });

    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );

    // Memastikan footer dirender dengan gaya mode gelap
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('bg-dark text-white');
  });
});
