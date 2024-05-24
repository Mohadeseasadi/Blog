const express = require('express');

const router = express.Router();

const postControllers = require('../controllers/post-controll')

router.get('/:pid', postControllers.getPostById)

router.post('/', postControllers.createPost)

router.delete('/:pid', postControllers.deletePost)

module.exports = router