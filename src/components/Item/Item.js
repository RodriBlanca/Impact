import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';
// import like from '../../assets/img/favourite.svg';
import './item.css';

const Item = ({name, price, img, id, description, color, brand, gender}) => {

    const [ , setItem] = useContext(ProductContext);
    
    const handleProduct = () => {
        setItem({
            id,
            name,
            img,
            price,
            description,
            color,
            brand,
            gender
        });
    }

    const handleLike = () => {
        console.log('like')
    }

    return (
        <Link to={`item:${id}`} className='item-link' onClick={handleProduct}>
            <div className='item'>
                <div className='item-img'>
                    <img className='item-img__pic' alt={name} src={img} />
                </div>
                <div className='item-info'>
                    <p className='item-info__name'>{name}</p>
                    <p className='item-info__price'>$ {price}.00</p>
                    {/* <svg onClick={handleLike} className='item-info__like' role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="favouriteIconTitle" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"> <title id="favouriteIconTitle">Favourite</title> <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"/> </svg> */}
                </div>
            </div>
        </Link>
    );
}

export default Item;