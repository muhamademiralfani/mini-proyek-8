/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import About from '../../pages/About'; // Ganti dengan path yang sesuai
import darkModeReducer from '../../redux/slice/darkModeSlice'; // Ganti dengan path yang sesuai
import { SchemaContextProvider } from '../../context/SchemaContext'; // Ganti dengan path yang sesuai

// Membuat store untuk Redux
const createStore = (initialState) => {
  return configureStore({
    reducer: {
      darkMode: darkModeReducer,
    },
    preloadedState: initialState,
  });
};

describe('About Component', () => {
  test('renders About page with light mode styles', () => {
    const store = createStore({ darkMode: { isDarkMode: false } });

    render(
      <Provider store={store}>
        <SchemaContextProvider value={{ about: {} }}>
          <About />
        </SchemaContextProvider>
      </Provider>
    );

    // Memastikan elemen-elemen dirender
    expect(screen.getByText(/emir/i)).toBeInTheDocument(); // HeaderComponent
    expect(screen.getByText(/learn more about me/i)).toBeInTheDocument(); // AboutMeComponent
    expect(document.body).toHaveClass('bg-white text-black'); // Memastikan gaya
  });

  test('renders About page with dark mode styles', () => {
    const store = createStore({ darkMode: { isDarkMode: true } });

    render(
      <Provider store={store}>
        <SchemaContextProvider value={{ about: {} }}>
          <About />
        </SchemaContextProvider>
      </Provider>
    );

    // Memastikan elemen-elemen dirender
    expect(screen.getByText(/emir/i)).toBeInTheDocument(); // HeaderComponent
    expect(screen.getByText(/learn more about me/i)).toBeInTheDocument(); // AboutMeComponent
    expect(document.body).toHaveClass('bg-[#090D1F] text-white'); // Memastikan gaya
  });

  test('renders Helmet with correct title and meta description', () => {
    const store = createStore({ darkMode: { isDarkMode: false } });

    render(
      <Provider store={store}>
        <SchemaContextProvider value={{ about: {} }}>
          <About />
        </SchemaContextProvider>
      </Provider>
    );

    // Memastikan Helmet merender title dan meta description yang benar
    expect(document.title).toBe('About Page - My Blog List');
    const metaDescription = document.querySelector("meta[name='description']");
    expect(metaDescription).toHaveAttribute('content', 'Learn More About Me.');
  });
});
