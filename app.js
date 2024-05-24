const express = require('express');

const mongoose = require('mongoose');

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/Blog')
    .then(()=>app.listen(8000))
    .catch((err)=>console.log(err))