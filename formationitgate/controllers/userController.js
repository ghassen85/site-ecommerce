const userModel = require('../models/userModel')
const jwt = require("jsonwebtoken")
require('dotenv').config();
const mailer = require("nodemailer");


var JWT_KEY = 'azerty'
module.exports = {
  createUser: function (req, res) {
    //req.body <==> name : req.body.name,lastname:req.body.lastname..
    userModel.create({ name: req.body.name, lastname: req.body.lastname, email: req.body.email, password: req.body.password ,order:req.body.order}, function (err, User) {
      console.log('cest bon')
      if (err) {
        console.log(err)
        res.json({ msg: 'err' + err, statuts: 500, data: null })//500 errur serveur
      }
      else {

        res.json({ msg: 'utilisateur ajouteé', statuts: 200, data: User })

      }

    })
  },createUserimage: function (req, res) {
    //req.body <==> name : req.body.name,lastname:req.body.lastname..
    userModel.create({ image: req.file.filename, name: req.body.name, lastname: req.body.lastname, email: req.body.email, password: req.body.password,order:req.body.order }, function (err, User) {
      console.log('cest bon')
      if (err) {
        console.log(err)
        res.json({ msg: 'err' + err, statuts: 500, data: null })//500 errur serveur
      }
      else {

        res.json({ msg: 'utilisateur ajouteé', statuts: 200, data: User })

      }

    })
  }, getAllUsers: function (req, res) {
    userModel.find({}).populate('order').exec(function (err, user) {
      if (err) {
        res.status(500), json({ msg: "errure", status: 500, data: null })
      } else {
        res.status(200).json({ msg: "get all usrs", status: 200, data: user })
      }
    })
  }, getOneUser: function (req, res) {
    userModel.findById({ _id: req.params.id }).populate('order').exec(function (err, user) {
      if (err) {
        res.status(500).json({ msg: "errure", status: 500, data: null }
        )
      }
      else {
        res.status(200).json({ msg: "get ALl users", status: 200, data: user })
      }

    })
  },
  updateUserbyid: function (req, res) {
    userModel.updateOne({ _id: req.params.id }, {$set:req.body
     /*  {ç
        //  image: req.file.filename,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
      } */
    
    
    }, { new: true, runValidators: true, context: 'query' }, function (err, user) {
      console.log('idddddd', req.params.id);
      if (err) {
        res.status(500).json({ msg: "errure" + err, status: 500, data: null }
        )
      }
      else {

        res.status(200).json({ msg: "update ALl users", status: 200, data: user })

      }


    })
  }//m'affichich lo5ra t'affichi (findbyInanyupdate)
  , deleteUserbyId: function (req, res) {
    userModel.findByIdAndDelete({ _id: req.params.id }).populate('Order').exec(function (err, user) {
      if (err) {
        res.status(500).json({ msg: "errure", status: 500, data: null })

      }
      else {

        res.status(200).json({ msg: "deleted ", status: 200, data: user })
      }
    })
  },

/*login:function(req,res){



    userModel.find({ email: req.body.email })

    .exec()

    .then(user => {

        console.log('userrrr',user)



  if (user.length < 1) {

    return res.status(401).json({

      message: "email failed"

    });

  }

  bcrypt.compare(req.body.password, user[0].password, (err, result) => {

      console.log('passssss',user[0].password);

      console.log('passssss2222',user.password);

    if (err) {

      return res.status(401).json({

        message: "password not found"

      });

    }

    if (result) {

        console.log('insijeem',user[0])

      const token = jwt.sign(

        {

            

          email: user[0].email,

          userId: user[0]._id

        },

        req.app.get('secretKey'),

        {

            expiresIn: "1h"

        }

      );

      return res.status(200).json({

        message: "Auth successful",

        token: token

      });

    }

    res.status(401).json({

      message: "email222222 failed"

    });

  });

})

  },*/authentificate: function (req, res, next) {

    userModel.findOne({

      email: req.body.email

    }, function (err, userInfo) {

      if (err) {

        next(err)

      }

      else {

        if (userInfo != null) {

          console.log('userInfo', userInfo);

          if (bcrypt.compareSync(req.body.password, userInfo.password)) {

            const token = jwt.sign({

              id: userInfo._id

            }, req.app.get('secretKey'), { expiresIn: '1h' });

            res.json({

              status: "success",

              message: "user found",

              data: {

                user: userInfo,

                accesstoken: token,

              }

            });

          }

          else {

            res.json({ status: "error" + err, message: "Invalid password", data: null })

          }

        }

        else {

          res.json({ status: "error", message: "Invalid email", data: null });

        }

      }

    });



  },
  sendMail: function (req, res) {
    let body = {

      to: req.body.to,

      from: req.body.from,

      subject: req.body.subject,

      text: req.body.text,

    }

    const transporter = mailer.createTransport({

      host: 'smtp.mailtrap.io',

      port: 2525,
      ssl: false,
      tls: true,

      send: true,

      auth: {

        user: "b0c3d1e24af4f9",

        pass: "2bf1755c784f53"

      }

    })



    transporter.verify(function (error, success) {

      if (error) {

        console.log(error);

      } else {

        console.log("Server is ready to take our messages");

      }

    });



    transporter.sendMail(body, (err, result) => {

      if (err) {

        console.log(err);

        return false

      }

      console.log(result);

      console.log("email sent");
      res.json({ msg: "emai", data: result })


    })

  },
  pushUser:function(req,res){
    userModel.updateOne({_id:req.params.id},{ $push: { order:req.body.order } },function(err,user){
      console.log('idddddd',req.params.id);
        if(err){
            res.status(500).json({msg:"errure"+err,status:500,data:null}
            )
        }
        else{
       
            res.status(200).json({msg:"update ALl users",status:200,data:user})
            
        }

    })},
    deleteUser:function(req,res){
      userModel.updateOne({_id:req.params.id},{ $pull: { order:req.body.order } },function(err,user){
        console.log('idddddd',req.params.id);
          if(err){
              res.status(500).json({msg:"errure"+err,status:500,data:null}
              )
          }
          else{
         
              res.status(200).json({msg:"update ALl users",status:200,data:user})
              
          }
  
      })}
    
























}