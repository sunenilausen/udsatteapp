
var mongoose = require('mongoose');

// Create the ExerciseSchema.
var cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imageurl: {
    type: String,
    required: true
  },
  symptoms: [{
    type: String,
    required: true
  }],
  actions: [{
    type: String,
    required: true
  }],
  notices: [{
    type: String
  }]
});

// Export the model.
module.exports = mongoose.model('card', cardSchema);
