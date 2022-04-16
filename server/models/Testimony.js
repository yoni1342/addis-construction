const mongoose = require('mongoose');

const testimonySchema = mongoose.Schema({
    profilePic:{
        type: String,
    },
    name:{
        type: String,
        require: true,
    },
    desc:{
        type: String,
        require: true
    }
}, {timestamps: true})

const Testimony = mongoose.model("Testimony", testimonySchema);
module.exports = Testimony;