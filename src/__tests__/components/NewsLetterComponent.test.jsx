/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import NewsLetterComponent from '../../components/NewsLetterComponent';
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

describe('NewsLetterComponent', () => {
  test('renders the newsletter component with correct content', () => {
    const store = createStore({ blog: { subscribed: false } });

    render(
      <Provider store={store}>
        <NewsLetterComponent />
      </Provider>
    );

    // Memastikan elemen-elemen dirender
    expect(screen.getByText(/newsletters/i)).toBeInTheDocument();
    expect(screen.getByText(/stories and interviews/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();
  });

  test('allows user to type in the email input', () => {
    const store = createStore({ blog: { subscribed: false } });

    render(
      <Provider store={store}>
        <NewsLetterComponent />
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    expect(emailInput.value).toBe('test@example.com');
  });

  test('dispatches subscribe action on form submit', () => {
    const mockSubscribe = jest.fn();
    const store = createStore({ blog: { subscribed: false } });

    // Mocking the subscribe action
    jest.mock('../redux/async/blogSlice', () => ({
      subscribe: () => mockSubscribe,
    }));

    render(
      <Provider store={store}>
        <NewsLetterComponent />
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    const subscribeButton = screen.getByRole('button', { name: /subscribe/i });
    fireEvent.click(subscribeButton);

    expect(mockSubscribe).toHaveBeenCalledWith('test@example.com');
  });

  test('displays success message when subscribed', () => {
    const store = createStore({ blog: { subscribed: true } });

    render(
      <Provider store={store}>
        <NewsLetterComponent />
      </Provider>
    );

    // Memastikan pesan sukses ditampilkan
    expect(screen.getByText(/subscribed successfully/i)).toBeInTheDocument();
  });
});
