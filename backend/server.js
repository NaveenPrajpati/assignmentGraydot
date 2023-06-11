const express=require("express");
const env=require("dotenv");

const connectWithDb = require("./config/dbConfig");




// default options
const app=express();



//middleware to understand response
app.use(express.json());


//mount all routes 
app.use("/data",require("./routes/todoRoute"))

//config dot env file
env.config();

//app running on this port
app.listen(process.env.PORT,()=>{
    console.log("this is ready to go")
})

//initilize bd connectivity
connectWithDb();


