const mongoose = require('mongoose')

//Pivot Schema
var pivotSchema = new mongoose.Schema({
  number: Number,
  admin: {
    type: mongoose.Schema.Types.ObjectId, /* Object ID for the user administrator */
    ref: 'User',
    required: true
  },
  banner: String,
  category: {
    type: mongoose.Schema.Types.ObjectId, /* Object ID for the category */
    ref: 'Category',
    required:true
  },
  ideaname: String, /* Codename for the project to reference it */
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  name: {
    type: String,
    required: true
  },
  problem: String,
  description: String,
  interests: [{
     _id: {
       type: mongoose.Schema.Types.ObjectId, /* Object ID from User */
       ref: 'User' /* User Schema. Remember to define it as this in the export module */
     },
     /* This type could be: money, love, like, dislike */
     type: {
       type: String,
       required: true
     }
 }],
  views: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: true
  }],
  feedback: [{
    type: mongoose.Schema.Types.ObjectId, /* Object ID for the Feedback */
    ref: 'Feedback'
  }]
})

module.exports = mongoose.model('Idea', ideaSchema);