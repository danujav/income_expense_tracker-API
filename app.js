const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/income-expense'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', ()=>{
    console.log('connected..!')
})

//tell express to that we use json object here
app.use(express.json())

const income = require('./routes/income')
app.use('/income', income)

app.listen(9000, ()=>{
    console.log('Server started..!')
})