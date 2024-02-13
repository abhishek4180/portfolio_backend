const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    thumbnail: {
        type:String,
        required:true
    },
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    github: {
        type:String,
        required:true
    }
    ,
    url: {
        type:String,
        required:true
    }
    ,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Project",projectSchema);