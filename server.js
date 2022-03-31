"use strict";
const cors = require("cors");
const express = require("express");

const app = express();
const HOST = process.env.HOST || "0.0.0.0",
  PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(PORT, HOST, (error) => {
  if (error) console.log(error.stack);

  console.log(`[${HOST}:${PORT}] Up!`);
});
