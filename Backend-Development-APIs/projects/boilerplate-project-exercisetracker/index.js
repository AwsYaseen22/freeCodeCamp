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
let userSchema = new Schema(
  {
    username: { type: String, required: true },
    log: [],
  }
  // {
  //   toObject: { virtuals: true },
  // }
);

userSchema.virtual("count").get(function () {
  return this.log.length;
});

let User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Create new user
// You can POST to /api/users with form data username to create a new user.
// Waiting:The returned response from POST /api/users with form data username will be an object with username and _id properties.
app.post("/api/users", async (req, res) => {
  const username = req.body.username;
  try {
    let createdUser = await User.create({ username: username });
    res.json({
      username: createdUser.username,
      _id: createdUser._id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

/*
You can make a GET request to /api/users to get a list of all users.
Waiting:The GET request to /api/users returns an array.
Waiting:Each element in the array returned from GET /api/users is an object literal containing a user's username and _id.
*/
app.get("/api/users", async (req, res) => {
  try {
    let users = await User.find().select({
      _id: true,
      username: true,
      __v: true,
    });
    console.log(users);
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

/*
You can POST to /api/users/:_id/exercises with form data description, duration, and optionally date. If no date is supplied, the current date will be used.
Waiting:The response returned from POST /api/users/:_id/exercises will be the user object with the exercise fields added.
*/
app.post("/api/users/:_id/exercises", async (req, res) => {
  let { description, duration, date } = req.body;
  let id = req.params._id;
  // console.log({ id });
  // console.log({ description });
  // console.log({ duration });
  // console.log({ date });
  date =
    new Date(date).toDateString() !== "Invalid Date" ||
    new Date().toDateString();
  let user = await User.findOne({ _id: id });
  let obj = {
    username: user.username,
    description: description,
    duration: duration,
    date: date,
    _id: id,
  };
  let updateUser = await User.updateOne(
    { _id: id },
    { $push: { log: { description, duration, date } } }
  );
  let updatedFinal = await User.findOne({ _id: id });
  console.log(updatedFinal);
  res.json(obj);
});

/*
You can make a GET request to /api/users/:_id/logs to retrieve a full exercise log of any user.
Waiting:A request to a user's log GET /api/users/:_id/logs returns a user object with a count property representing the number of exercises that belong to that user.
Waiting:A GET request to /api/users/:id/logs will return the user object with a log array of all the exercises added.
Waiting:Each item in the log array that is returned from GET /api/users/:id/logs is an object that should have a description, duration, and date properties.
Waiting:The description property of any object in the log array that is returned from GET /api/users/:id/logs should be a string.
Waiting:The duration property of any object in the log array that is returned from GET /api/users/:id/logs should be a number.
Waiting:The date property of any object in the log array that is returned from GET /api/users/:id/logs should be a string.. Use the dateString format of the Date API.
*/
app.get("/api/users/:_id/logs", async (req, res) => {
  let id = req.params._id;

  let foundUser = await User.findOne({ _id: id }).select({
    _id: true,
    username: true,
    log: true,
    count: true,
  });
  foundUser.count = foundUser.count;
  console.log(foundUser.count);
  console.log(foundUser.count);
  console.log(foundUser);
  res.json(foundUser);
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
