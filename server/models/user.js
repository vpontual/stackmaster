const { Schema, model } = require('mongoose');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return emailRegex.test(v);
      },
    },
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model('user', userSchema);

module.exports = User;
