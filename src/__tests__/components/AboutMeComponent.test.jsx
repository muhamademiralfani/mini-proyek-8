/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import AboutMeComponent from '../../components/AboutMeComponent';
import darkModeSlice from '../../redux/slice/darkModeSlice';

// Membuat store untuk Redux
const createStore = (initialState) => {
  return configureStore({
    reducer: {
      darkMode: darkModeSlice,
    },
    preloadedState: initialState,
  });
};

describe('AboutMeComponent', () => {
  test('renders About Me section with correct content', () => {
    const store = createStore({ darkMode: { isDarkMode: false } });

    render(
      <Provider store={store}>
        <AboutMeComponent />
      </Provider>
    );

    // Memastikan judul "About Me" dirender
    expect(screen.getByText(/about me/i)).toBeInTheDocument();

    // Memastikan deskripsi dirender
    expect(screen.getByText(/As a passionate and experienced UI designer/i)).toBeInTheDocument();

    // Memastikan bagian Skills dirender
    expect(screen.getByText(/skills:/i)).toBeInTheDocument();
    expect(screen.getByText(/Extensive experience in UI design/i)).toBeInTheDocument();

    // Memastikan bagian Experience dirender
    expect(screen.getByText(/experience:/i)).toBeInTheDocument();
    expect(screen.getByText(/5 years of experience as a UI designer/i)).toBeInTheDocument();

    // Memastikan bagian Education dirender
    expect(screen.getByText(/education:/i)).toBeInTheDocument();
    expect(screen.getByText(/Bachelor of Science in Computer Science/i)).toBeInTheDocument();
  });

  test('renders with dark mode styles', () => {
    const store = createStore({ darkMode: { isDarkMode: true } });

    render(
      <Provider store={store}>
        <AboutMeComponent />
      </Provider>
    );

    // Memastikan teks memiliki warna yang sesuai untuk mode gelap
    expect(screen.getByText(/about me/i)).toHaveClass('text-[#C0C5D0]');
    expect(screen.getByText(/skills:/i)).toHaveClass('text-[#C0C5D0]');
    expect(screen.getByText(/experience:/i)).toHaveClass('text-[#C0C5D0]');
    expect(screen.getByText(/education:/i)).toHaveClass('text-[#C0C5D0]');
  });

  test('renders with light mode styles', () => {
    const store = createStore({ darkMode: { isDarkMode: false } });

    render(
      <Provider store={store}>
        <AboutMeComponent />
      </Provider>
    );

    // Memastikan teks memiliki warna yang sesuai untuk mode terang
    expect(screen.getByText(/about me/i)).toHaveClass('text-gray-500');
    expect(screen.getByText(/skills:/i)).toHaveClass('text-gray-600');
    expect(screen.getByText(/experience:/i)).toHaveClass('text-gray-600');
    expect(screen.getByText(/education:/i)).toHaveClass('text-gray-600');
  });
});
