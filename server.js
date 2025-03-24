const app = require("./app");

const server = app.listen(3055, () => {
  console.log("wsv ecommerce started successfully on port 3055");
});

process.on("SIGINT", () => {
  server.close(() => console.log("SERVER IS CLOSED"));
});
