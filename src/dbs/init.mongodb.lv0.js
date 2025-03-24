"use strict";

const mongoose = require("mongoose");

const connectString = `mongodb://localhost:27017/shopDEV`;

mongoose
  .connect(connectString)
  .then((_) => console.log("Mongodb connected"))
  .catch((err) => console.log("Can't connected"));

//dev
if (1 === 1) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}
