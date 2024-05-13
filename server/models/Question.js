const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  lesson: {
    type: String,
  },
  category: {
    type: String,
  },
  question: {
    typre: String,
  },
  answer: {},
  explanation: {
    type: String,
  },
  point: {
    type: Number,
  },
});

const Question = model('question', questionSchema);

module.exports = Question;
