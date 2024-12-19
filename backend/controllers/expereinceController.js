// need a model
const Experience = require('../models/experienceModel')
const mongoose = require('mongoose')



// Get all experience
const getExperiences = async (req,res) =>{
    const experience = await Experience.find({}).sort({"startDate": 1}) // sorting the experience in order to relavent
    res.status(200).json(experience)
}
// GET single experience

// post a single experience

//PUT/update a single experience

// delete a single experience

module.exports = {
    getExperiences
}
