const mongoose = require('mongoose')

//Notification Schema
var notificationSchema = new mongoose.Schema({
  type: String, //comment or interest type
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  idea: {
    type: mongoose.Schema.Types.ObjectId, /* Object ID for the Idea */
    ref: 'Idea'
  },
  seen: {type: Boolean, default: true }
})

module.exports = mongoose.model('Notification', notificationSchema)
