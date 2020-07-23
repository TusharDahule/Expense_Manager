import React, { useContext } from 'react'; // use useContext hooks for pulling state
import { GlobalContext } from '../context/GlobalState'; // pulling state info from GlobalState


export const Balance = () => {
    const { transactions } = useContext(GlobalContext);  // transactions take array given by hooks who pulls data from GlobalContext
    const amounts = transactions.map(transaction => transaction.amount); //mapping transactions 

    const total = amounts.reduce((acc, item) => acc += item, 0).toFixed(2);

    const percent = ((total * 100) / 10000);

    return (
        <>
            <h4>Your Balance</h4>
            <h1> Rs.{total}</h1>
            <h3> % Expense:{percent}</h3>

        </>


    );
}