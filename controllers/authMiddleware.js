const JWT = require("jsonwebtoken")


const authMiddle = async (req, res, next) =>{
try{

    const token = req.headers['authorization'].split(" ")[1]
    JWT.verify(token , process.env.JWT_SECRET_KEY , (err, decode) =>{
        if(err){
            return res.status(401).send({
                success: false,
                message:"Auth Failed"
            })
        }
        else{
            req.body.userId = decode.userId;
            next();
        }
    })
}
catch(error){
    console.log(error)
                res.status(500).send({
                    success: false,
                    message: "ERROR Auth Failed",
                    error
                })
}

}


module.exports =authMiddle