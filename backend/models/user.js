import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

// Define movie schema
var userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { collection: 'accounts' });

userSchema.pre('save', function (next) {
  var user = this;
  var salt = bcrypt.genSaltSync(10);
  bcrypt.hash(user.password, salt, null, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

userSchema.statics.signup = function(body, callback) {
  console.log('in sign up')
  var user = new userModel({
    firstName: body.firstName,
    lastName: body.lastName,
    phoneNumber: body.phoneNumber,
    email: body.email,
    password: body.password
  });

  user.save((err, res) => {
    if(err){
      return callback(err);
    }
    console.log('succeeding!')
    return callback(err, user)
    // res.send({ success: true });
  })
  // .exec(function (err, user) {
  //   if (err) {
  //     return callback(err)
  //   } else if (!user) {
  //     var err = new Error('User not able to sign up.');
  //     err.status = 401;
  //     return callback(err);
  //   }
  //   return callback();
  // });
  // .then((user) => {
  //   console.log('success!!');
  //   console.log(user);
      
  // });
}

//authenticate input against database
userSchema.statics.authenticate = function (email, password, callback) {
  userModel.findOne({ email: email })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
      
      // return callback();
    });
}

var userModel = mongoose.model('user', userSchema);

// function findAllUsers() {
//   userModel.find(function(err, users) {
//
//   })
// }
//
// userModel.findAllUsers = findAllUsers;

// function createUser(user) {
//   userModel.create(user);
// }
//
// userModel.createUser = createUser;

// Export Mongoose model
export default userModel;
