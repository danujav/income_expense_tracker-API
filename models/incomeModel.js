const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({
    user: {
        type: String,
        ref: "User"
    },
    date: {
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
    },
    type:{
        type:String,
        default:"Income"
    }
})

module.exports = mongoose.model('incomes', incomeSchema)