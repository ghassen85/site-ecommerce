const cors=require('cors')
const express =require('express')
const db=require('./config/database')
var bodyParser=require('body-parser')
const swaggerUi=require('swagger-ui-express')
const swaggerDocument=require('./config/swagger.json')



const produitRouter=require('./routes/produitRouter')
const userRouter=require('./routes/userRouter')
const orderRouter=require('./routes/orderRouter')
const scRouter=require('./routes/souscollectionRouter')
const cRouter=require('./routes/collectionRouter')
const vRouter=require('./routes/vendeurRouter')
const aRouter=require('./routes/acheteurRoute')




var app=express()
app.use(cors())
app.set('secretKey','azerty')



app.use(bodyParser.urlencoded({extended:false}));// bech ya9ra les valeurs eli ta3thomlou
app.use(bodyParser.json());



app.use('/produits',produitRouter)
app.use('/users',userRouter)
app.use('/orders',orderRouter)
app.use('/scs',scRouter)
app.use('/cs',cRouter)
app.use('/Vends',vRouter)
app.use('/Achts',aRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/',function(req,res){
    res.send('hello world')
})
app.get('/getfile/:image',function(req,res){
    res.sendFile(__dirname+'/images/'+req.params.image)
})
//express doesn't consider not found 404 as an error to handle 
//handle 404 error
app.use(function(req,res,next){
    let err=new Error();
    err.status=404;
    next(err);

});
app.use(function(err,req,res,next){
    console.log(err);
        if(err.status===404)
        res.status(404).json({message:"Path Not found"});
        else
        res.status(500).json({message:"Something looks wrong !!"+err})
});

app.listen(4000,function(){
    console.log('running app on port 4000')
})