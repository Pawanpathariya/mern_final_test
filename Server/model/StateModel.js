const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema({
country:{type:String,required:true},
state:{type:String,required:true}
})

module.exports = mongoose.model("State",StateSchema)
