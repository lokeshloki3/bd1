const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server started at port no. 3000");
});

app.get("/", (request, response) => {
  response.send("Hello");
});

app.post("/cars/brand", (request, response) => {
  const { name, brand } = request.body;
  console.log(name);
  console.log(brand);
  response.send("Cars submitted successfully");
});

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/myDatabase")
.then(() => {
  console.log("Connect to MongoDB");
})
.catch((err)=>{
  console.log("Failed to connect with MongoDB",err);
})