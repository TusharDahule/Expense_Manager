import React, { useContext } from 'react'; // use useContext hooks for pulling state
import { GlobalContext } from '../context/GlobalState'; // pulling state info from GlobalState


export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);  // transactions take array given by hooks who pulls data from GlobalContext
    const amounts = transactions.map(transaction => transaction.amount); //mapping transactions 

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense =( amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0)*-1)
        .toFixed(2);

    return (
            <div className="inc-exp-container">
                <div>
                <h4>Income</h4>
                <p className="money plus">+Rs.{income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                <p className="money minus">-Rs.{expense}</p>
                </div>
            </div>


    );
}