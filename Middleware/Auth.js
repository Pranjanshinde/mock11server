var jwt = require('jsonwebtoken');

const Auth=async(req,res,next)=>{
try {
    const token=req.headers.authorization;
if(token)
{
    var decoded = jwt.verify(token, 'masai');
    console.log(decoded);
    if(req.body.user_id==decoded.user_id)
    {
        next();
    }else{
        res.send({"msg":"kindly login"});
}
   
}else{
    res.send({"msg":"kindly login"});
}
} catch (error) {
    res.send({"msg":error.message})
}
}

module.exports={Auth};