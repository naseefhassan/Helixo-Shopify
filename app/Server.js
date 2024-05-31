const dotenv = require("dotenv");
const express = require("express");
const bodyparser = require("body-parser");
dotenv.config();
const MongoConnect = require("./config/config");
const port = 786;
const app = express();
const cors = require('cors')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors())

MongoConnect.then(() => {
  console.log("MongoDB database connected successfully");

  app.listen(port, () => {
    console.log(`server is rinning at http://localhost:${port}`);
  });
}).catch((error) => {
  console.log("Error while connecting to mongoDB", error);
  process.exit(1);
});
