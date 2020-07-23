const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');


// tell dotenv where is config file
dotenv.config({ path: './config/config.env' });


connectDB();

//call transactions router
const transactions = require('./routes/transactions');


const app = express(); //intialize express app

//get request
//app.get('/', (req, res) => res.send('Hello'));

app.use(express.json()); 

app.use('/api/v1/transactions', transactions);   // APP will use router with main link
//accessing port number using global variables
const PORT = process.env.PORT || 5000;

//start server on port
app.listen(PORT , console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));