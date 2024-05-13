const { Schema, model } = require('mongoose');

const Schema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  answerOne: {},
});
