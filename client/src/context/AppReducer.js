export default (state, action) => {
    switch (action.type) {

        case 'GET_TRANSACTION':
            return {
                ...state,
                loading: false,
                transactions: action.payload  //taking data from payload made in global state getTransaction function

            }
        case 'DELETE_TRANSACTION':
            return {
                ...state, // reducer creates new state
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)

            }
        case 'ADD_TRANSACTION':
            return {
                ...state, // reducer creates new state
                transactions: [...state.transactions, action.payload ]

            }
        case 'TRANSACTION_ERROR':
            return {
                ..state,
                error: action.payload
            }
        default:
            return state;
    }

}