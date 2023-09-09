
const mongoose = require("mongoose");


const FoodSchema = new mongoose.Schema({

  task: {
    type: String,
    required: true
  }

  
})


const Food = mongoose.model("Food", FoodSchema);

module.exports = Food