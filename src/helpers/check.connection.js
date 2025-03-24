const { default: mongoose } = require("mongoose");
const os = require("os");
const process = require("process");
const _second = 5000;
// count connection connected to db server
const countConnect = () => {
  const numConnections = mongoose.connect.length;
  console.log("Number of connection " + numConnections);
};

//check if mongodb server overloaded
const checkOverload = () => {
  setInterval(() => {
    const numConnections = mongoose.connect.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    const maxConnection = numCores * 5;
    console.log("Active user " + numConnections);
    console.log(`Memory usage : ${memoryUsage / 1025 / 1024} MB `);
    if (numConnections > maxConnection) {
      console.log("Maximum connection exceeded");
    }
  }, _second); // monitor every 5 secs
};
module.exports = { countConnect, checkOverload };
