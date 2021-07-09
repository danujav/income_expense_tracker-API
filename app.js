const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/income-expense'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

const income = require('./routes/income')
app.use('/income', income)

con.on('open', ()=>{
    console.log('connected..!')
})

app.listen(9000, ()=>{
    console.log('Server started..!')
})