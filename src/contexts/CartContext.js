import { createContext, useState } from "react";

export const CartContext = createContext();

const initialCart = [];

export const CartProvider = ({children}) => {

    const [cartList, setCartList] = useState(initialCart);

    return(
        <CartContext.Provider value={[cartList, setCartList]}>
            {children}
        </CartContext.Provider>
    );
}