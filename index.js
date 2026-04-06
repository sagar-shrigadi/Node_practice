import express from "express";
import fs from "node:fs";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      throw err;
    } else {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/html");
      res.send(data);
    }
  });
});
app.get("/about", (req, res) => {
  fs.readFile("./Pages/about.html", (err, data) => {
    if (err) {
      throw err;
    } else {
      res.setHeader("Content-type", "text/html");
      res.send(data);
    }
  });
});
app.get("/contact", (req, res) => {
  fs.readFile("./Pages/contact.html", (err, data) => {
    if (err) {
      throw err;
    } else {
      res.setHeader("Content-type", "text/html");
      res.send(data);
    }
  });
});
app.get("/*path", (req, res) => {
  fs.readFile("./Pages/404.html", (err, data) => {
    if (err) {
      throw err;
    } else {
      res.setHeader("Content-type", "text/html");
      res.send(data);
    }
  });
});

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Successfully running server on port: ${PORT}`);
});
