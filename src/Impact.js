import React from 'react';
// React-router-dom
import { Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Pages
import Home from './pages/Home';
// Contexts
import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';
import { CategoryIdProvider } from './contexts/CategoryIdContext';
import { TotalProvider } from './contexts/TotalContext';
import { CheckboxesProvider } from './contexts/CheckboxesContext';
// CSS
import './index.css';

const Impact = () => {
  return (
    <div className='impact'>
        <ProductProvider>
          <CartProvider>
            <CategoryIdProvider>
              <TotalProvider>
                <CheckboxesProvider>
                  <Header />
                  <Routes>
                      <Route path="/Impact-ecommerce" element={<Home />} />
                  </Routes>
                  <Footer />
                </CheckboxesProvider>
              </TotalProvider>
            </CategoryIdProvider>
          </CartProvider>
        </ProductProvider>
    </div>
  )
}

export default Impact;