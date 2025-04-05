const moongoose = require("mongoose");

const countrySchema = new moongoose.Schema({
Country:{type:String,required:true}
})

module.exports = moongoose.model("Country",countrySchema)