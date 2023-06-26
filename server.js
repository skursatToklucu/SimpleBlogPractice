const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("../blog-project/routes/userRoutes");
const blogRoutes = require("../blog-project/routes/blogRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://cshu888:H0p5buvI2SYKMZAZ@blogcluster.yuyydji.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

app.listen(4000, () => console.log("Server running on port 4000"));
