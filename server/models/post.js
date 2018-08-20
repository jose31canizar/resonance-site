import mongoose, { Schema } from 'mongoose';
import Comment from './comment.js'
import User from './user.js'

var postSchema = new Schema({
  title: { type: String, required: true },
  caption: String,
  source: String,
  link: String,
  artist: String,
  album: String,
  author: { type: Schema.ObjectId, ref: User, required: true },
  date: { type: Date, default: Date.now },
  likes: [ { type: Schema.ObjectId, ref: User } ],
  reposts: [ { type: Schema.ObjectId, ref: User } ],
  replies: [ { type: Schema.ObjectId, ref: Comment } ]
}, { collection: 'resonance.posts' });


export default mongoose.model('post', postSchema);
