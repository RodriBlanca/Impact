import React, { useContext } from 'react';
// React-router-dom
import { Link } from 'react-router-dom';
// Contexts
import { CategoryIdContext } from '../../contexts/CategoryIdContext';
import { CheckboxesContext } from '../../contexts/CheckboxesContext';
// CSS
import './navBar.css';

const NavBar = ({setTitle}) => {

    const [ , setCategoryIdContext] = useContext(CategoryIdContext);
    const [checkboxes, setCheckboxes] = useContext(CheckboxesContext);
    let newTitle;

    const toMen = () => {
        setCategoryIdContext('men');
        setTitle(newTitle);
        setCheckboxes({...checkboxes, cart: false, user: false});
    }

    const toWomen = () => {
        setCategoryIdContext('women');
        setTitle(newTitle);
        setCheckboxes({...checkboxes, cart: false, user: false});
    }

    const toKids = () => {
        setCategoryIdContext('kids');
        setTitle(newTitle);
        setCheckboxes({...checkboxes, cart: false, user: false});
    }

    const handleChangeTitle = (e) => {
        newTitle = e.target.innerHTML;
    }

    return(
        <nav className='nav'>
            <ul className='nav-list'>
                <li>
                    <Link className="nav-list__item" to={'/Impact/category:women'} onClick={toWomen} onMouseEnter={handleChangeTitle} >Women</Link>
                </li>
                <li>
                    <Link className="nav-list__item" to={'/Impact/category:men'} onClick={toMen} onMouseEnter={handleChangeTitle} >Men</Link>
                </li>
                <li>
                    <Link className="nav-list__item" to={'/Impact/category:kids'} onClick={toKids} onMouseEnter={handleChangeTitle} >Kids</Link>
                </li>
            </ul>
        </nav>
    );

};

export default NavBar;