import React, { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CheckoutFormItem from '../CheckoutFormItem/CheckoutFormItem';
import { db } from '../../firebase/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { nanoid } from 'nanoid'
import './checkoutForm.css';

const CheckoutForm = () => {

    const [cart, setCart] = useContext(CartContext);
    const [buyMessage, setBuyMessage] = useState({buy: false})
    const [checkoutName, setCheckoutName] = useState('');
    const [checkoutEmail, setCheckoutEmail] = useState('');
    const [checkoutPhone, setCheckoutPhone] = useState('');
    const [checkoutAdress, setCheckoutAdress] = useState('');
    const [purchaseOrder, setPurchaseOrder] = useState('');

    const handleCheckoutName = (e) => {
        setCheckoutName(e.target.value);
    }

    const handleCheckoutPhone = (e) => {
        setCheckoutPhone(e.target.value);
    }

    const handleCheckoutEmail = (e) => {
        setCheckoutEmail(e.target.value);
    }

    const handleCheckoutAdress = (e) => {
        setCheckoutAdress(e.target.value)
    }

    const handleCheckOut = () => {

        if(
            checkoutName !== '' 
            && checkoutEmail !== '' 
            && checkoutPhone !== '' 
            && checkoutAdress !== ''
            && checkoutPhone.length > 1) {
                // Almacenar datos en el localStorage
                if(cart[0]) {
                    const docRef = doc(db, `orders/${nanoid()}`);
                    setDoc(docRef, {
                        name: checkoutName,
                        email: checkoutEmail,
                        phone: checkoutPhone,
                        adress: checkoutAdress,
                        products: cart

                    });
                    setCheckoutName('');
                    setCheckoutEmail('');
                    setCheckoutPhone('');
                    setCheckoutAdress('');
                    setCart([]);
                    setBuyMessage({buy: true});
                    setTimeout(() => {
                        setBuyMessage({buy: false})
                    }, 4000)
                    setPurchaseOrder(docRef._key.path.segments[1]);
                    console.log(purchaseOrder)
                }
        }
    }


    return (
        <div className='checkout-form'>
            <form className='checkout-form__form'>
                <input 
                    className='checkout-form__input' 
                    placeholder='Name' 
                    value={checkoutName}
                    onChange={handleCheckoutName}
                />
                <input 
                    className='checkout-form__input' 
                    placeholder='Phone' 
                    value={checkoutPhone}
                    type='number'
                    onChange={handleCheckoutPhone}
                />
                <input 
                    className='checkout-form__input' 
                    placeholder='Email' 
                    value={checkoutEmail}
                    onChange={handleCheckoutEmail}
                />
                <input 
                    className='checkout-form__input' 
                    placeholder='Adress' 
                    value={checkoutAdress}
                    onChange={handleCheckoutAdress}
                />
            </form>
            <div className='checkout-form__products'>
                <p className='checkout-form__title'>Products</p>
                {cart.map(prod => {
                    return(
                        <CheckoutFormItem 
                            key={prod.id}
                            name={prod.name}
                            img={prod.img}
                            id={prod.id}
                            brand={prod.brand}
                            gender={prod.gender}
                            price={prod.price}
                            amount={prod.amount}
                        />
                    )
                })}
            </div>
            <div className='checkout-button__container'> 
                <button className='checkout-form__button' onClick={handleCheckOut} >Confirm</button>
            </div>
            <div className='checkout-message'>
                <div className='message'>
                    {buyMessage.buy !== false && <p className='success'>Thanks for your purchase, Impact. Your purchase order is {purchaseOrder}</p>}
                </div>
            </div>
        </div>
    )
}

export default CheckoutForm;