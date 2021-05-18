const express = require('express');
const router = express.Router();
const controller = require("../controllers/users");

router.get('/users', controller.getUsers);
// GET a list of all users

router.get('/users/:UserId', controller.getUsersById);
// GET user by thier id number

router.post('/users/:UserId, /users/:FirstName, /users/:LastName, /users/:Age', controller.createUser);
// POST a new user

router.put('/users/:UserId, /users/:FirstName, /users/:LastName, /users/:Age', controller.updateUser);
// PUT or edit a user by id

router.delete('/users/:UserId', controller.deleteUser)
// DELETE a user by id

module.exports = router;