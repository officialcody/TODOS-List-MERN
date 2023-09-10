const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  postCreateUser,
  //   putUpdateTodo,
  //   deleteTodo,
} = require("../controllers/user");

/**
 * @route GET api/user
 * @description get all users
 * @access public
 */
router.get("/", getAllUsers);

/**
 * @route POST api/user
 * @description add a new user
 * @access public
 */
router.post("/", postCreateUser);

// /**
//  * @route PUT api/user/:id
//  * @description update todo
//  * @access public
//  */
// router.put("/:id", putUpdateTodo);

// /**
//  * @route DELETE api/todo/:id
//  * @description delete todo
//  * @access public
//  */
// router.delete("/:id", deleteTodo);

module.exports = router;
