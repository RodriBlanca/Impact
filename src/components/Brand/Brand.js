import React, { useContext } from 'react';
// React-router-dom
import { Link } from 'react-router-dom';
// Context
import { CheckboxesContext } from '../../contexts/CheckboxesContext';
// CSS
import './brand.css';

const Brand = ({ setTitle }) => {

  const [checkboxes, setCheckboxes] = useContext(CheckboxesContext);
  let newTitle;

  const toHome = () => {
      setTitle(newTitle);
      setCheckboxes({...checkboxes, cart: false, user: false});
  }

  const handleChangeTitle = () => {
      newTitle = 'Top Sellers';
  }

  return (
    <h1 className='brand' onClick={toHome} onMouseEnter={handleChangeTitle}>
      <Link to="/Impact" className='brand-link'>Impact</Link>
    </h1>
  )
}

export default Brand;