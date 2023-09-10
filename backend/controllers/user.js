const User = require("../models/user");

exports.getAllUsers = (req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) =>
      res.status(404).json({ message: "User not found", error: err.message })
    );
};

exports.postCreateUser = (req, res) => {
  User.create(req.body)
    .then((data) => res.json({ message: "User added successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to add user", error: err.message })
    );
};

// exports.putUpdateTodo = (req, res) => {
//   Todo.findByIdAndUpdate(req.params.id, req.body)
//     .then((data) => res.json({ message: "updated successfully", data }))
//     .catch((err) =>
//       res
//         .status(400)
//         .json({ message: "Failed to update todo", error: err.message })
//     );
// };

// exports.deleteTodo = (req, res) => {
//   Todo.findByIdAndRemove(req.params.id, req.body)
//     .then((data) => res.json({ message: "todo deleted successfully", data }))
//     .catch((err) =>
//       res.status(404).json({ message: "book not found", error: err.message })
//     );
// };
