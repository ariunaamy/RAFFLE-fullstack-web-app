const express = require('express');
const cors = require('cors');

// controllers
const rafflesController = require('./controllers/rafflesController');

const app = express(); 

app.use(cors());
app.use(express.json());

//controllers
app.use('/raffles', rafflesController);

app.get("/test",(req, res) => {
    res.status(200).json({data: "test route"});
}); 

app.get("/",(req, res) => {
    res.status(200).json({data: "Welocme To Raffle App!"});
}); 

module.exports = app;