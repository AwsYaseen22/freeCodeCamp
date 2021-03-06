const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const bodyParser = require("body-parser");

app.use(cors());
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(bodyParser.json());

let connectionURI = process.env.MONGO_URI;
mongoose.connect(connectionURI, { useNewUrlParser: true }, () => {
  console.log("connected to the DB");
});

let Schema = mongoose.Schema;

// User Schema
let userSchema = new Schema({
  username: { type: String, required: true },
  log: [],
});

let User = new mongoose.model("User", userSchema);

// logger
app.use(({ method, url, query, params, body }, res, next) => {
  console.log(">>> ", method, url);
  console.log(" QUERY:", query);
  console.log(" PRAMS:", params);
  console.log("  BODY:", body);
  const _json = res.json;
  res.json = function (data) {
    console.log(" RESLT:", JSON.stringify(data, null, 2));
    return _json.call(this, data);
  };
  console.log(" ----------------------------");
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/api/users", async (req, res) => {
  const username = req.body.username;
  try {
    let createdUser = await User.create({ username: username });
    res.json({
      username: createdUser.username,
      _id: createdUser._id,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/users", async (req, res) => {
  try {
    let users = await User.find().select({
      _id: true,
      username: true,
      __v: true,
    });
    res.json(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/users/:_id/exercises", async (req, res) => {
  // console.log("POST /api/users/:_id/exercises");
  let { description, duration, date } = req.body;
  duration = Number(duration);
  let id = req.params._id;

  if (new Date(date).getDate() === new Date(date).getDate()) {
    date = new Date(date).toDateString();
  } else {
    date = new Date().toDateString();
  }

  let updateUser = await User.updateOne(
    { _id: id },
    { $push: { log: { description, duration, date } } }
  );
  let updatedFinal = await User.findOne({ _id: id }).select({
    username: true,
    _id: true,
    log: true,
  });
  let temp = { ...updatedFinal._doc };
  let logdetails = temp.log[temp.log.length - 1];
  let result = {
    username: temp.username,
    description: logdetails.description,
    duration: logdetails.duration,
    date: logdetails.date,
    _id: temp._id,
  };
  // updatedFinal.log = updatedFinal.log[updatedFinal.log.length - 1];
  // updatedFinal.duration = updatedFinal.log[0].duration;
  // updatedFinal.date = updatedFinal.log[0].date;
  // updatedFinal.description = updatedFinal.log[0].description;
  // console.log(result);
  return res.json(result);
});

app.get("/api/users/:_id/logs", async (req, res) => {
  let { from, to, limit } = req.query;
  limit = Number(limit);
  let id = req.params._id;
  let foundUser = await User.findOne({ _id: id }).select({
    _id: true,
    username: true,
    log: true,
    count: true,
  });
  // foundUser._doc.count = foundUser._doc.log.length;

  let refined = foundUser._doc;
  refined.count = refined.log.length;

  if (from || to) {
    let fromDate = new Date(0);
    let toDate = new Date();
    if (from) {
      fromDate = new Date(from);
    }
    if (to) {
      toDate = new Date(to);
    }

    fromDate = fromDate.getTime();
    toDate = toDate.getTime();

    refined.log = refined.log.filter((ex) => {
      let exDate = new Date(ex.date).getTime();
      console.log("%%%%%%%%%%%%");
      console.log(exDate, fromDate);
      console.log("%%%%%%%%%%%%");
      return exDate >= fromDate && exDate <= toDate;
    });
    refined.count = refined.log.length;
    foundUser._doc.log = foundUser._doc.log.filter((ex) => {
      let exDate = new Date(ex.date).getTime();
      return exDate >= fromDate && exDate <= toDate;
    });
  }
  if (limit) {
    // foundUser.log = foundUser.log.slice(0, Number(limit));
    refined.log = refined.log.slice(0, limit);
    refined.count = refined.log.length;
  }
  console.log("**********************");
  console.log(refined);
  console.log("**********************");

  res.json(refined);
  // res.json(refined);
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
