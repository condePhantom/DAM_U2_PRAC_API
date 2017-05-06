exports.getUsers=(req,res,User)=>{
    User.find({},(err,found)=>{
        if(err){
            return res.status(500).json({error:err.toString() });
        }
        else{
            res.json({users:found});
        }
    });
};
exports.getUserById=(req,res,User)=>{
    let id;
    try{
        id=req.params.id;
    }catch(exception){
        return res.status(400).json({error:exeption.toString()});
    }
    User.findOne({_id:id},(err,found)=>{
        if(err){
            return res.status(500).json({error:err.toString() });
        }
        else{
            res.json({users:found});
        }
    });
};
exports.createUser=(req,res,User)=>{
    let user;
    try{
        user=req.body;
    }catch(exception){
        return res.status(400).json({error:exeption.toString()});
    }
    User.create(user,(err,inserted)=>{
        if(err){
            return res.status(500).json({error:err.toString()});
        }
        res.json({user:inserted});
    });
};
exports.deleteUser=(req,res,User)=>{
    let id;
    try{
        id=req.params.id;
    }catch(exeption){
        return res.status(400).json({error:exeption.toString()});
    }
    User.remove({_id:id},(err,deleted)=>{
        if(err){
            return res.status(500).json({error:err.toString()});
        }else{
            res.json({users:deleted});
        }
    });
    
};
exports.updateUser=(req,res,User)=>{
    let id;
    let user;
    try{
        id=req.params.id;
        user=req.body;
    }catch(exception){
        return res.status(400).json({error:exeption.toString()});
    }
    
    User.update({_id:id},user,(err,updated)=>{
          if(err){
            return resizeBy.status(500).json({error:err.toString});
        }
        res.json({user:updated});
    });
};
