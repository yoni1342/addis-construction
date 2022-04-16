const mongoose = require('mongoose');

const workSchema = mongoose.Schema({
    image:{
        type: String,
    },
    title:{
        type: String,
        require: true,
        unique: true,
    },
    desc:{
        type: String,
        require: true
    }
}, {timestamps: true})

const Works = mongoose.model("Works", workSchema);
module.exports = Works;