require("dotenv").config();
const express = require("express");
const app = express();

const HOST = process.env.HOST || "0.0.0.0",
  PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, HOST, () => {
  console.log(`App started | PORT ${PORT} | HOST ${HOST}`);
});
