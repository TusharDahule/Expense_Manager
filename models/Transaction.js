const mongoose = require('mongoose');

//create schemas

const TransactionSchema = mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true,'Please add some text']
    },
    amount: {
        type: Number,
        required: [true,'Please add a positive or negative number']


    },
    createdAt: {
        type: Date,
        default: Date.now,  // add date automatically

    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);  // export mongoose model