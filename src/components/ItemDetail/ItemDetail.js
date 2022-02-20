import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import arrow from '../../assets/img/arrow-down-sign-to-navigate.png';
import { CartContext } from '../../contexts/CartContext';
import { useCounter } from '../../hooks/useCounter';
import './itemDetail.css';

const ItemDetail = () => {

    const [item] = useContext(ProductContext);

    const [cart, setCart] = useContext(CartContext);

    const [amount, setAmount, handleIncrement, handleDecrement] = useCounter('Amount');

    const handleAddToCart = (e) => {
        e.preventDefault();

        const newProduct = {
            name: item.name,
            price: item.price,
            img: item.img,
            amount,
            id: item.id
        }

        if (newProduct.amount >= 1) {

            const uniqueProduct = cart.find((prod) => prod.id === newProduct.id);
            if(uniqueProduct) {
                setCart(cart.map((prod) => prod.id === newProduct.id ? {...uniqueProduct, amount: uniqueProduct.amount + newProduct.amount} : prod));
            } else {
                setCart([...cart, newProduct]);
            }
        }
        setAmount('Amount');
    };

    return (
        <div className='detail'>
            <div className='detail-sup'>
                <div className='detail-img'>
                    <img src={item.img} alt={item.name} className='detail-img__pic'/>
                </div>
                <div className='detail-info'>
                    <h4 className='detail-info__title'>{item.name}</h4>
                    <p className='detail-info__brand'>{item.brand}</p>
                    <p className='detail-info__genre'>Gender - {item.gender}</p>
                    <p className='detail-info__color'>Color - {item.color}</p>
                    <div className='buttons-container'>
                        <p className='detail-info__price'>$ {item.price}.00</p>
                        <div className='detail-amount'>
                            <img 
                                src={arrow} 
                                alt='arrow-up' 
                                className='detail-amount__increment'
                                onClick={handleIncrement}
                            />
                            <p className='detail-amount__text'>{amount}</p>
                            <img 
                                src={arrow} 
                                alt='arrow-down' 
                                className='detail-amount__decrement'
                                onClick={handleDecrement}
                            />
                        </div>
                    </div>
                    <div className='detail-button'>
                        <button className='detail-button__add' onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                    <div className='error-message'>

                    </div>
                </div>
            </div>
            <div className='detail-description'>
                <h4 className='detail-description__title'>Description</h4>
                <p className='detail-description__text'>{item.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail;