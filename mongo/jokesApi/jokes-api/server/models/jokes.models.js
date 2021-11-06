// Bring In Mongoose
const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup: String,
    punchline: String
});

//Finalize Setup
const Jokes = mongoose.model("Jokes", JokesSchema);

//we need to export this model so we can use it in our project
module.exports = Jokes;