var http = require('http');
var leftPad = require('left-pad');
var NodeTradfriClient = require("node-tradfri-client");
var versions_server = http.createServer( (request, response) => {
  response.end('Versions: ' + JSON.stringify(process.versions) + ' left-pad: ' + leftPad(42, 5, '0'));
});
versions_server.listen(3000);
