const express = require('express')
const router = express.Router()
const Expense = require('../models/expenseModel')

router.get('/', async(req, res)=>{
    try {
        const expenseList = await Expense.find()
        res.json(expenseList)

    }catch(err) {
        res.send('Error' + err)
    }
})

router.post('/', async(req, res)=>{
   const expense = new Expense({
        date: req.body.date,
        amount: req.body.amount, 
        note: req.body.note,
        catagory: req.body.catagory
   })

   try {
       const e1 = await expense.save()
       res.json(e1)
   }catch(err) {
       res.send('Error')
   }
})

router.get('/:id', async(req, res)=>{
    try {
        const expense = await Expense.findById(req.params.id)
        res.json(expense)

    }catch(err) {
        res.send('Error' + err)
    }
})

router.put('/:id', async(req, res)=>{
    try {
        const expense = await Expense.findById(req.params.id)
        expense.date = req.body.date
        expense.amount = req.body.amount
        expense.note = req.body.note
        expense.catagory = req.body.catagory
        const e1 = await expense.save()
        res.json(e1)

    }catch(err) {
        res.send('Error' + err)
    }
})

router.delete('/:id', async(req, res)=>{
    try {
        const expense = await Expense.findById(req.params.id)
        const e1 = await expense.remove()
        res.json(e1)

    }catch(err) {
        res.send('Error' + err)
    }
})

module.exports = router 