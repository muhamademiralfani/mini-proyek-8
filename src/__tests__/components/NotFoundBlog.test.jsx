/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFoundBlog from '../../components/NotFoundBlog'; // Ganti dengan path yang sesuai

const renderWithRouter = (ui) => {
  return render(<Router>{ui}</Router>);
};

describe('NotFoundBlog Component', () => {
  test('renders 404 message and link to home', () => {
    renderWithRouter(<NotFoundBlog />);

    // Memastikan judul 404 dirender
    expect(screen.getByText(/404/i)).toBeInTheDocument();

    // Memastikan pesan "Oops! Blog Not Found" dirender
    expect(screen.getByText(/oops! blog not found/i)).toBeInTheDocument();

    // Memastikan pesan "The blog post you are looking for does not exist." dirender
    expect(screen.getByText(/the blog post you are looking for does not exist/i)).toBeInTheDocument();

    // Memastikan tautan "Go Back to Home" dirender
    const linkElement = screen.getByRole('link', { name: /go back to home/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/'); // Memastikan tautan mengarah ke '/'
  });
});
