const mongoose = require('mongoose')


const Schema = mongoose.Schema

//todo need to make end present or the day they end it
const experienceSchema = new Schema({
    title:{
        type: String,
        require: true
    },

    location:{
        type: String,
        require: true
    },

    jobTitle:{
        type: String,
        require: false
    },

    startDate:{
        type: Date, 
        require: true
    },
    endDate:{
        type: Date, 
        require: false
    },

    description:{
        // bullet points to describe the project
        bulletPoint: { // this could be change where bullet point is on it's separt scheme
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

module.exports = mongoose.model('Experience',experienceSchema)

