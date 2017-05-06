let mongoose=require('mongoose');
let under_score=require('underscore');

module.exports=(wagner)=>{
    mongoose.Promise=global.Promise;
    mongoose.connect('mongodb://localhost:27017/api');

    wagner.factory('db',function(){
        return mongoose
    });

    let User=mongoose.model('User',require('./user.model'),'users');
    let models={User:User};

    under_score.map(models,(val,key)=>{
        wagner.factory(key,function(){
            return val;
        })
    });

}