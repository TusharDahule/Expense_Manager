//file used to connect to database

const mongoose = require('mongoose');


// Async functions will always return a value.
//Using async simply implies that a promise will be returned, and if a promise is not returned,
//JavaScript automatically wraps it in a resolved promise with its value.

const connectDB = async () => {
    try {
        //connect mongoose with Mongo_URI

        const conn = await mongoose.connect(process.env.MONGO_URI, { //to stop giving warnings
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true

           
        });   //this will return promise therefore we will use await. you can use then also.

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);

    } catch (err) {

        console.log(`Error: ${err.message}`.red);
        process.exit(1); //shutdown

    }

}


module.exports = connectDB;