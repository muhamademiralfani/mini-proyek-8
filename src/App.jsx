/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';
import Navbar from './layouts/Navbar';
import NewsLetter from './pages/NewsLetterPage';
import About from './pages/About';
import Footer from './layouts/Footer';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state
import { SchemaProvider } from './context/SchemaContext';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';

const App = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode); // Mendapatkan state mode gelap dari Redux

  return (
    <SchemaProvider>
      <Router>
        <div className={`min-h-screen ${isDarkMode ? 'bg-[#090D1F] text-white' : 'bg-white text-black'}`}>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/blog/:id' element={<BlogDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/newsletter' element={<NewsLetter />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </SchemaProvider>
  );
};

export default App;
