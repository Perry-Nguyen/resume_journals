const express = require ('express')
//controller

const {getExperiences} = require('../controllers/expereinceController')

const router = express.Router()

router.get('/', getExperiences)
module.exports = router

