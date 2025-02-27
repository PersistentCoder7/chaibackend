const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const www = process.env.WWW || "./";

/*
app.use(express.static(www));
console.log(`serving ${www}`);
app.get('*', (req, res) => {
    res.sendFile(`index.html`, { root: www });
});*/

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/twitter", (req, res) => {
  res.send("Prabhu Singh");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Youtube</h2>");
});

app.get("/new", (req, res) => {
  res.json({ message: "Hello, World!" }).end();
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
