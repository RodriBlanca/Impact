import React, { useContext } from 'react';
// React-router-dom
import { Link } from 'react-router-dom';
// Contexts
import { CartContext } from '../../contexts/CartContext';
import { CheckboxesContext } from '../../contexts/CheckboxesContext';
// Images
import trolley from '../../images/shopping-cart.png';
import buying from '../../images/buying.jpg';
// CSS
import './cart.css';

const Cart = () => {

    const [cart] = useContext(CartContext);
    const [checkboxes, setCheckboxes] = useContext(CheckboxesContext);
    let totalCart = [];
    let totalAmount = 0;
    let totalToPay = 0;

    const handleBuy = () => {
        cart.forEach(prod => {
            const totalProd = prod.amount * prod.price;
            totalCart = [...totalCart, totalProd];
            return totalCart;
        });

        let total = 0;
        totalCart.forEach(totalProd => {
            total += totalProd;
            return total;
        });

        setCheckboxes({cart: false, user: false});
    }

    cart.forEach(amount => {
        totalAmount += Number(amount.amount);
        return totalAmount;
    });

    cart.forEach(total => {
        if(total.amount > 1) {
            let moreProductsTotal = total.amount * total.price;
            totalToPay += Number(moreProductsTotal);
            return totalToPay;
        } else {
            totalToPay += Number(total.price);
            return totalToPay;
        }
    });

    const handleCartCheckbox = () => {
        setCheckboxes({...checkboxes, cart: !checkboxes.cart, user: false});
    }

    return(
        <>
            <input 
                type="checkbox"
                className="toggle"
                value="cart"
                id="cart-button"
                checked={checkboxes.cart}
                onChange={handleCartCheckbox}
            />
            <label htmlFor='cart-button' >
                <img src={trolley} alt="trolley" className="trolley"/>
                <div className="trolley-counter">
                    <p className="trolley-counter__amount">{totalAmount}</p>
                </div>
            </label>
            <div className="cart-container">
                <div className="buying">
                    <img className="buying-img" src={buying} alt="buying" />
                </div>
                <div className="cart">
                    <h2 className="cart-title">Add your Favorite</h2>
                    {
                        totalAmount !== 0 ?
                            (
                                <>
                                    <p className="cart-text">
                                        Choose the products you want, we will send them to your home.
                                    </p>
                                    <div className="table-container">
                                        <table className="table">
                                            <thead className="table-head">
                                                <tr>
                                                    <th></th>
                                                    <th>Product</th>
                                                    <th>Amount</th>
                                                    <th>Price</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-body">
                                                {}
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="total">
                                        { totalToPay > 0 && `Total $${totalToPay}`}
                                    </p>
                                    <div className="cart-button">
                                        <Link to="/checkout">
                                            <button className="cart-button__button" onClick={handleBuy}>Buy</button>
                                        </Link>
                                    </div>
                                </>
                            )
                        :
                            (
                                <p className="cart-text">Your Cart is empty...</p>
                            )
                    }
                </div>
            </div>
        </>
    );
};

export default Cart;
