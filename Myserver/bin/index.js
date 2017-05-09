let server=require('../server');
let debug=require('debug')('serverBonis:server');

const port=8080;
server.listen(port);
console.log("server running on port "+port);
