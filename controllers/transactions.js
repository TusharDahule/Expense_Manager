const Transaction = require('../models/Transaction');   // importing model(Schema) , so we can use find, create ,remove

//controller file



//@desc get all transactions
//@route 'GET /api/v1/transactions'
//@access public

// export getTransactions
exports.getTransactions = async (req, res, next) => {  // use async for mongoose methods
    try {
        const transactions = await Transaction.find(); // it is promise therefore use await

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
             
        });

    } catch (err) {
        return res.status(500).json({   //use send for errors
            success: false,
            error: 'Server error'

        });
    }
    
}


//@desc add transaction
//@route 'POST /api/v1/transactions'
//@access public

// export getTransactions
exports.addTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body;    // take posted inputs array

        const transaction = await Transaction.create(req.body);   //modelname.create(passed data)

        return res.status(201).json({ //201 code for successful post & use status instead of send for post
            success: true,
            data: transaction
        });

    } catch (err) {
        if (err.name === 'ValidationError') { // client error
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                status: false,
                data: messages

            });

        }
        else { // server error

            return res.status(500).json({   //use send for errors
                success: false,
                error: 'Server error'

            });


        }


    }


    
}

//@desc delete transaction
//@route 'DELETE /api/v1/transactions/:id'
//@access public

// export deleteTransactions
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = Transaction.findById(req.params.id);  //first check whether the id is present or not

        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: 'Transaction not found' //throw error
            });
        }

        await transaction.remove();  // remove tranaction

        return res.status(200).json({
            success: true,
            data: {}

        });

    } catch (err) {

        return res.status(500).json({   //use send for errors
            success: false,
            error: 'Server error'

        });

    }
}