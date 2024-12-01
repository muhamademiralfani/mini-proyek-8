/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Navbar from '../../layouts/Navbar'; 
import darkModeReducer from '../../redux/slice/darkModeSlice'; 

// Membuat store untuk Redux
const createStore = (initialState) => {
  return configureStore({
    reducer: {
      darkMode: darkModeReducer,
    },
    preloadedState: initialState,
  });
};

describe('Navbar Component', () => {
  test('renders navbar with light mode styles', () => {
    const store = createStore({ darkMode: { isDarkMode: false } });

    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    // Memastikan elemen navbar dirender dengan gaya mode terang
    expect(screen.getByText(/lumosblog/i)).toBeInTheDocument();
    expect(screen.getByText(/blog/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/newsletter/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /hamburger/i })).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toHaveClass('bg-white text-black');
  });

  test('renders navbar with dark mode styles', () => {
    const store = createStore({ darkMode: { isDarkMode: true } });

    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    // Memastikan elemen navbar dirender dengan gaya mode gelap
    expect(screen.getByRole('navigation')).toHaveClass('bg-[#090D1F] text-white');
  });

  test('toggles mobile menu when hamburger button is clicked', () => {
    const store = createStore({ darkMode: { isDarkMode: false } });

    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    // Memastikan menu tidak terbuka pada awalnya
    expect(screen.queryByText(/blog/i)).not.toBeVisible();

    // Klik tombol hamburger untuk membuka menu
    fireEvent.click(screen.getByRole('button', { name: /hamburger/i }));

    // Memastikan menu terbuka
    expect(screen.getByText(/blog/i)).toBeVisible();
    expect(screen.getByText(/about/i)).toBeVisible();
    expect(screen.getByText(/newsletter/i)).toBeVisible();

    // Klik tombol hamburger untuk menutup menu
    fireEvent.click(screen.getByRole('button', { name: /hamburger/i }));

    // Memastikan menu tertutup
    expect(screen.queryByText(/blog/i)).not.toBeVisible();
  });

  test('closes mobile menu when a link is clicked', () => {
    const store = createStore({ darkMode: { isDarkMode: false } });

    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    // Buka menu
    fireEvent.click(screen.getByRole('button', { name: /hamburger/i }));

    // Klik tautan Blog untuk menutup menu
    fireEvent.click(screen.getByText(/blog/i));

    // Memastikan menu tertutup setelah tautan diklik
    expect(screen.queryByText(/blog/i)).not.toBeVisible();
  });
});
