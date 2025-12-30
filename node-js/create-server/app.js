const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/assets-routes");
const app = express();

app.listen(3000, () => {
  console.log("Server started with port", 3000);
});

app.use(bodyParser.json());
app.use("/api", routes);
