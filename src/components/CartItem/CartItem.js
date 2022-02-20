import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './cartItem.css';

const CartItems = ({img, name, amount, price, id}) => {

    const [cart, setCart] = useContext(CartContext);

    const handleDelete = (e) => {

        e.preventDefault();

        const filterItems = cart.filter(prod => prod.id !== id);

        setCart(filterItems);
    }

    return (
        <tr className='cart-item'>
            <th className='cart-item__img'>{<img alt={name} src={img}></img>}</th>
            <th className='cart-item__name'>{name}</th>
            <th className='cart-item__amount'>{amount}</th>
            <th className='cart-item__price'>$ {price}</th>
            <th 
                className='cart-item__delete' 
                onClick={handleDelete}>
                    <button className='cart-item__button'>X</button>
            </th>
        </tr>
    );
}

export default CartItems;