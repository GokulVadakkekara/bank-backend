//import
//config: Loads .env file contents into process .env
require("dotenv").config();

//import express
const express = require("express")
//import db
require("./db/connection")

// import cors
const cors = require("cors")

// import router
const router= require('./Routes/router')
  
//import appMiddleware
const middleware =require('./Middleware/appMiddleware')

//create express server
const server= express()  // ethra cheytha express server application automatic aayi kittum 

//setup port number for server
const PORT = 3000 || process.env.PORT

//use cors,json parser in server app //cors use cheythale data share chiyan patta ee data json aanu . json data js nu manasilavilla so parse it
server.use(cors())
server.use(express.json())//parser
//use appmiddleware
server.use(middleware.appMiddleware)

//use router in server app
server.use(router)

//to resolve http request using express server
server.get('/',(req,res)=>{
    res.send("Bank server started!!!")

})

//run the server app in a specified port
server.listen(PORT,()=>{
    console.log(`bank server started at prt number ${PORT}`);
})

