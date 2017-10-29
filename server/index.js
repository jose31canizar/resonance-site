const express = require('express');
const Mailchimp = require('mailchimp-api-v3');
const path = require('path');
const bodyParser = require('body-parser')
require('dotenv').config();
var mc_api_key = process.env.MAILCHIMP_API_KEY;
var list_id = process.env.MAILING_LIST_ID;

const app = express();
const cors = require('cors')
const mailchimp = new Mailchimp(mc_api_key);

app.use(express.static(path.resolve(__dirname, '../', 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
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
const corsOptions = {
  origin: 'https://www.truewarrior.fm/congratulations/'
}

app.use(cors(corsOptions))
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
          'FNAME': req.body.merge_fields.firstName,
          'LNAME': req.body.merge_fields.lastName
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

//catch all handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});
const port = process.env.PORT || 9001;
app.listen(port);
console.log(`express app listening on port ${port}`);
