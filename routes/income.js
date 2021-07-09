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
        user: req.body.user,
        date: req.body.date,
        amount: req.body.amount, 
        note: req.body.note,
        catagory: req.body.catagory,
        type: req.body.type
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


module.exports = router 