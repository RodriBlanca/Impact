import React, { useEffect, useState, useReducer } from 'react';
// React-router-dom
import { Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
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
// Reducers
import { cartReducer } from './reducers/cartReducer';
// Firebase 
import { db } from './firebase/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";
// CSS
import './index.css';

const Impact = () => {

  const [productsData, setProductsData] = useState([]);
  const [menData, setMenData] = useState([]);
  const [products] = useReducer(cartReducer, []);
  const [listItemTitle, setListItemTitle] = useState('Top Sellers');

  useEffect(() => {
      const getProducts = async() => {
          const q = query(collection(db, "products"));
          const docs = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
              docs.push({...doc.data(), id: doc.id});
          });
          setProductsData(docs);
      };
      getProducts();
  }, []);

  useEffect(() => {
      const getMenProducts = async() => {
          const q = query(collection(db, "men"));
          const docs = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
              docs.push({...doc.data(), id: doc.id});
          });
          setMenData(docs);
      };
      getMenProducts();
  }, []);

  return (
    <div className='impact'>
        <ProductProvider>
          <CartProvider>
            <CategoryIdProvider>
              <TotalProvider>
                <CheckboxesProvider>
                  <Header products={products} title={listItemTitle} setTitle={setListItemTitle} />
                  <Routes>
                      <Route path="/Impact" element={<Home props={productsData} title={listItemTitle} setTitle={setListItemTitle} />} />
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