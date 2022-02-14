import React from 'react';
// React-router-dom
import { Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Pages
import Home from './pages/Home';
// CSS
import './index.css';

const Impact = () => {
  return (
    <div className='impact'>
        <Header />
        <Routes>
            <Route path="/Impact-ecommerce" element={<Home />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default Impact;