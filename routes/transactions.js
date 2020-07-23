//router file
const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions'); //importing controllers

//router.get('/', (req, res) => res.send('Hello'));

router
    .route('/')
    .get(getTransactions)    //request_type(controller function)
    .post(addTransaction);

router
    .route('/:id')
    .delete(deleteTransaction);

module.exports = router;