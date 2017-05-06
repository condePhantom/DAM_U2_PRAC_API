let express=require('express');
let morgan=require('morgan');
let bodyParser=require('body-parser');
let wagnerCore=require('wagner-core');

//modelos//
require('./models/models')(wagnerCore);
let user=require('./routes/user.router')(wagnerCore);


let server=express();
server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));

server.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
});

//rutas//
server.use('/dam/api/',user);
module.exports=server;