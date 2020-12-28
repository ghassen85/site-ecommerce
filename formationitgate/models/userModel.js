var mongoose = require('mongoose')
const validator = require('validator');
var uniqueValidator = require('mongoose-unique-validator');

bcrypt = require('bcrypt');


NODE_TLS_REJECT_UNAUTHORIZED = '0'




SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema




var UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,

        minlength: 3,


    },
    lastname: {
        type: String,
        required: true
    },
    email: {

        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v));

            },
            message: propos => `${propos.value
                }is not a valide format`

            /* validator: validator.isEmail,
             message: '{VALUE} is not a valid email',
             isAsync: false
           }*/
        }
    }, 
    numbre: {
        type: String,
        validate: {
            validator: function phonenumber2(number) {

                var phoneno = /^\+?([0-9]{2})\)?([0-9]{3})?([0-9]{3})$/;//il faut utiliser un nombre a 10 chiffres sans virgule,ni espace

                if (phoneno.test(number)) {

                    return true

                }



                else {

                    console.log("invalid number");

                    return false

                }

            }
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function password(number) {

                var phoneno = /^[A-Za-z]\w{7,14}$/;

                if (phoneno.test(number)) {

                    return true

                }



                else {

                    console.log("invalid password");

                    return false

                }

            }
        }
    }
    , order: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    ],
    image: {
        type: String,
    }
})


UserSchema.plugin(uniqueValidator);
UserSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, SALT_WORK_FACTOR);
    next();
})
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);//User esm lcollection fel base des donneés

