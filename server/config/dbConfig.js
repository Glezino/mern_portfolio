const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.mongodb_url, {
  //useCreateIndex:true
});

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Error connecting db");
});

connection.on("connected", () => {
  console.log("Connected db");
});

module.exports = mongoose;
