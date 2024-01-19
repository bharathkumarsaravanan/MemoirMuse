const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");

const userAuth = require("./src/routes/userRoutes");
mongoose.connect("mongodb+srv://Bharath:PasswordBk@personalprojects.rnjrjgj.mongodb.net/memoirmuseDB", {useNewUrlParser: true})


app.use(cors());
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  });

app.use(userAuth);

app.listen(PORT, () => {
console.log(`${PORT} is running`);
})