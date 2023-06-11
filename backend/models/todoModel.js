const mongoose = require("mongoose");
//route handler
const todoSchema = new mongoose.Schema({
         id: {type: String,required:true},
         title: {type: String,required:true},
         description: {type: String,required:true},
         dueDate: Date,
         status: {type: String,required:true},
    }
)
module.exports = mongoose.model("todo", todoSchema);