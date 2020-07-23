import React, { useContext } from 'react'; // use useContext hooks for pulling state
import { GlobalContext } from '../context/GlobalState'; // pulling state info from GlobalState
import { Transaction } from './Transaction';
 

export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);  // transactions take array given by hooks who pulls data from GlobalContext
    
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))} 
                
            </ul>
        </div>


    );
	// this return will pass transaction as a props to Transaction component , therefore you need to catch props in that component
}