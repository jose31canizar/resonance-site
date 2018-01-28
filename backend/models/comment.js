import mongoose, { Schema } from 'mongoose';

var commentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
  replies: [ { type: Schema.ObjectId, ref: this } ]
}, { collection: 'resonance.comments' });

export default mongoose.model('comment', commentSchema);
