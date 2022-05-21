 const user = require('../models/user-model');
 const bcrypt=require('bcrypt')
 const saltRounds = 10;
 const getAllUser=async (req,res,next)=>{
    let users;
    try{
        users= await user.find();
    }catch(error){
        console.log(error)
    }
    if(!users)
    res.status(404).send({message:"user not found"});
    else
    res.status(200).send({users});
}
const signUpUser=async (req,res,next)=>{
    const {email,name,password}=req.body;

   let existingUser;
    try{
        existingUser=await user.findOne({email})
    }
    catch(error)
    {
        console.log(error);
    }
    if(existingUser)
    res.status(401).send({message:"user already exists Login instead"});
    const hashedPassword=bcrypt.hashSync(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
    });
    let newUser=new user({
        email,
        name,
        password:hashedPassword
    });

    try{
        await newUser.save();
    }
    catch(error){
        res.status(401).send({message:error._message})
        return console.log(error);
    }
    if(newUser)
    res.status(201).send({user:newUser});
}
const login=async (req,res,next)=>{
    const {email,password}=req.body;
    let existingUser;
    try{
    existingUser=await user.findOne({email});
    }
    catch(error)
    {
        return console.log(error)
    }
    if(!existingUser)
    return res.status(404).send({message:"cant find user by email signup first"});
    const comparePassword=bcrypt.compareSync(password,existingUser.password);
    if(comparePassword)
    return res.status(200).send({message:"login sucessful",user:existingUser});
    else
    return res.status(401).send({message:"Wrong creidentials"});
}
module.exports={getAllUser,signUpUser,login};