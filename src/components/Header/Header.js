import React from 'react';
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