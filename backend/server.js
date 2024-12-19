require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const projectRoutes = require('./Routes/projects')
const experienceRoutes = require('./Routes/Experience')
// express app

const app = express()

//middleware this will show us what is being use aka get post put and del
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//Routes
app.use('/api/projects',projectRoutes)
app.use('/api/experiences',experienceRoutes)

//connect to db

mongoose.connect(process.env.MONG_URI) // this is a promise
    .then(() => {

        //listening to port 4000
        app.listen(process.env.PORT, () =>{
            console.log("connecting to DB & listening to",process.env.PORT)
        })

    })
    .catch((error)=>{
        console.log(error)
    })


