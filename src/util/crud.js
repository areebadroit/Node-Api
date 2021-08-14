export const getOne = model => async(req,res)=>{
    try{
        const doc = await model.findOne({_id: req.params.id});
        if(!doc){
            res.status(404).send({message:"NOT FOUND"});
        }
        console.log(doc);
        res.status(200).json({data:doc});
    }catch(err){
        console.log(err);
        res.status(400).send({message:"BAD REQ"});
    }
}

export const getMany = model => async(req,res)=>{
    
}

export const getAll = model => async(req,res)=>{
    try{
        const doc = await model.find();
        if(!doc){
            res.status(404).send({message:"NOT FOUND"});
        }
        //console.log(doc);
        res.status(200).json({data:doc});
    }catch(err){
        console.log(err);
        res.status(400).send({message:"BAD REQ"});
    }
}

export const createOne = model => async(req,res)=>{
    try{
        const doc = await model.create(req.body);
        //console.log(doc);
        res.status(201).json({data:doc});
    }catch(err){
        console.log(err);
        res.status(400).send({message:"BAD REQ"});
    }
}

export const updateOne = model => async(req,res)=>{
    try{
        const doc = await model.findOneAndUpdate({_id: req.params.id},req.body,{new:true}).exec();
        if(!doc){
            res.status(404).send({message:"NOT FOUND"});
        }
        console.log(doc);
        res.status(200).json({data:doc});
    }catch(err){
        console.log(err);
        res.status(400).send({message:"BAD REQ"});
    }
}

export const removeOne = model => async(req,res)=>{
    try{
        const doc = await model.findOneAndRemove({_id: req.params.id }).exec();
        if(!doc){
            res.status(404).send({message:"NOT FOUND"});
        }
        console.log(doc);
        res.status(200).json({data:doc});
    }catch(err){
        console.log(err);
        res.status(400).send({message:"BAD REQ"});
    }
}

export const crudControllers = model=>({
    removeOne:removeOne(model),
    updateOne:updateOne(model),
    getMany:getMany(model),
    getAll:getAll(model),
    getOne:getOne(model),
    createOne:createOne(model)
})