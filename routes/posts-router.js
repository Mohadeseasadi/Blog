const express = require('express');

const router = express.Router();

const postControllers = require('../controllers/post-controll')

router.get('/:pId', postControllers.getPostById)

router.post('/', postControllers.createPost)

router.delete('/:pId', postControllers.deletePost)

module.exports = router