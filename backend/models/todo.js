const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  description: {
    type: mongoose.Schema.Types.String,
  },
  author_details: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
