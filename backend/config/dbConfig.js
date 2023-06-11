const mongoose = require("mongoose")
const env = require("dotenv");
env.config();

//database configuration
const connectWithDb = () => {
    mongoose.connect(process.env.BASE_URL,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
        .then(res => {
            console.log("db connected")
            console.log(res.connection.host)
            console.log(res.connection.name)
        })
        .catch((error) => {
            console.log(error);
            process.exit(1);
        })
}
module.exports = connectWithDb;

