const express = require("express");
const app = express();
const port = 8000;


//A coonection to our config that hooks up mongoose
require("./server/config/mongoose.config")

// a line of code for handling post requests
// this line of code allows us to get req.body information
//Make sure this line is close
app.use(express.json(), express.urlencoded({extended:true}));

// A connection to route file
const AllMyRoutes = require("./server/routes/jokes.routes")
AllMyRoutes(app);

app.listen(port, () => console.log(`Running on Port ${port}!!`));