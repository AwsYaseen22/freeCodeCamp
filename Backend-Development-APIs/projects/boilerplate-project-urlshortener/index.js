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

// instead of the DB collect urls in array
let urlArray = [];
// it will hold the short url
let counter = 1;

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Your first API endpoint
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.post("/api/shorturl", (req, res) => {
  const url = req.body.url;
  // let address = url.split(/^https?:\/\//)[1];
  let address = new URL(url).hostname;
  console.log(address);
  dns.lookup(address, (err, address, family) => {
    if (err) {
      res.json({
        error: "invalid url",
      });
    } else {
      if (!urlArray.some((e) => e.original_url === url)) {
        let obj = {
          original_url: url,
          short_url: counter,
        };
        urlArray.push(obj);
        counter++;
        // console.log(obj);
        // console.log({ original_url: "https://freeCodeCamp.org", short_url: 1 });
        res.json(obj);
      } else {
        let result = urlArray.find((e) => e.original_url === url);
        res.json(result);
      }
    }
  });
});

app.get("/api/shorturl/:id", (req, res) => {
  let short = req.params.id;
  let result = urlArray.find((e) => e.short_url === Number(short));
  if (result) {
    res.redirect(result.original_url);
  } else {
    res.json({
      error: "Not found",
    });
  }
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
