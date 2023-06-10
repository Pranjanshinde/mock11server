const mongoose=require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const EmiSchema=mongoose.Schema({
    user_id:String,
    amount:Number,
    interest:Number,
    months:Number
});

const Emimodel=mongoose.model("emi",EmiSchema);

module.exports={Emimodel};