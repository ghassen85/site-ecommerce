const cModel = require('../models/collectionModel')
module.exports={ 
    createC: function(req,res){
        //req.body <==> name : req.body.name,lastname:req.body.lastname..
        cModel.create(req.body,function(err,C){
        console.log('cest bon')
        if(err){
            console.log(err)
            res.json({msg:'err',statuts:500,data:null})//500 errur serveur
        }
        else{
            res.json({msg:'sc ajouteé',statuts:200,data:C})
        }


    })
},getAllC:function(req,res){
    cModel.find({}).populate('sc').exec(function(err,C){
        if (err){
            res.status(500),json({msg:"errure",status:500,data:null})
        }else{
            res.status(200).json({msg:"get allsc",status:200,data:C})
        }
    })
},getOneC:function(req,res){
    cModel.findById({_id:req.params.id}).populate('sc').exec(function(err,C){
        if(err){
            res.status(500).json({msg:"errure",status:500,data:null}
            )
        }
        else{
            res.status(200).json({msg:"get ALl sc",status:200,data:Sc})
        }

    })
}
 





















}