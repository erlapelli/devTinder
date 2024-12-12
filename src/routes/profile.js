const express = require('express');
const {userAuth} = require("../middlewars/auth.js");
const {validateEditProfileData} = require("../utils/validation")

const profileRouter = express.Router();

profileRouter.get("/profile/view", userAuth, async (req,res) => {

    try{
    
        const user = req.user;
        res.send(user)
    
      
    } catch(err){
        res.status(400).send("ERROR:"+err.message);
    }
    
    });


profileRouter.patch("/profile/edit",userAuth,async(req,res)=>{

        try{
           if(!validateEditProfileData(req)){
            throw new Error("Invalid Edit Request");
           }

           const loggedInuser = req.user;
           
           
        Object.keys(req.body).forEach((key)=>(loggedInuser[key]=req.body[key]));
    
         
         
           
           await loggedInuser.save();
          
           res.json({
            message:
            `${loggedInuser.firstName} your profile updated  successfully`,
            data:loggedInuser,
        });

        } catch(err){
            res.status(400).send("ERROR: "+err.mesage);

        }


    });

    module.exports = profileRouter; 
