const mongoose = require("mongoose");

const codingSchema = mongoose.Schema({
    
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    icon: {
        type:String,
        
    },
    link:{
        type:String,
        required:true
    }
    ,
    createdAt: {
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model("Coding",codingSchema);