/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import LoadingPage from '../../components/LoadingPage'; // Ganti dengan path yang sesuai
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

describe('LoadingPage Component', () => {
  test('renders LoadingPage with light mode styles', () => {
    const store = createStore({ darkMode: { isDarkMode: false } });

    render(
      <Provider store={store}>
        <LoadingPage />
      </Provider>
    );

    // Memastikan elemen dirender dengan gaya mode terang
    expect(screen.getByRole('status')).toBeInTheDocument(); // Memastikan spinner dirender
    expect(document.body).toHaveClass('bg-white'); // Memastikan gaya
  });

  test('renders LoadingPage with dark mode styles', () => {
    const store = createStore({ darkMode: { isDarkMode: true } });

    render(
      <Provider store={store}>
        <LoadingPage />
      </Provider>
    );

    // Memastikan elemen dirender dengan gaya mode gelap
    expect(screen.getByRole('status')).toBeInTheDocument(); // Memastikan spinner dirender
    expect(document.body).toHaveClass('bg-[#090D1F]'); // Memastikan gaya
  });

  test('renders spinner with correct styles', () => {
    const store = createStore({ darkMode: { isDarkMode: false } });

    render(
      <Provider store={store}>
        <LoadingPage />
      </Provider>
    );

    // Memastikan spinner memiliki kelas yang benar
    const spinner = screen.getByRole('status');
    expect(spinner).toHaveClass('animate-spin');
    expect(spinner).toHaveClass('border-8');
    expect(spinner).toHaveClass('border-black');
    expect(spinner).toHaveClass('border-t-transparent');
  });
});
