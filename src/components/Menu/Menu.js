import React, { useContext } from 'react';
import { CategoryId } from '../../contexts/CategoryId';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = ({setTitle}) => {

    const [ , setCategoryId] = useContext(CategoryId);
    let newTitle;

    const toMen = () => {
        setCategoryId('men');
        setTitle(newTitle);
    }

    const toWomen = () => {
        setCategoryId('women');
        setTitle(newTitle);
    }

    const toKids = () => {
        setCategoryId('kids');
        setTitle(newTitle);
    }

    const handleChangeTitle = (e) => {
        newTitle = e.target.innerHTML;
    }

    return (
        <>
            <input 
                type="checkbox"
                className='menu'
                id='menu-button'
            />
            <label htmlFor='menu-button' className='menu-label'></label>
            <div className='menu-container'>
                <ul>
                    <li className='menu-item'>User</li>
                    <li>
                        <Link to={'/category:women'} className='menu-item' onClick={toWomen} onMouseEnter={handleChangeTitle}>Women</Link>
                    </li>
                    <li>
                        <Link to={'/category:men'} className='menu-item' onClick={toMen} onMouseEnter={handleChangeTitle}>Men</Link>
                    </li>
                    <li>
                        <Link to={'/category:kids'} className='menu-item' onClick={toKids} onMouseEnter={handleChangeTitle}>Kids</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu;