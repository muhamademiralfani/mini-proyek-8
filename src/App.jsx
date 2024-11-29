/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';
import Navbar from './layouts/Navbar';
import NewsLetter from './pages/NewsLetter';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/newsletter' element={<NewsLetter />} />
      </Routes>
    </Router>
  );
};

export default App;
