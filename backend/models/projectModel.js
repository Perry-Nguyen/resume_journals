const { text } = require('express')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

//just in case you need this
// const bulletScheme = new Schema({
//     text: {
//         type: String
//     }
// })



const projectScheme = new Schema({
    Title: {
        type: String,
        require: true
    },
    Start_date:{
        type: Date, 
        require: false
    },
    End_date:{
        type: Date,
        require: false
    },
    Description:{
        // bullet points to describe the project
        Bullet_point: { // this could be change where bullet point is on it's separt scheme
            type: [String],
            require: true,
            validate: {
                validator: function(value) {
                    return value.length > 0; // Ensure at least one bullet point is here
                },
                message: 'At least one bullet point is required'
            },
        },
        

    }    
})


module.exports = mongoose.model('Project',projectScheme)


