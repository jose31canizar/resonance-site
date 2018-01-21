import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

// Define movie schema
var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String },
  email: { type: String, required: true, unique: true },
}, { collection: 'accounts' });

userSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

userSchema.statics.signup = function (email, password, callback) {
    userModel.save({ email: email, password: password, username: 'jose' })
    .exec(function (err, user) {
        if (err) {
        return callback(err)
        } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
        }
        return callback();
    });
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
    //   bcrypt.compare(password, user.password, function (err, result) {
    //     if (result === true) {
    //       return callback(null, user);
    //     } else {
    //       return callback();
    //     }
    //   })
      
      return callback();
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
