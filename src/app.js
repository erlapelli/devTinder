const express = require("express")

const app = express() 

// app.use("/",(req,res)=>{
//     res.send("Hiii");
// })

app.use("/hello",(req,res)=>{
    res.send("Hello hello")
})

app.use("/test",(req,res)=>{
    res.send("Hello from the server")
})

app.listen(7777, () => {
    console.log("Server is listening on port 7777");
});