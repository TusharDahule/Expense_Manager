import React, { useState , useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'; // pulling state info from GlobalState



export const AddTransaction = () => {

    const [text, SetText] = useState(''); //using hooks and setting states for input 1
    const [amount, SetAmount] = useState(0); //using hooks and setting states for input 2

    const { addTransaction } = useContext(GlobalContext); //using useContext hook to call reducer of particular action

    const onSubmit = e => {
        e.preventDefault();

        //new transaction catch
        const newTransaction = {
            id: Math.floor(Math.random() * 100000),
            text,
            amount : +amount  //turning amount to number
        }

        //passing new transaction to Global state
        addTransaction(newTransaction);

    }

    return (
        <div>
            <h3>Add new Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => SetText(e.target.value)} placeholder="Enter Text" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => SetAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add Transaction</button>

            </form>
        </div>


    );
}