let mongoose=require('mongoose');

let userSchema={
    _id:{type:Number,required:true},
    name: {type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    user:{type:String,required:true},
    date:{type:String,required:true},
    photo:{type:String}
};

module.exports= mongoose.Schema(userSchema);