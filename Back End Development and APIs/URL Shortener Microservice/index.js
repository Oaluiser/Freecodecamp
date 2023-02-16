require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser")
let originalUrl = [];
let shortUrl = [];

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.post("/api/shorturl", (req, res) => {
  if (req.body.url.startsWith("http://") || req.body.url.startsWith("https://")) {
    originalUrl.push(req.body.url);
    let originalIndex = originalUrl.indexOf(req.body.url);
    shortUrl.push(originalIndex);  
    res.json({ original_url: req.body.url, short_url: originalIndex });
  } else {
    res.json({ error: "invalid url" });
  };
});

app.get("/api/shorturl/:short_url", (req, res) => {  
  if (shortUrl.includes(parseInt(req.params.short_url))) {
    res.redirect(originalUrl[req.params.short_url]);
  } else {
    res.json({ error: "No short URL found for the given input" });
  };
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
