var mongoose = require('mongoose')
const Schema = mongoose.Schema
const User=require('./userModel')
var Acheteur = mongoose.Schema({
 NUMC:{
     type:String,
     require:true
 }
    
})
module.exports = User.discriminator('Acht',Acheteur);//User esm lcollection fel base des donneés

