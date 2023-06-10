const express=require("express");
const bcrypt = require('bcrypt');
const { Usermodel } = require("../models/User.module");
const Userrouter=express.Router();
var jwt = require('jsonwebtoken');

Userrouter.post("/register",async(req,res)=>{
    try {
        const {name,email,password}=req.body;
    bcrypt.hash(password, 3,async function(err, hash) {
        // Store hash in your password DB.
        const user=new Usermodel({
            name:name,email:email,password:hash
        });

        await user.save();
        res.send({"msg":"new user registered"});

    });
    } catch (error) {
        res.send({"msg":error.message});
    }

});

Userrouter.post("/login",async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await Usermodel.findOne({email:email});

        if(user)
        {
            bcrypt.compare(password, user.password, function(err, result) {
                // result == true
               if(result)
               {
                var token = jwt.sign({ user_id: user._id }, 'masai');
                res.send({token:token,user:user})
               }else{
                res.send({"msg":"Please Login"});
               }
                
            });
        }else{
            res.send({"msg":"Please Login"});
        }
        

    } catch (error) {
        res.send({"msg":error.message});
    }
});

Userrouter.get("/logout",async(req,res)=>{

    res.send("logout");
})



module.exports={Userrouter};