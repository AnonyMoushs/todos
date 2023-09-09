const express = require("express");
const mongoose = require("mongoose")
const cors = require('cors');
const app = express()
const PORT = 3001



const FoodModel = require("./models/food")

app.use(express.json());
aapp.use(cors(

  {
    origin: ["https://todos-5c69-rfpbwlahk-anonymoushs.vercel.app"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
  }

));


mongoose.connect("mongodb+srv://francesdonz23:slOncjKIXw8b79fE@todo.8pl4lvv.mongodb.net/food?retryWrites=true&w=majority", {
  useNewUrlParser: true,
})

// slOncjKIXw8b79fE

app.post("/foods", async (req, res) => {

  const foodName = req.body.foodName;


  const food = new FoodModel({

    task: foodName
   

  })

  try {

    await food.save();
   

  } catch (err) {

    console.log(err)
    
  }

})

app.get('/getData', async (req, res) => {
  try {
    const result = await FoodModel.find({});
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while fetching data.');
  }
});


app.put("/updateTask/:id", async (req, res) => {

  const id = req.params.id;
  const task = req.body.task;

    try {

      const updatedTask = await FoodModel.findByIdAndUpdate(id, { task: task }, { new: true });


    } catch(error) {

      console.log(error)

    }


})

app.delete("/deleteTask/:id", async (req, res) => {

  const id = req.params.id;

  try {

    const deletedTask = await FoodModel.findByIdAndDelete(id);

  } catch (error) {

    console.log(error)

  }

})

app.listen(PORT, () => {

  console.log("port is listening", PORT)

})
