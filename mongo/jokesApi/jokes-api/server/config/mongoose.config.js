// This file esablises our connextion to the database

//Bring in Mongoose
const mongoose = require("mongoose");

//we need to connect to our database
// make sure your database is unique!!
mongoose.connect("mongodb://localhost/jokes_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Found Mongoose"))
    .catch(err => console.log("lost mongoose"))