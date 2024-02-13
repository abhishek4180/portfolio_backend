const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    proficiency: String,
    
    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Skill", skillSchema);