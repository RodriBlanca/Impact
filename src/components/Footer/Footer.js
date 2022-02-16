import React from 'react';
// CSS
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
            <h3 className='footer-title'>Impact</h3>
            <div className='footer-information'>
                <ul>
                    <li className='footer-information__title'>Categories</li>
                    <li className='footer-information__item'>Women</li>
                    <li className='footer-information__item'>Men</li>
                    <li className='footer-information__item'>Kids</li>
                    <li className='footer-information__item'>Sport</li>
                    <li className='footer-information__item'>Street</li>
                </ul>
                <ul>
                    <li className='footer-information__title'>Support</li>
                    <li className='footer-information__item'>Customer Service</li>
                    <li className='footer-information__item'>Shiping and Delivery</li>
                    <li className='footer-information__item'>Payments Options</li>
                    <li className='footer-information__item'>Contact Us</li>
                </ul>
            </div>
            <p className='footer-rights'>2021 Impact inc. All Rights Reserved</p>
        </footer>
  )
}

export default Footer;