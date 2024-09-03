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
        console.log(error)
    }
}



module.exports = {home, register}