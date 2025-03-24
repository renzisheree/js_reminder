const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();

//init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
//init db

//init router
app.get("/", (req, res, next) => {
  const strCompress = "Hello im Luong";

  return res
    .status(500)
    .json({ msg: "Welcome to JS", metadata: strCompress.repeat(10000) });
});

//handle error

module.exports = app;
