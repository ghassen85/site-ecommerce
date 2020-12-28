const produitModel = require('../models/produitModel')
module.exports={
    createProduit:function(req,res){
        produitModel.create({//image:req.file.filename,
            name:req.body.name,
            prix:req.body.prix,
            souscollection:req.body.souscollection,
            description:req.body.description},function(err,produit){
            if(err){
                console.log(err)
                res.json({msg:"erreur",status:500,data:null})
            }else{
                res.json({msg:"produit ajouteé",status:200,data:produit})
            }
        })
    },createproduitimage: function (req, res) {
        //req.body <==> name : req.body.name,lastname:req.body.lastname..
        produitModel.create({
             image: req.file.filename, 
             name: req.body.name, 
             prix:req.body.prix, 
             souscollection:req.body.souscollection,

             description:req.body.description}, function (err, produit) {
          console.log('cest bon')
          if (err) {
            console.log(err)
            res.json({ msg: 'err' + err, statuts: 500, data: null })//500 errur serveur
          }
          else {
    
            res.json({ msg: 'Produit ajouteé', statuts: 200, data: produit})
    
          }
    
        })
      },getProduit:function(req,res){
        produitModel.find({}).populate('order').populate('souscollection').exec(function(err,produit){   if(err){
            console.log(err)
            res.json({msg:"erre",status:500,data:null})
        }else{
            res.json({msg:"getproduits",status:200,data:produit})
        }})
     
    },findProduit:function(req,res){
        produitModel.findById({_id:req.params.id}).populate('order').populate('souscollection').exec(function(err,user){
            if(err){
                res.status(500).json({msg:"errure",status:500,data:null}
                )
            }
            else{
                res.status(200).json({msg:"gfind",status:200,data:user})
            }
        
        })
    },
    
    updateProd:function(req,res){
        produitModel.findByIdAndUpdate({_id:req.params.id},req.body,function(err,prod){
            if(err){
                res.status(500).json({msg:"errure"+err,status:500,data:null}
                )
            }
            else{
                res.status(200).json({msg:"gfind",status:200,data:prod})
            }
        
        })
    },deleteProductById: function (req, res) {
        produitModel.findByIdAndDelete({ _id: req.params.id }, function (err, produit) {
            if (err) {
                res.status(500).json({ msg: "couldn't delete", status: 500, data: null })
            }
            else {
                res.status(200).json({ msg: "one product deleted", status: 200, data: produit })
            }
        })
    }



}
 