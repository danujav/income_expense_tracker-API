const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

router.get('/', async(req, res)=>{
    try {
        const userList = await User.find()
        res.json(userList)

    }catch(err) {
        res.send('Error' + err)
    }
})

router.post('/', async(req, res)=>{
   const user = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
        
   })

   try {
       const u1 = await user.save()
       res.json(u1)
   }catch(err) {
       res.send('Error')
   }
})

router.get('/:id', async(req, res)=>{
    try {
        const user = await User.findById(req.params.id)
        res.json(user)

    }catch(err) {
        res.send('Error' + err)
    }
})

router.put('/:id', async(req, res)=>{
    try {
        const user = await User.findById(req.params.id)
        user.email = req.body.email
        user.name = req.body.name
        user.password = req.body.password
        const u1 = await user.save()
        res.json(u1)

    }catch(err) {
        res.send('Error' + err)
    }
})

router.delete('/:id', async(req, res)=>{
    try {
        const user = await User.findById(req.params.id)
        const u1 = await user.remove()
        res.json(u1)

    }catch(err) {
        res.send('Error' + err)
    }
})

module.exports = router 