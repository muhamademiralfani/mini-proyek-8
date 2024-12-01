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

const App = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode); // Get dark mode state

  return (
    <SchemaProvider>
      <div className={`min-h-screen ${isDarkMode ? 'bg-[#090D1F] text-white' : 'bg-white text-black'}`}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<BlogPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/blog/:id' element={<BlogDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/newsletter' element={<NewsLetter />} />
            <Route path='*' element={<BlogPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </SchemaProvider>
  );
};

export default App;
