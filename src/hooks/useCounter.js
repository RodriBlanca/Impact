import { useState } from 'react';

export const useCounter = (initialState) => {
    
    const [amount, setAmount] = useState(initialState);

    const handleIncrement = () => {
        if(amount === initialState) {
            setAmount(1);
        } else {
            setAmount(amount + 1);
        }
    }

    const handleDecrement = () => {
        if(amount === 1) {
            setAmount(initialState);
        } else if (amount === initialState) {
            setAmount(amount);
        } else {
            setAmount(amount - 1);
        }
    }

    return [amount, setAmount, handleIncrement, handleDecrement];
}