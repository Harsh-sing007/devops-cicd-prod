const http = require("http");

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end(`App running in ${ENV} mode 🚀`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
