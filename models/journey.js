const mongoose = require("mongoose")
const journeySchema = mongoose.Schema({

destination: {
    type: String,
    required: true
},
seasons: {
    type: String,
    required: true
},
cost: {
    type: Number,
    required: true,
    min: 0, max:8000,
    
}
});

module.exports = mongoose.model("journey",
journeySchema)