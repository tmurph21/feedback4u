const mongoose = require('mongoose');
const RecipientSchema = require('./recipient');

const { Schema } = mongoose;

const surveySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  // subdocument array that follows recipient schema
  recipients: [RecipientSchema],
  yes: {
    type: Number,
    default: 0
  },
  no: {
    type: Number,
    default: 0
  },
  // associates it with an ObjectID in the Users collection
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);
