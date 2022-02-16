import React from 'react';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';
import '../components/CheckoutForm/checkoutForm.css';

const Checkout = () => {
    return (
        <div className='checkout'>
            <h2 className='checkout-title'>Checkout</h2>
            <p className='checkout-text'>Complete the form to finalize the purchase.</p>
            <CheckoutForm />
        </div>
    )
}

export default Checkout;