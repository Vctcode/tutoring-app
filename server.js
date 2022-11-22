// Creating an express server
const express = require("express");
const connectDB = require("./database");
require('dotenv').config(); // allows us to use the environmental variables in the .env
const { PORT } = process.env;

// Connect to db
connectDB();

// Initialise express
const app = express();

// Initialise express middleware
app.use(express.json({ extended: false }));

// Create a basic express route
app.get("/", (req, res) =>
  res.json({
    message: "Welcome to the Tutoring app!",
  })
);

// Create a PORT
const port = process.env.PORT || PORT;

// Listen to connection
app.listen(port, () => console.log(`app running on port ${port}`))
