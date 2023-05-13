const express = require("express")
const mongoose = require('mongoose');
const questionRouter = require("./router/questionsRouter");
require('dotenv').config()


const app = express()


app.use(express.static('assets'));
app.use(questionRouter);

try {
    app.listen(process.env.PORT)
    mongoose.connect(process.env.URI_DB)
    console.log(`connected at localhost ${process.env.PORT}`);
} catch (error) {
    console.log(error);
}



