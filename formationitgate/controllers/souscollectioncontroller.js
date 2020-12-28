const scModel = require('../models/souscolllectionModel')
module.exports={ 
    createSC: function(req,res){
        //req.body <==> name : req.body.name,lastname:req.body.lastname..
        scModel.create(req.body,function(err,Sc){
        console.log('cest bon')
        if(err){
            console.log(err)
            res.json({msg:'err',statuts:500,data:null})//500 errur serveur
        }
        else{
            res.json({msg:'sc ajouteé',statuts:200,data:Sc})
        }


    })
},getAllSc:function(req,res){
      /* populate('order' ,'productName')  display only product name (id is displayed bu default)

    to display just the product name populate('order' ,'productName -_id')

    */
    scModel.find({}).populate({path:'produit',populate:{path:'order'}}).populate('c').exec(function(err,Sc){
        if (err){
            res.status(500),json({msg:"errure",status:500,data:null})
        }else{
            res.status(200).json({msg:"get allsc",status:200,data:Sc})
        }
    })
},getOneSc:function(req,res){
    scModel.findById({_id:req.params.id}).populate('Produit').populate('c').exec(function(err,Sc){
        if(err){
            res.status(500).json({msg:"errure",status:500,data:null}
            )
        }
        else{
            res.status(200).json({msg:"get one sc",status:200,data:Sc})
        }

    })
}
 





















}