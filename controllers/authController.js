const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// Registered Controller
const registerController = async(req, res) =>{

    try{
const user = await userModel.findOne({email: req.body.email})
if(user){
    return res.status(200).send({
        success: false,
        message:"User already exists"
    })
}

// hashed password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    req.body.password = hashedPassword
// rest data

    const newUser = new userModel(req.body)
    await newUser.save()
    return res.status(201).send({
          success: true,
        message:"User registerd Successful"
    })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message: "ERROR",
            error
        })
    }

}

// Login Controller

const loginController = async(req, res) =>{

    try{
    const user = await userModel.findOne({
        email: req.body.email
    })

    if(!user){
        return res.status(404).send({
            success:false,
            message: "User not found"
        })
    }
    // compare password

    
      //check role
      if (user.role !== req.body.role) {
        return res.status(500).send({
          success: false,
          message: "role dosent match",
        });
      }

    const comparePassword = await bcrypt.compare(req.body.password , user.password)
    if(!comparePassword){
        return res.status(500).send({
            success: false,
            messgae: "Invalid Credientials"
        })
    }

    const token = jwt.sign({userId: user._id} , process.env.JWT_SECRET_KEY ,{expiresIn:"1d"})



    return res.status(200).send({
        sucess: true,
        message: "Login Successful",
        token, user
    })


     }
    catch(error){
                console.log(error)
                res.status(500).send({
                    success: false,
                    message: "ERROR",
                    error
                })
            }


}

// GET CURRENT USER

const currentUserController = async (req, res) =>{

    try{
        const user = await userModel.findOne({
            _id:req.body.userId
        })
        return res.status(200).send({
            success : true,
            message: 'Authorize Success',
            user
        })
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            success: false,
            message: "UNABLE TO GET Current user",
            error
        })
    }
}



module.exports = {registerController, loginController, currentUserController}