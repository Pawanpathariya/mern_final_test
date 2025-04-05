const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
usercountry:{type:String,required:true},
userstate:{type:String,required:true},
usercity:{type:String,required:true}
})

module.exports = mongoose.model("City",CitySchema)
