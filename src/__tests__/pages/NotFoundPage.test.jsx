/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import NotFoundPage from '../../pages/NotFoundPage'; // Ganti dengan path yang sesuai
import darkModeReducer from '../../redux/slice/darkModeSlice'; // Ganti dengan path yang sesuai
import { MemoryRouter } from 'react-router-dom';

// Membuat store untuk Redux
const createStore = (initialState) => {
  return configureStore({
    reducer: {
      darkMode: darkModeReducer,
    },
    preloadedState: initialState,
  });
};

describe('NotFoundPage Component', () => {
  test('renders NotFoundPage with light mode styles', () => {
    const store = createStore({ darkMode: { isDarkMode: false } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <NotFoundPage />
        </MemoryRouter>
      </Provider>
    );

    // Memastikan elemen dirender dengan gaya mode terang
    expect(screen.getByText(/404 - page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/sorry, the page you are looking for does not exist/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /go to home/i })).toBeInTheDocument();
    expect(document.body).toHaveClass('bg-gray-100 text-gray-900'); // Memastikan gaya
  });

  test('renders NotFoundPage with dark mode styles', () => {
    const store = createStore({ darkMode: { isDarkMode: true } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <NotFoundPage />
        </MemoryRouter>
      </Provider>
    );

    // Memastikan elemen dirender dengan gaya mode gelap
    expect(screen.getByText(/404 - page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/sorry, the page you are looking for does not exist/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /go to home/i })).toBeInTheDocument();
    expect(document.body).toHaveClass('bg-[#090D1F] text-white'); // Memastikan gaya
  });
});
