const express=require("express");
const { Emimodel } = require("../models/Emi.module");
const { Usermodel } = require("../models/User.module");

const Emiroute=express.Router();

Emiroute.get("/profile",async(req,res)=>{
try {
    const {user_id}=req.body;

const user=await Usermodel.findOne({_id:user_id});
console.log(user);
if(user)
{
    res.send(user);
}else{
    res.send({"msg":"kindly login"})
}
} catch (error) {
    res.send({"msg":error.message});
}

});

Emiroute.get("/",async(req,res)=>{
    try {
        const {amount,interest,months}=req.body;
        let p=amount;
        let n=months;
        let r=interest/12/100;

        let emi=p*r*(1+r)**n/((1+r)**n-1);
        let payment=emi*n;
        let pay_int=payment-amount;
        console.log(emi,payment,pay_int);
        res.send({"emi":emi.toFixed(0),"interest_pay":pay_int.toFixed(0),"payment":payment.toFixed(0)});
    } catch (error) {
        res.send({"msg":error.message});
    }
    
    });

    



module.exports={Emiroute};



// {
//     "name":"sumit",
//     "email":"sumit@123",
//     "password":"1234"
//   }



// {
//     "_id": "64841ae806f80278b66a76a7",
//     "name": "sumit",
//     "email": "sumit@123",
//     "password": "$2b$04$uT12XTjlk37D0/hXSOTCo.8IpzDqhRPe8gmeEKs2vc3JFhMAJ6OK2",
//     "__v": 0
// }