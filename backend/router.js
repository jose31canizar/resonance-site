import express, { Router } from "express";
import mongoose from "mongoose";
import User from './models/user'
import { index as userIndex } from "./controllers/users";
import { index as postIndex } from "./controllers/posts";

var Promise = require("bluebird");
Promise.promisifyAll(mongoose);

// Initialize the router
const router = Router();

router.route("/user.json").get(userIndex);

router.route("/posts.json").get(postIndex);

router.post("/signup", function(req, res, next) {
  User.signup(req.body, function(error, user) {
    if (error || !user) {
      var err = new Error("Wrong email or password. ");
      console.log(error);
      console.log(error.code);
      err.status = 401;
      if (error.code == "11000") {
        res.send({ message: "duplicate user" });
        return;
      } else {
        err.status = 401;
        return next(error);
      }
    }
    res.send({ message: "success" });
  });
});

router.post("/login", function(req, res, next) {
  User.authenticate(req.body.email, req.body.password, function(error, user) {
    if (error || !user) {
      var err = new Error("Wrong email or password.");
      err.status = 401;
      console.log(error)
      // return next(err);
      res.send({ message: "wrong email or password" });
    } else {
      req.session.userId = user._id;
      res.send({ 
        message: "successful login", 
        firstName: user.firstName,
        lastName: user.lastName,
        id: user._id
      });
    }
  });
});

router.get("/logout", function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if (err) {
        return next(err);
      } else {
        return res.send({ message: "successful logout" });
      }
    });
  }
});

// router.post('signup', function(req, res, next) {
//   User.
// })

export default router;
