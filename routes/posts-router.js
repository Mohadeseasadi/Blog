const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const postControllers = require('../controllers/post-controll')

router.get('/:pid', postControllers.getPostById)

router.post('/',check('content').isLength({ min:5 }),
    postControllers.createPost)

router.delete('/:pid', postControllers.deletePost)

module.exports = router