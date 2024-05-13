const { Schema, model } = require('mongoose');
const answerSchema = require('./Answers');

const questionSchema = new Schema({
  lesson: {
    type: String,
  },
  category: {
    type: String,
  },
  question: {
    typre: String,
  },
  answers: [answerSchema],
  explanation: {
    type: String,
  },
  point: {
    type: Number,
  },
});

const Question = model('question', questionSchema);

module.exports = Question;
