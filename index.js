const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const userStatusRoute = require("./routes/userStatus");

const app = express();
const PORT = process.env.PORT || 4242;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

app.use("/api", userStatusRoute);

app.get("/", (req, res) => {
  res.send("ServiceMatch backend running.");
});

app.listen(PORT, () => console.log(`✅ Server is running on port ${PORT}`));
