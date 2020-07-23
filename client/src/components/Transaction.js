import React, { useContext } from 'react'; // use useContext hooks for pulling state
import { GlobalContext } from '../context/GlobalState'; // pulling state info from GlobalState

// you can either write props in catch block or {transaction}
// if you  use props, you will have to write props.transaction.text
export const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';  // sign condition

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}<span>{sign}Rs.{Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button></li>
        
        );
} 