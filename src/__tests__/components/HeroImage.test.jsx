/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from '../../components/HeroImage';
import AboutImage from '../../assets/profile.webp';

describe('HeroImage Component', () => {
  test('renders the hero image with correct src and alt attributes', () => {
    render(<HeroImage />);

    // Memastikan gambar dirender
    const imgElement = screen.getByRole('img', { name: /about/i });
    expect(imgElement).toBeInTheDocument();

    // Memastikan src dan alt atribut gambar benar
    expect(imgElement).toHaveAttribute('alt', 'about');
  });
});
