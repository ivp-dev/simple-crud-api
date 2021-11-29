function write400(res) {
  res.writeHead(400, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ message: "Invalidate parameter" }));
}

module.exports = write400;