const express = require('express');
const mongoose = require('mongoose');

const app = express()

app.use(express.json())

const postRoutes = require('./routes/posts-router')
const userRoutes = require('./routes/users-router')

app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/Blogg')
    .then(()=>app.listen(3000))
    .catch((err)=>console.log(err))