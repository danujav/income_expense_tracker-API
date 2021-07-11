const express = require('express')
const router = express.Router()
const Income = require('../models/incomeModel')

router.get('/', async(req, res)=>{
    try {
        const incomeList = await Income.find()
        res.json(incomeList)

    }catch(err) {
        res.send('Error' + err)
    }
})

router.post('/', async(req, res)=>{
   const income = new Income({
        dates: req.body.dates,
        amount: req.body.amount, 
        note: req.body.note,
        catagory: req.body.catagory
   })

   try {
       const i1 = await income.save()
       res.json(i1)
   }catch(err) {
       res.send('Error')
   }
})

router.get('/:id', async(req, res)=>{
    try {
        const income = await Income.findById(req.params.id)
        res.json(income)

    }catch(err) {
        res.send('Error' + err)
    }
})

router.put('/:id', async(req, res)=>{
    try {
        const income = await Income.findById(req.params.id)
        income.dates = req.body.dates
        income.amount = req.body.amount
        income.note = req.body.note
        income.catagory = req.body.catagory
        const i1 = await income.save()
        res.json(i1)

    }catch(err) {
        res.send('Error' + err)
    }
})

router.delete('/:id', async(req, res)=>{
    try {
        const income = await Income.findById(req.params.id)
        const i1 = await income.remove()
        res.json(i1)

    }catch(err) {
        res.send('Error' + err)
    }
})

module.exports = router 