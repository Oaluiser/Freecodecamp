// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date?", (req, res, next) => {
  let date = new Date(req.params.date);
  let unixDate = date.getTime();
  
  if (isNaN(unixDate)) {
    date = new Date(+req.params.date);
    unixDate = date.getTime();
  } 

  if (req.params.date === undefined) {
    date = new Date();
    unixDate = date.getTime();
  }
  
  req.unix = unixDate;
  req.utc = date.toUTCString();
  console.log(`req.params.date: ${req.params.date}`)
  console.log(`var date: ${date}`)
  console.log(`var unixDate: ${unixDate}`)
  console.log("---")

  if (isNaN(unixDate)) {
    res.send({ error : "Invalid Date" })
  } else {
    res.json({unix: req.unix, utc: req.utc})
  }
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
