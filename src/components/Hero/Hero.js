import React from 'react';
// Images
import banner from '../../images/banner.jpg';
// CSS
import './hero.css';

const Hero = () => {
  return(
    <div className='hero'>
        <p className='hero-text'>Give it all to be better</p>
        <img src={banner} alt='banner' className='hero-img' />
    </div>
  );
};

export default Hero;