const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const { postDest, getPrice } = require("./controllers/user");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cors())

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("mongodb connected"))
  .catch((e) => console.log(e.message));

app.get("/", (req, res) => {
  res.status(200).json({ message: "server running" });
});

app.post("/post", postDest);

app.get("/api/user/search", getPrice);

app.listen(PORT, () => {
  console.log("server running on 3000");
});
