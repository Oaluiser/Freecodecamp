const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const bodyParser = require("body-parser")
let usersDB = [];
let exercisesDB = [];

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post("/api/users", (req, res) => {
  usersDB.push({ 
    username: req.body.username, 
    _id: Math.random().toString(36).slice(2)
  })
  res.send(usersDB.find((item) => item.username === req.body.username))
});

app.get("/api/users", (req, res) => {
  res.send(usersDB)
});

app.post("/api/users/:_id/exercises", (req, res) => {
  let id = req.params._id;
  let description = req.body.description;
  let duration = req.body.duration;
  let date = req.body.date;
  let username = usersDB.find(item => item._id === id);
  
  if (date === "" || date === undefined) {
    date = new Date().toDateString();
  } else {
    date = new Date(req.body.date).toDateString();
  }
  
  if (description === "" || duration === "") {
    res.send({ error: "Description and Duration are required."});
  } else { 
    exercisesDB.push({
      _id: id,
      username: username.username,
      date: date,
      duration: Number(duration), 
      description: description
    });
    res.send(exercisesDB[exercisesDB.length - 1]);
  };
});

app.get("/api/users/:_id/logs", (req, res) => {
  let user = usersDB.find(item => item._id === req.params._id);
  let allExercises = exercisesDB.filter(item => item._id === req.params._id)
  let count = allExercises.length;
  let compareFrom = new Date();
  let compareTo = new Date();

  if (!(req.query.from === undefined)) {
    compareFrom = new Date(req.query.from);
    allExercises = allExercises.filter(item => new Date(item.date) > compareFrom);
  }
  if (!(req.query.to === undefined)) {
    compareTo = new Date(req.query.to);
    allExercises = allExercises.filter(item => new Date(item.date) < compareTo);
  }
  if (req.query.limit !== undefined) {
    allExercises = allExercises.slice(allExercises.length - req.query.limit, allExercises.length);
  }
  
  res.send({ 
    _id: user._id,
    username: user.username,
    count: count,
    log: allExercises
  });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
