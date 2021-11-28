function write204(res, id) {
  res.writeHead(204, { 'Content-Type': 'application/json' })
  res.end();
  //res.end(JSON.stringify({ message: `Person with id: ${id} was removed` }));
}

module.exports = write204;