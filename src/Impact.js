import React from 'react';
// React-router-dom
import { Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Pages
import Home from './pages/Home';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Category from './pages/Category';
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
                      <Route path="/register" element={<Register />}/>
                      <Route path="/checkout" element={<Checkout />}/>
                      <Route path="/item:id" element={<ItemDetailContainer />}/>
                      <Route path="category:id" element={<Category props={menData} title={listItemTitle}/>}/>
                      <Route path="category:id/item:id" element={<ItemDetailContainer />}/>
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