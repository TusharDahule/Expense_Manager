import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';


//intial state is passed to createContext
const initialState = {
    transactions: [],
    error: null,
    loading: true    //show spinner

}

//create context

export const GlobalContext = createContext(initialState);

// inorder to use global state we need to provide provider component that wraps all components in App.js

//Provide component

export const GlobalProvider = ({ children }) => {
    //whenever we want to call reducer we use dispatch

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Action will call reducer and dispatch action type and payload
    async function getTransaction() {
        try {
            const res = await axios.get('/api/v1/transactions');   //using axios.get to get info from endpoint
            dispatch({                   // calls reducer to change global state
                type: 'GET_TRANSACTION',
                payload: res.data.data   // access data from api

            });

        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error   //access error from api
            });
        }



    }



    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });

    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });

    }


    return (
        //this provides State info to all wrapped components
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            error: state.error,
            loading: state.loading,
            getTransaction,
            deleteTransaction,//Actions need to be pass here
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
        );
}