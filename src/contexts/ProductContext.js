import { createContext, useState } from "react";

export const ProductContext = createContext();

const initialState = {};

export const ProductProvider = ({children}) => {

    const [item, setItem] = useState(initialState);

    return(
        <ProductContext.Provider value={[item, setItem]}>
            {children}
        </ProductContext.Provider>
    );
    
}