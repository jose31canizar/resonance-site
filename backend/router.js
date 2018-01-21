import express, { Router } from 'express';

import User from './models/user';

// Initialize the router
const router = Router();

router.post('/signup', function (req, res, next) {
    User.signup(req.body.email, req.body.password, function(error, user) {
        if (error || !user) {
            // console.log('there was definitely an error')
            var err = new Error('Wrong email or password.');
            err.status = 401;
            return next(err);
          } else {
            res.send(user)
          }
    })
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
      res.send(user)
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
        return res.send({loggedOut: true});
      }
    });
  }
});

// router.post('signup', function(req, res, next) {
//   User.
// })





export default router;
