import { createContext, useState } from "react";

export const CategoryIdContext = createContext();

export const CategoryIdProvider = ({children}) => {

    const [categoryId, setCategoryId] = useState('');

    return(
        <CategoryIdContext.Provider value={[categoryId, setCategoryId]}>
            {children}
        </CategoryIdContext.Provider>
    )
    
}