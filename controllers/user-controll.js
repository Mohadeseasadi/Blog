const {v4:uuidv4} = require('uuid');
const User = require('../models/users');

const getUsers = async(req,res,next)=>{
    const users = await User.find()

    res.json({ users })
}

const signUp = async(req,res,next)=>{
    const {email,password} = req.body

    const createUser = new User({ email,password })

    await createUser.save()

    res.status(201).json({ user: createUser })
}

const logIn = async(req,res,next)=>{
    const {email,password} = req.body

    const validUser = await User.findOne({email : email})

    if(!validUser || validUser.password !== password){
        res.json({ massage:'invalid user' })
    }

    res.json({ massage:'loged in' })
}

exports.getUsers = getUsers ;
exports.signUp = signUp ;
exports.logIn = logIn ;