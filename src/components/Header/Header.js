import React from 'react';
// Components
import Brand from '../Brand/Brand';
import NavBar from '../NavBar/NavBar';
import Cart from '../Cart/Cart';
import User from '../User/User';
// CSS
import './header.css';

const Header = () => {
  return (
    <header className='header'>
        <div className='header-container1'>
            <Brand />
            <NavBar />
        </div>
        <div className='header-container2'>
            <Cart />
            <User />
        </div>
    </header>
  )
}

export default Header;