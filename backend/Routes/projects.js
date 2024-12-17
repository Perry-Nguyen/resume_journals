const express = require('express')

const router = express.Router()

router.get('/', (req,res)=>{
    res.json({mssg: 'GET all projects'})
})

router.get('/:id',(req,res)=>{
    res.json({mssg: 'GET single project'})
})

router.post('/',(req,res)=>{
    res.json({mssg:'POST a new project'})
})

router.delete('/:id',(req,res)=>{
    res.json({mssg:'DELLETE a project'})
})

router.patch('/:id',(req,res)=>{
    res.json({mssg: 'update a project'})
})
module.exports = router