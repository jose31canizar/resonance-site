import mongoose, { Schema } from "mongoose";
import Post from './post.js';
import bcrypt from "bcrypt-nodejs";

var Promise = require("bluebird");
Promise.promisifyAll(mongoose);


// Define movie schema
var userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String },
  email: { type: String, required: true, unique: true },
  posts: [ { type: Schema.ObjectId, ref: Post } ],
  rank: Number,
  verified: Boolean,
  updated: {
    type: Date,
    default: Date.now
  },
   age: {
     type: Number,
     min: 18,
     max: 65
  },
  following: [ { type: Schema.ObjectId, ref: this } ],
  followers: [ { type: Schema.ObjectId, ref: this } ],
  likes: [ { type: Schema.ObjectId, ref: Post } ],
  favorite_bands: Array,
  favorite_genres: Array,
  birthday: Date,
  gender: String,
  metadata: {
    reported: Boolean
  }
}, { collection: 'resonance.users' });

userSchema.pre("save", function(next) {
  var user = this;
  var salt = bcrypt.genSaltSync(10);
  bcrypt.hash(user.password, salt, null, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

userSchema.statics.signup = function(body, callback) {
  console.log("in sign up");
  var user = new userModel({
    firstName: body.firstName,
    lastName: body.lastName,
    username: body.username,
    email: body.email,
    password: body.password
  });

  user.save((err, res) => {
    if (err) {
      return callback(err);
    }
    return callback(err, user);
  });
};

//authenticate input against database
userSchema.statics.authenticate = function(email, password, callback) {
  userModel.findOne({ email: email }).exec(function(err, user) {
    if (err) {
      return callback(err);
    } else if (!user) {
      var err = new Error("User not found.");
      err.status = 401;
      return callback(err);
    }
    bcrypt.compare(password, user.password, function(err, result) {
      if (result === true) {
        return callback(null, user);
      } else {
        return callback();
      }
    });

    // return callback();
  });
};

var userModel = mongoose.model("user", userSchema);

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
