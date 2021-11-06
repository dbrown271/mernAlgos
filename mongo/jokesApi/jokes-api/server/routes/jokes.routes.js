const JokesController = require("../controllers/jokes.controller")

module.exports = (app) => {
    //Create
    app.post("/api/jokes/create", JokesController.createJoke)
    //Read One
    app.get("/api/jokes/:_id", JokesController.findOneJoke)
    //Read All
    app.get("/api/jokes/", JokesController.findAllJokes)
    //Update
    app.put("/api/jokes/update/:_id",JokesController.updateJoke)
    //Delete
    app.delete("/api/jokes/delete/:_id",JokesController.deleteJoke)
}