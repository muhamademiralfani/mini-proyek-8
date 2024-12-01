/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderComponent from '../../components/HeaderComponent'; // Ganti dengan path yang sesuai

describe('HeaderComponent', () => {
  test('renders the header with the correct text', () => {
    const headerText = 'Welcome to My Blog';

    render(<HeaderComponent>{headerText}</HeaderComponent>);

    // Memastikan header dirender dengan teks yang benar
    const headerElement = screen.getByText(headerText);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass('text-center text-[72px] lg:text-[245px] md:text-[160px] border-y-2 border-y-slate-300 mt-8 font-bold uppercase px-0');
  });

  test('renders with different text', () => {
    const headerText = 'About Me';

    render(<HeaderComponent>{headerText}</HeaderComponent>);

    // Memastikan header dirender dengan teks yang benar
    const headerElement = screen.getByText(headerText);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass('text-center text-[72px] lg:text-[245px] md:text-[160px] border-y-2 border-y-slate-300 mt-8 font-bold uppercase px-0');
  });
});
