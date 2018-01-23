import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import router from './router';
import Mailchimp from 'mailchimp-api-v3';
const path = require('path');
var fs = require("fs");
import session from 'express-session';
import bodyParser from 'body-parser';
const MongoStore = require('connect-mongo')(session);
require('dotenv').config();
var mc_api_key = process.env.MAILCHIMP_API_KEY;
var list_id = process.env.MAILING_LIST_ID;
var beta_list_id = process.env.BETA_LIST_ID;

fs.readdirSync(__dirname + '/models').forEach(function(filename) {
  if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
})

// mongoose.connect('mongodb://Jose:Tidalwaves@ds111138.mlab.com:11138/resonance-site');
mongoose.connect('mongodb://localhost/resonance-site');
const db = mongoose.connection;

const app = express();

app.use(morgan('combined'));
// const cors = require('cors')
const mailchimp = new Mailchimp(mc_api_key);

app.use(express.static(path.resolve(__dirname, '../', 'build')));
app.use(bodyParser.urlencoded({ 
  extended: false
}));
app.use(bodyParser.json());
// app.use(cors());
app.options('*', function (req, res) {
    'use strict';
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
});

app.use(session({
  secret: 'topsecret',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db,
    collection: 'sessions'
  })
}));

// app.use(cors(corsOptions))
//routes
app.get('/api/memberList', (req, res) => {
  mailchimp.get(`/lists/${list_id}/members`)
  .then(function(results){
    res.send(results);
  })
  .catch(function(err){
    res.send(err);
  });
});

app.post('/api/addMember', (req, res) => {
  mailchimp.post(`/lists/${list_id}`, {"members":
    [
      {
        "email_address": req.body.email_address,
        "status": "subscribed",
        "merge_fields": {
          'FNAME': req.body.merge_fields.name
        }
      }
    ], "update_existing": true})
  .then(function(results){
    console.log(results)
  })
  .catch(function(err){
    console.log(err);
    res.send(err);
  });
});

app.post('/api/signUpForBeta', (req, res) => {
  console.log('signing up for beta')
  mailchimp.post(`/lists/${beta_list_id}`, {"members":
    [
      {
        "email_address": req.body.email_address,
        "status": "subscribed",
        "merge_fields": {
          'FNAME': req.body.merge_fields.name
        }
      }
    ], "update_existing": true})
  .then(function(results){
    console.log(results)
    console.log('signing up for beta')
  })
  .catch(function(err){
    console.log(err);
    res.send(err);
  });
});

// app.use(function (req, res, next) {
//   var err = new Error('File Not Found');
//   err.status = 404;
//   next(err);
// });

app.use('/account', router);


//catch all handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});
const port = process.env.PORT || 9001;
app.listen(port);
console.log(`express app listening on port ${port}`);
