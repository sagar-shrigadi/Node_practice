import http from "node:http";
import fs from "node:fs";

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log("home page successfully finished reading!");
        res.statusCode = 200;
        res.setHeader("content-type", "text/html");
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    fs.readFile("./Pages/about.html", (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log("about page successfully read!");
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.end(data);
      }
    });
  } else if (req.url === "/contact") {
    fs.readFile("./Pages/contact.html", (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log("contact page successfully read!");
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.end(data);
      }
    });
  } else {
    fs.readFile("./Pages/404.html", (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log("error page successfully read!");
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.end(data);
      }
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`server running at ${hostname}:${port}`);
});
