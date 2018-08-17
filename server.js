const express = require("express");

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();

app.get("/c/:temp", function(req, res) {
  const tempFahrenheit = ((req.params.temp * 9) / 5 + 32).toFixed(2);
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ fahrenheit: tempFahrenheit }));
});

app.get("/f/:temp", function(req, res) {
  const tempCelsius = (((req.params.temp - 32) * 5) / 9).toFixed(2);
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ celsius: tempCelsius }));
});

app.listen(PORT, HOST);
