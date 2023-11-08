const mongoose = require("mongoose")
const journeySchema = mongoose.Schema({
destination: String,
seasons: String,
cost: Number
})
module.exports = mongoose.model("journey",
journeySchema)