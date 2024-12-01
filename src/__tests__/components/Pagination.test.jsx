// /* eslint-disable no-unused-vars */
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import Pagination from '../../components/Pagination'; // Ganti dengan path yang sesuai
// import blogReducer from '../../redux/slice/blogSlice'; // Ganti dengan path yang sesuai
// import darkModeReducer from '../../redux/slice/darkModeSlice'; // Ganti dengan path yang sesuai

// // Membuat store untuk Redux
// const createStore = (initialState) => {
//   return configureStore({
//     reducer: {
//       blog: blogReducer,
//       darkMode: darkModeReducer,
//     },
//     preloadedState: initialState,
//   });
// };

// describe('Pagination Component', () => {
//   test('renders pagination with current page and buttons', () => {
//     const store = createStore({ blog: { totalPage: 5 }, darkMode: { isDarkMode: false } });
//     const handleNextPageChange = jest.fn();
//     const handleBackPageChange = jest.fn();

//     render(
//       <Provider store={store}>
//         <Pagination currentPage={1} handleNextPageChange={handleNextPageChange} handleBackPageChange={handleBackPageChange} />
//       </Provider>
//     );

//     // Memastikan halaman saat ini ditampilkan
//     expect(screen.getByText(/1/i)).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
//   });

//   test('disables previous button on the first page', () => {
//     const store = createStore({ blog: { totalPage: 5 }, darkMode: { isDarkMode: false } });
//     const handleNextPageChange = jest.fn();
//     const handleBackPageChange = jest.fn();

//     render(
//       <Provider store={store}>
//         <Pagination currentPage={1} handleNextPageChange={handleNextPageChange} handleBackPageChange={handleBackPageChange} />
//       </Provider>
//     );

//     // Memastikan tombol Previous dinonaktifkan
//     const prevButton = screen.getByRole('button', { name: /previous/i });
//     expect(prevButton).toBeDisabled();
//   });

//   test('disables next button on the last page', () => {
//     const store = createStore({ blog: { totalPage: 5 }, darkMode: { isDarkMode: false } });
//     const handleNextPageChange = jest.fn();
//     const handleBackPageChange = jest.fn();

//     render(
//       <Provider store={store}>
//         <Pagination currentPage={5} handleNextPageChange={handleNextPageChange} handleBackPageChange={handleBackPageChange} />
//       </Provider>
//     );

//     // Memastikan tombol Next dinonaktifkan
//     const nextButton = screen.getByRole('button', { name: /next/i });
//     expect(nextButton).toBeDisabled();
//   });

//   test('calls handleNextPageChange when next button is clicked', () => {
//     const store = createStore({ blog: { totalPage: 5 }, darkMode: { isDarkMode: false } });
//     const handleNextPageChange = jest.fn();
//     const handleBackPageChange = jest.fn();

//     render(
//       <Provider store={store}>
//         <Pagination currentPage={1} handleNextPageChange={handleNextPageChange} handleBackPageChange={handleBackPageChange} />
//       </Provider>
//     );

//     // Klik tombol Next
//     fireEvent.click(screen.getByRole('button', { name: /next/i }));

//     // Memastikan fungsi handleNextPageChange dipanggil
//     expect(handleNextPageChange).toHaveBeenCalled();
//   });

//   test('calls handleBackPageChange when previous button is clicked', () => {
//     const store = createStore({ blog: { totalPage: 5 }, darkMode: { isDarkMode: false } });
//     const handleNextPageChange = jest.fn();
//     const handleBackPageChange = jest.fn();

//     render(
//       <Provider store={store}>
//         <Pagination currentPage={2} handleNextPageChange={handleNextPageChange} handleBackPageChange={handleBackPageChange} />
//       </Provider>
//     );

//     // Klik tombol Previous
//     fireEvent.click(screen.getByRole('button', { name: /previous/i }));

//     // Memastikan fungsi handleBackPageChange dipanggil
//     expect(handleBackPageChange).toHaveBeenCalled();
//   });

//   test('renders with dark mode styles', () => {
//     const store = createStore({ blog: { totalPage: 5 }, darkMode: { isDarkMode: true } });
//     const handleNextPageChange = jest.fn();
//     const handleBackPageChange = jest.fn();

//     render(
//       <Provider store={store}>
//         <Pagination currentPage={1} handleNextPageChange={handleNextPageChange} handleBackPageChange={handleBackPageChange} />
//       </Provider>
//     );

//     // Memastikan teks berwarna putih saat mode gelap
//     expect(screen.getByText(/1/i)).toHaveClass('text-white');
//     expect(screen.getByRole('button', { name: /previous/i })).toHaveClass('bg-[#090D1F] text-white');
//     expect(screen.getByRole('button', { name: /next/i })).toHaveClass('bg-[#090D1F] text-white');
//   });
// });
