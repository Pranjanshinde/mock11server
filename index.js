const express=require("express");
const { connection } = require("./db");
const { Userrouter } = require("./Routes/User.route");
const { Emimodel } = require("./models/Emi.module");
const { Emiroute } = require("./Routes/Emi.route");
var cors = require('cors');
const { Auth } = require("./Middleware/Auth");
const app=express();
app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("home page");
});

app.use("/users",Userrouter);

app.use(Auth);
app.use("/emi",Emiroute);


app.listen(8080,async()=>{
   try {
    console.log("connecting...");
    await connection
    console.log("connected to port 8080");
   } catch (error) {
    console.log(error.message);
   }


});




// {
//     "user_id":"64841ae806f80278b66a76a7",
//        "amount":100000,
//        "interest":14,
//        "months":36
//    }