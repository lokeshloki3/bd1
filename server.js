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
