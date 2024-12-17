const express = require('express')
const Project = require('../models/projectModel')

const router = express.Router()

router.get('/', (req,res)=>{
    res.json({mssg: 'GET all projects'})
})

router.get('/:id',(req,res)=>{
    res.json({mssg: 'GET single project'})
})

router.post('/', async (req,res)=>{
    const {Title, Start_date,End_date, Description} = req.body

    try{
        const project = await Project.create({Title, Start_date,End_date, Description})
        res.status(200).json(project)
    }catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.delete('/:id',(req,res)=>{
    res.json({mssg:'DELLETE a project'})
})

router.patch('/:id',(req,res)=>{
    res.json({mssg: 'update a project'})
})
module.exports = router