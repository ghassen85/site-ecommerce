const vModel = require('../models/vendeurModel')
module.exports={ 
    createV: function(req,res){
        //req.body <==> name : req.body.name,lastname:req.body.lastname..
        vModel.create(req.body,function(err,ven){
        console.log('cest bon')
        if(err){
            console.log(err)
            res.json({msg:'err',statuts:500,data:null})//500 errur serveur
        }
        else{
            res.json({msg:'vendeur ajouteé',statuts:200,data:ven})
        }


    })
}







}