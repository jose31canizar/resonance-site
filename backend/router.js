import express, { Router } from 'express';
import mongoose from 'mongoose';
import User from './models/user';
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);
// Initialize the router
const router = Router();

router.post('/signup', function (req, res, next) {
  User.signup(req.body, function(error, user) {
    if (error || !user) {
      console.log('there was definitely an error')
      var err = new Error('Wrong email or password. ');
      console.log(error.code)
      err.status = 401;
      if(error.code == '11000') {
        res.send({message: 'duplicate user'});
        return
      } else {
        err.status = 401;
        return next(error);
      }
    } 
    res.send({message: 'success'})
  });
});

router.post('/login', function (req, res, next) {
  User.authenticate(req.body.email, req.body.password, function (error, user) {
    if (error || !user) {
      // console.log('there was definitely an error')
      var err = new Error('Wrong email or password.');
      err.status = 401;
      return next(err);
    } else {
      req.session.userId = user._id;
      // console.log('there was no error')
      res.send({message: 'successful login'})
    }
  });
});

router.get('/logout', function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        return res.send({message: 'successful logout'});
      }
    });
  }
});

// router.post('signup', function(req, res, next) {
//   User.
// })





export default router;
