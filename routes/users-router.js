const express = require('express');
const {check} = require('express-validator');

const router = express.Router();

const userControllers = require('../controllers/user-controll')

router.get('/', userControllers.getUsers)

router.post('/signup',check('email').not().isEmpty(),
    userControllers.signUp)

router.post('/login', userControllers.logIn)

module.exports = router