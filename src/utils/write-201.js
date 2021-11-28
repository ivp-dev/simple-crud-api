function write201(res, data) {
  res.writeHead(201, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(data));
}

module.exports = write201;