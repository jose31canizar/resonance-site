import mongoose from 'mongoose';
import User from './models/user.js';
import Post from './models/post.js';
import Comment from './models/comment.js';

import Promise from 'bluebird'
Promise.promisifyAll(mongoose);
// mongoose.Promise = Promise;

const replies = [
  {
    comment:    'tru dat'
  }
]

const comments = [
  {
    comment:    'truer words have never been spoken'
  },
  {
    comment:    'this is lit'
  }
]

const users = [
  {
    firstName: 'Taylor',
    lastName: 'Hill',
    username: 'taytay',
    password: 'tayisdope123',
    email: 'taylor.hill@colorado.edu',
    rank: 5,
    verified: true,
    age: 21,
    favorite_bands: [
      "SMLE",
      "Miike Snow",
      "Lido",
      "Skylar Spence",
      "Kaytranada",
      "Bag Raiders"
    ],
    favorite_genres: [ 'Future Pop', 'Trap Jazz'],
    birthday: Date.now(),
    gender: 'female',
    metadata: {
      reported: false
    }
  },
  {
    firstName: 'Jose',
    lastName: 'Canizares',
    username: 'josecani',
    password: 'therealmvp',
    email: 'jose.canizares@colorado.edu',
    rank: 4,
    verified: true,
    age: 21,
    favorite_bands: [
      "Anderson.Paak",
      "Goldlink",
      "Kaytranada",
      "Gallant",
      "Galimatias"
    ],
    favorite_genres: [ 'Trap', 'Hip Hop'],
    birthday: Date.now(),
    gender: 'male',
    metadata: {
      reported: false
    }
  }
]

const posts = {
  "Taylor" : [
    {
        title: "Fall Harder",
        caption: "This song is fire!",
        source: "Apple Music",
        link: "http://resonator.life",
        artist: "Skylar Spence",
        album: "Fiona Coyne/Fall Harder",
        date: Date.now()
    },
    {
        title: "Fall Harder",
        caption: "This song is fire!",
        source: "Apple Music",
        link: "http://resonator.life",
        artist: "Skylar Spence",
        album: "Fiona Coyne/Fall Harder",
        date: Date.now()
    },
    {
        title: "Fall Harder",
        caption: "This song is fire!",
        source: "Apple Music",
        link: "http://resonator.life",
        artist: "Skylar Spence",
        album: "Fiona Coyne/Fall Harder",
        date: Date.now()
    },
    {
        title: "Fall Harder",
        caption: "This song is fire!",
        source: "Apple Music",
        link: "http://resonator.life",
        artist: "Skylar Spence",
        album: "Fiona Coyne/Fall Harder",
        date: Date.now()
    },
    {
        title: "Fall Harder",
        caption: "This song is fire!",
        source: "Apple Music",
        link: "http://resonator.life",
        artist: "Skylar Spence",
        album: "Fiona Coyne/Fall Harder",
        date: Date.now()
    }
  ],
  "Jose": [
    {
        title: "Fall Harder",
        caption: "This song is fire!",
        source: "Apple Music",
        link: "http://resonator.life",
        artist: "Skylar Spence",
        album: "Fiona Coyne/Fall Harder",
        date: Date.now()
    },
    {
        title: "Fall Harder",
        caption: "This song is fire!",
        source: "Apple Music",
        link: "http://resonator.life",
        artist: "Skylar Spence",
        album: "Fiona Coyne/Fall Harder",
        date: Date.now()
    },
    {
        title: "Fall Harder",
        caption: "This song is fire!",
        source: "Apple Music",
        link: "http://resonator.life",
        artist: "Skylar Spence",
        album: "Fiona Coyne/Fall Harder",
        date: Date.now()
    },
    {
        title: "Fall Harder",
        caption: "This song is fire!",
        source: "Apple Music",
        link: "http://resonator.life",
        artist: "Skylar Spence",
        album: "Fiona Coyne/Fall Harder",
        date: Date.now()
    },
    {
        title: "Fall Harder",
        caption: "This song is fire!",
        source: "Apple Music",
        link: "http://resonator.life",
        artist: "Skylar Spence",
        album: "Fiona Coyne/Fall Harder",
        date: Date.now()
    },
  ]
}

// Connect to MongoDB
// var connection = mongoose.connect('mongodb://localhost:27017/resonance');
var connection = mongoose.connect('mongodb://Jose:Tidalwaves@ds111638.mlab.com:11638/resonance-site');

// var db = mongoose.createConnection('mongodb://localhost:27017/resonance');
(err) => {
    if(err){
      console.log(err);
      return;
    }
  }


users.map(userData => {
  var user = new User(userData);

  user.save().then((err) => {
      posts[user.firstName].map(data => {
        const post = new Post({...data, author: user._id });
        post.save().then((res) => {
          User.findOneAndUpdate({email: user.email}, {$push:{posts: post._id }}, {new: true}, function(err, doc){
            if(err){
                console.log("Something wrong when updating data!");
            }
            console.log(doc);
          });
        })
        .catch((err) => {
            if(err){
                console.log(err);
                return;
              }
        });
      });
  }).catch((err) => {
    if(err){
        console.log(err);
        return;
      }
  });
});


// comments.map(commentData => {
//   const comment = new Comment(commentData);
//   comment.save(function(err) {
//     if(err) {
//       console.log(err);
//       return;
//     }
//   })
// })
//
