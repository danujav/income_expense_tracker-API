const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    dates: {
        type: Date,
        required: true,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true
    },
    note: {
        type: String,
        recatquired: false
    },
    catagory: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('expenses', expenseSchema)