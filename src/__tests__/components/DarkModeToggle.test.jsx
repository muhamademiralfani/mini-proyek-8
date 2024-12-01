/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import DarkModeToggle from '../../components/DarkModeToggle';
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

describe('DarkModeToggle Component', () => {
  test('renders with light mode styles', () => {
    const store = createStore({ darkMode: { isDarkMode: false } });

    render(
      <Provider store={store}>
        <DarkModeToggle />
      </Provider>
    );

    // Memastikan tombol dirender dengan gaya mode terang
    const button = screen.getByRole('button', { name: /brightness low/i });
    expect(button).toHaveClass('bg-[#090D1F] text-white');
    expect(screen.getByText(/brightness low/i)).toBeInTheDocument();
  });

  test('renders with dark mode styles', () => {
    const store = createStore({ darkMode: { isDarkMode: true } });

    render(
      <Provider store={store}>
        <DarkModeToggle />
      </Provider>
    );

    // Memastikan tombol dirender dengan gaya mode gelap
    const button = screen.getByRole('button', { name: /moon/i });
    expect(button).toHaveClass('bg-white text-black');
    expect(screen.getByText(/moon/i)).toBeInTheDocument();
  });

  test('dispatches toggleDarkMode action on button click', () => {
    const mockDispatch = jest.fn();
    const store = createStore({ darkMode: { isDarkMode: false } });

    // Mocking useDispatch
    jest.spyOn(require('react-redux'), 'useDispatch').mockImplementation(() => mockDispatch);

    render(
      <Provider store={store}>
        <DarkModeToggle />
      </Provider>
    );

    const button = screen.getByRole('button', { name: /brightness low/i });
    fireEvent.click(button);

    // Memastikan aksi toggleDarkMode dipanggil saat tombol diklik
    expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function)); // Memastikan fungsi dipanggil
  });
});
