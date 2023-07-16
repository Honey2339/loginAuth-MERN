const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const User = require('./models/userModel')
const cors = require('cors')



MONGO_URL = 'mongodb+srv://sky5:sky5@cluster0.6hcywcy.mongodb.net/'
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

const handleErrors = (err) => {
    console.log(err.message , err.code)
    let error = {email : '' , password: ''}

    if(err.code === 11000){
        error.email = 'That email is already registered'
    }
    
}


const createToken = (id) => {
    return jwt.sign({id}, 'secret', {expiresIn: '1h'})
}

app.get('/api/login',async (req,res)=>{

})

app.post('/api/login',async (req,res)=>{

    const {email , password} = req.body
    try{
        const user = await User.findOne({email , password})
        if(user){
        const token = createToken(email)
        res.cookie('jwt', token, {httpOnly: true , maxAge: 24 * 60 * 60 * 1000})
        res.status(200).json({token})
    }
        if(!user){
            console.log("User does not exist")
        }
    }
    catch(err){
        handleErrors(err)
    }

})

app.post('/api/signup',async (req,res)=>{
    const {email , password} = req.body

    try {
        const user = await User.create({email,password})
        res.status(200).json({msg : "User Created Successfully"})
    } 
    catch (err) {
        handleErrors(err)
    }
})

mongoose.connect(MONGO_URL)
.then((result) =>{app.listen(5050, () => console.log('DB is connected and Server is running on port 5050'))})
.catch((err) => {console.log(err)})