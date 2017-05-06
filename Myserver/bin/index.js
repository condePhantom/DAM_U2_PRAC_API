let server=require('../server');
let debug=require('debug')('serverBonis:server');

const port=3000;
server.listen(port);
console.log("server running on port "+port);