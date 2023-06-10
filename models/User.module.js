const mongoose=require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
});

const Usermodel=mongoose.model("user",UserSchema);

module.exports={Usermodel};