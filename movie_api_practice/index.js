const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const movies = [

  { id: 1, title: "Infinite War", price: "N500" },
  { id: 2, title: "Infinites", price: "N300" },
  { id: 3, title: "Game of Thrones", price: "N600" },
  { id: 4, title: "The Blacklist", price: "N400" },
  { id: 5, title: "The Walking Dead", price: "N700" },
  { id: 6, title: "The Accountant", price: "N1000" },
  { id: 7, title: "Money Heist", price: "N500" },
  { id: 8, title: "The 100", price: "N200" },
  { id: 9, title: "The Dynasty", price: "N1200" },
  { id: 10, title: "Furious 9", price: "N1500" },
];

app.get("/", (req, res) => {
  res.send("Welcome to Fuchia Cinema!!!!");
});

app.get("/api/movies", (req, res) => {
  res.send(movies);
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
