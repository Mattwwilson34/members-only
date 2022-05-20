const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  title: { type: String, required: true, maxLength: 100 },
  message: { type: String, required: true, maxLength: 500 },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timestamp: { type: Date, required: true },
});

// export model
module.exports = mongoose.model('Message', MessageSchema);
