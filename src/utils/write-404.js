function write404(res) {
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: "Person not found" }));
}

module.exports = write404;