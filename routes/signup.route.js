const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const {userModel} = require("../models/user.model")

const userRouter = express.Router()

userRouter.post("/signup",async(req,res)=>{
    const {name, email, password}= req.body
    try{
        bcrypt.hash(password,3,async(err,hashed)=>{
            const data = new userModel({name,email,password:hashed})
            await data.save()
            res.send(data)
        })
    }
    catch(err){
        console.log(err)
    }
})

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {


        const user = await userModel.find({ email });
        if (user.length > 0) {

            bcrypt.compare(password, user[0].password, (err, result) => {
                if (result) {

                    const token = jwt.sign({ userID: user[0]._id }, "masai");
                    res.send({

                        "message": "login Sucessfull",
                        "token": token
                    })
                }
                 else {
                    res.send("wrong credentials")
                }
            })
        } else {
            res.send("not find account please Signup first")
        }
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})


module.exports = { userRouter }