const mongoose = require("mongoose");

const connectDB = async() =>{
    await mongoose.connect(
        "mongodb+srv://poorna:poorna456@cluster0.zli0s.mongodb.net/devTinder"
    );
};

module.exports=connectDB 


   