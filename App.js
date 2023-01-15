const express = require("express");
const home = require("./Pages/Home")
const bolly = require("./Pages/Bollywood")
const tech = require("./Pages/Technology")
const holly = require("./Pages/Hollywood")
const fitness = require("./Pages/Fitness")
const food = require("./Pages/Food")
const app = express();
const cors = require("cors");


app.use(cors());
app.use("/", home);
app.use("/", bolly);
app.use("/", holly);
app.use("/", tech);
app.use("/", fitness);
app.use("/", food);


app.listen(5050,function(){
    console.log("App is running");
})
