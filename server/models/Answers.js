const { Schema, model } = require('mongoose');

const answerSchema = new Schema({
  answerText: {
    type: String,
  },
  isCorrectAnswer: {
    type: Boolean,
  },
});

module.exports = answerSchema;
