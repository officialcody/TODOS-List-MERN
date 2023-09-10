const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  postCreateUser,
  putUpdateUser,
  deleteUser,
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

/**
 * @route PUT api/user/:id
 * @description update user
 * @access public
 */
router.put("/:id", putUpdateUser);

/**
 * @route DELETE api/user/:id
 * @description delete user
 * @access public
 */
router.delete("/:id", deleteUser);

module.exports = router;
