const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/register");
const cors = require("cors");
const url =
  "mongodb+srv://divijoshi0108:mongodb12345@crud.gfimmnh.mongodb.net/savierdb?retryWrites=true&w=majority";
const app = express();

app.use(cors());
app.use(express.json());

const port = 3002;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");

    // Further code execution or server setup goes here
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

app.post("/signup", async (req, res) => {
  const user = new UserModel({
    userName: req.body.userName,
    emailId: req.body.emailId,
    password: req.body.password,
  });
  try {
    await user.save();
    res.status(200).json({ message: 'Success' });
  } catch (err) {
    console.log(err);
  }
});

app.post("/signin", async (req, res) => {
  const { emailId, password} = req.query;
  
  try {
    const foundUser = await UserModel.findOne({ emailId, password}).exec();
    
    if (foundUser) {
      return res.json(foundUser);
    } else {
      return res.send('Invalid credentials');
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
}
)

app.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    console.error("Error reading data from MongoDB", err);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
