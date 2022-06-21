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

// when get the logs
// {
// "_id": "62b21a15179bfa0908269af7",
// "username": "Aws",
// "count": 0,
// "log": []
// }

// user with logs
// {
// "_id": "62b21a15179bfa0908269af7",
// "username": "Aws",
// "count": 1,
// "log": [
// {
// "description": "Test",
// "duration": 12,
// "date": "Tue Jun 21 2022"
// }
// ]
// }

// when create a log
// {
// "_id": "62b21a15179bfa0908269af7",
// "username": "Aws",
// "date": "Tue Jun 21 2022",
// "duration": 12,
// "description": "Test"
// }

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Create new user
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

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
