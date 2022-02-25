import React from 'react';
// Components
import Brand from '../Brand/Brand';
import NavBar from '../NavBar/NavBar';
import Cart from '../Cart/Cart';
import User from '../User/User';
import Menu from '../Menu/Menu';
// CSS
import './header.css';

const Header = ({products, title, setTitle}) => {
  return (
    <header className='header'>
        <div className='header-container1'>
            <Brand setTitle={setTitle} />
            <NavBar title={title} setTitle={setTitle} />
        </div>
        <div className='header-container2'>
            <Cart products={products} />
            <User />
            <Menu setTitle={setTitle} />
        </div>
    </header>
  )
}

export default Header;