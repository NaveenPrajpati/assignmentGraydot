const express=require("express");
const env=require("dotenv");

const connectWithDb = require("./config/dbConfig");




// default options


const app=express();



//middleware to understand response
app.use(express.json());


//mount all routes 
// app.use("/",routes)
app.use("/data",require("./routes/todoRoute"))


env.config();
app.listen(process.env.PORT,()=>{
    console.log("this is ready to go")
})
connectWithDb();


app.get("/",(request,response)=>{
    response.send('this is homepage')
})
