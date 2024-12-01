/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './../redux/index';
import App from '../App';

// Membuat store untuk Redux

const renderWithRouterAndRedux = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(
    <Provider store={store}>
      <Router>{ui}</Router>
    </Provider>
  );
};

describe('App Component', () => {
  test('renders Navbar and Footer on the home page', () => {
    renderWithRouterAndRedux(<App />);

    // Memastikan Navbar dan Footer dirender
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText(/footer text/i)).toBeInTheDocument(); // Ganti dengan teks yang sesuai di Footer
  });

  test('renders HomePage on the root route', () => {
    renderWithRouterAndRedux(<App />);

    // Memastikan HomePage dirender
    expect(screen.getByText(/welcome to the homepage/i)).toBeInTheDocument(); // Ganti dengan teks yang sesuai di HomePage
  });

  test('renders BlogPage on the /blog route', () => {
    renderWithRouterAndRedux(<App />, { route: '/blog' });

    // Memastikan BlogPage dirender
    expect(screen.getByText(/recent blog posts/i)).toBeInTheDocument(); // Ganti dengan teks yang sesuai di BlogPage
  });

  test('renders NotFoundPage on an unknown route', () => {
    renderWithRouterAndRedux(<App />, { route: '/unknown' });

    // Memastikan NotFoundPage dirender
    expect(screen.getByText(/404 - page not found/i)).toBeInTheDocument(); // Ganti dengan teks yang sesuai di NotFoundPage
  });
});
