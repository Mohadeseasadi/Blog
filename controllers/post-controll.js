const {v4:uuidv4} = require('uuid');
const Post = require('../models/posts');
const {validationResult} = require('express-validator')

const getPostById = async(req,res,next)=>{
    const postId = req.params.pid

    const post = await Post.findById(postId)

    res.json({ post })
}

const createPost = async(req,res,next)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        res.status(422).json({ massage:'invalid data' })
    }

    const {title,content} = req.body

    const createdPost = new Post({ title ,content })

    await createdPost.save()

    res.status(201).json({ post: createdPost })
}

const deletePost = async(req,res,next)=>{
    const postId = req.params.pid

    const post = await Post.findById(postId)

    await post.deleteOne()

    res.status(200).json({ massage:'post deleted' })
}

exports.getPostById = getPostById ;
exports.createPost = createPost ;
exports.deletePost = deletePost ;