// We need to use the animal model
const Jokes = require("../models/jokes.models");

//create
module.exports.createJoke = (req, res) => {
    Jokes.create(req.body)
        .then(newJokes => res.json(newJokes))
        .catch(err => res.json({message: "Something Went Wrong With Creating Joke", err: err}))
}


//read one
module.exports.findOneJoke = (req, res) => {
    Jokes.find({_id: req.params._id})
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json({message: "Something Went Wrong With Finding One Joke", err: err}))
}


//read all
module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json({message: "Something Went Wrong With Finding All Jokess", err: err}))
}

//update
module.exports.updateJoke = (req, res) => {
    Jokes.findOneandUpdate({_id: req.params._id}, req.body)
        .then(updatedAnimal => res.json(updatedJoke))
        .catch(err => res.json({message: "Something Went Wrong With Updating One Joke", err: err}))
}

//delete
module.exports.deleteJoke = (req, res) => {
    Jokes.deleteOne({_id: req.params._id})
        .then(deletedJoke => res.json(deletedJoke))
        .catch(err => res.json({message: "Something Went Wrong With Deleting One Joke", err: err}))
}