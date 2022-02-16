import React from 'react';
import './checkoutFormItem.css';

const CheckoutFormItem = ({img, price, name, amount}) => {
    return (
        <div className='checkout-item'>
            <div className='checkItem-img'>
                <img alt={name} src={img} className='checkItem-img__pic'/>
            </div>
            <div className='checkItem-info'>
                <p className='checkItem-info__name'>Product: {name}</p>
                <p className='checkItem-info__price'>$ {price}</p>
                <p className='checkItem-info__amount'>Amount: {amount}</p>
            </div>
        </div>
    )
}

export default CheckoutFormItem;