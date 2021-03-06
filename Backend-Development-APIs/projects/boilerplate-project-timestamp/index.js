// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api/", (req, res) => {
  let result = {
    unix: new Date().getTime(),
    utc: new Date().toUTCString(),
  };
  res.json(result);
});

app.get("/api/:date", (req, res) => {
  let date = req.params.date;

  let unix, utc;
  if (Number.isInteger(Number(date))) {
    utc = new Date(Number(date)).toUTCString();
    unix = Number(date);
  } else if (!new Date(date).getDate()) {
    res.status(401).json({ error: "Invalid Date" });
  } else {
    unix = new Date(date).getTime();
    utc = new Date(date).toUTCString();
  }
  let result = {
    unix: unix,
    utc: utc,
  };
  res.json(result);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
