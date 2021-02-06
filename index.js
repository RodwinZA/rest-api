const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

// Import Routes
const postsRoute = require("./routes/posts");

// Connect to DB

mongoose.connect("mongodb://localhost/rest", {useUnifiedTopology: true, useNewUrlParser: true}, () => {
    console.log("Connected to database");
});

// Middleware

app.use("/posts", postsRoute);


// Routes

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/posts", (req, res) => {
    res.send("Posts Page");
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});