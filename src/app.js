const express = require("express")

const app = express() 

app.use("/user",(req,res) => {
    res.send("HAHAHA")
})

// This will only handle GET call to /user 
app.get("/user",(req,res)=>{
    res.send({firstName:"Akshay", lastName:"Saini"});
});

app.post("/user",(req,res)=>{
    console.log("Save Date to the database");
    res.send("Data successfully saved to the database")
});

app.delete("/user",(req,res)=>{
    res.send("Deleted Successfully")
})


// this will match all the HTTP method API calls to /test
app.use("/hello",(req,res)=>{
    res.send("Hello hello")
})

app.use("/hello/2",(req,res)=>{
    res.send("poorna hi")
})

app.use("/test",(req,res)=>{
    res.send("Hello from the server")
})

// app.use("/",(req,res)=>{
//     res.send("Hiii");
// })

app.listen(7777, () => {
    console.log("Server is listening on port 7777");
});