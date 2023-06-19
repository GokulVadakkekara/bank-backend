// define node app and mongodb database connectivity

const mongoose= require("mongoose")
// to get connection string from .env file: process.env
const connectionString = process.env.DATABASE

//connect node app with mongodb using connection string with help of mongoose
mongoose.connect(connectionString,{
    useNewUrlParser: true,
   useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDB Atlas connected Successfully");
}).catch((error)=>{
    console.log("MongoDB connection Error :",error);
})