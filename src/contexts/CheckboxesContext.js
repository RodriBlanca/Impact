import { createContext, useState } from "react";

export const CheckboxesContext = createContext();

export const CheckboxesProvider = ({children}) => {

    const [checkboxes, setCheckboxes] = useState({cart: false, user: false});

    return(
        <CheckboxesContext.Provider value={[checkboxes, setCheckboxes]}>
            {children}
        </CheckboxesContext.Provider>
    );
    
} 