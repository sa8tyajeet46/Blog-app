const express=require('express');
const router=express.Router();
const {getAllUser,signUpUser,login}=require('../controllers/user-controller');
router.get("/",getAllUser);
router.post("/signup",signUpUser);
router.post("/login",login);
module.exports=router;