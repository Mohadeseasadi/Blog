const express = require('express');

const router = express.Router();

const userControllers = require('../controllers/user-controll')

router.get('/', userControllers.getUsers)

router.post('/signup', userControllers.signUp)

router.post('/login', userControllers.logIn)

module.exports = router