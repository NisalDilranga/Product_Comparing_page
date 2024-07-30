const app = require("./app");
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const router = require("./router");

const PORT = process.env.PORT || 3002;
const MONGODB_URi = process.env.MONGODB_URi;

app.use(cors());
app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URi);
    console.log("DB Connected");
  } catch (error) {
    console.log("Not Connected" + error);
  }
};
connect();
const server = app.listen(PORT, () => {
  console.log(`server run on ${PORT}`);
});
app.use("/api", router);
