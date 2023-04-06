const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();


const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

const app = express(); // creates an express server

app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());

// Routes for all api


// Route which does not match any, For Error handling
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
   });

// error handler middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
    error: {
    status: error.status || 500,
    message: error.message || "Internal Server Error",
    },
    });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})