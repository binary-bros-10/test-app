const http = require("http");

const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    res.end("Hello from DeployIt!");
  })
  .listen(port, () => {
    console.log(`Running on ${port}`);
  });