import React from 'react';
// React-router-dom
import { Link } from 'react-router-dom';
// CSS
import './brand.css';

const Brand = () => {
  return (
    <h1><Link to="/Impact-App" className='brand'>Impact</Link></h1>
  )
}

export default Brand;