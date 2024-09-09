const User= require("../models/user-model");
const bcrypt = require("bcryptjs")

const home=async (req,res)=>{
    try {
      res.status(200).send("welcome to the home page")  
    } catch (error) {
       console.log(error) 
    }
}


const register =async(req,res)=>{
    try {
        const {username, email, phone, password} = req.body;

        const userExist= await User.findOne({email:email});

        if(userExist){
            return res.status(400).json({msg:"email already exists"})
        }

        const userCreated= await User.create({username, email, phone, password});

        res.status(201).json({msg:'registration successful', token: await userCreated.generateToken(), })    
    } catch (error) {
        const status=422;
        const message= error.errors[0].message;
        const err= {
            status,message
        }
        next(err)
    }
}


const login= async (req, res)=>{
    try {

        const {email, password}=req.body;

        const userExist= await User.findOne({email});

        if(!userExist)
            return res.status(400).json({message:"Invalid Credentials"})

        const user = await userExist.comparePassword(password)

        if(user){
            res.status(200).json({msg:"login successful", token: await userExist.generateToken(), usesrId:userExist._id.toString()})
        }else{
            res.status(401).json({message:"invalid credentials"})
        }
        
    } catch (error) {
        const status=422;
        const message= error.errors[0].message;
        const err= {
            status,message
        }
        next(err)
      
    }
}

module.exports = {home, register, login}