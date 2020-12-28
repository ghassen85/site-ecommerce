const orderModel = require('../models/orderModel')
module.exports={ 
    createOrder: function(req,res){
        //req.body <==> name : req.body.name,lastname:req.body.lastname..
        orderModel.create(req.body,function(err,Order){
        console.log('cest bon')
        if(err){
            console.log(err)
            res.json({msg:'err',statuts:500,data:null})//500 errur serveur
        }
        else{
            res.json({msg:'utilisateur ajouteé',statuts:200,data:Order})
        }


    })
},getOrder:function(req,res){
    orderModel.find({}).populate('produit').populate('user').sort({name:"asc"}).exec(function(err,Order){//order alphabitique
        if (err){
            res.status(500),json({msg:"errure",status:500,data:null})
        }else{
            res.status(200).json({msg:"get all users",status:200,data:Order})
        }
    })
},getOneorder:function(req,res){
    orderModel.findById({_id:req.params.id}).populate('produit').populate('user').exec(function(err,Order){
        if(err){
            res.status(500).json({msg:"errure",status:500,data:null}
            )
        }
        else{
            res.status(200).json({msg:"get order",status:200,data:Order})
        }

    })
}
 





















}