const express = require("express");
const port = process.env.PORT || 4444;

const app = express();

app.use("/api");

app.listen(port, () => {
  console.log(`server is connected to port ${port}`);
});
