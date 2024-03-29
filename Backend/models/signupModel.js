const mongoose = require('mongoose');

const SignupTemplate = mongoose.Schema({
    fname:{
        type: String,
        required: true,
    },
    lname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model("users",SignupTemplate);