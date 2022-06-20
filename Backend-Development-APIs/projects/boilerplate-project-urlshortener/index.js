require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const dns = require("dns");

// Basic Configuration
// const port = process.env.PORT || 3000;
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Your first API endpoint
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.post("/api/shorturl", (req, res) => {
  const url = req.body.url;
  dns.lookup(url, (err, address, family) => {
    console.log({ address });
    console.log({ family });
    console.log({ err });
    if (err) {
      res.status(401).json({
        error: "invalid url",
      });
    }
  });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
