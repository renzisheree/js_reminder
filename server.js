const app = require("./app");
const PORT = process.env.PORT || 3056;
const server = app.listen(PORT, () => {
  console.log("wsv ecommerce started successfully on port ", PORT);
});
