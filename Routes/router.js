
// import express
const express = require('express')
//import middleware
const middleware= require("../Middleware/routerSpecific")

//import controller
const userController = require('../controllers/userController')

//create routes , using express.Router() class, object
const router = new express.Router()

//define routes to resolve http request
//register req
router.post("/employee/register",userController.register)

//login  req
router.post('/employee/login',userController.login)
//get balance req
router.get(`/user/balance/:acno`,middleware.logMiddleware,userController.getbalance)
//fund transfer
router.post('/user/transfer',middleware.logMiddleware,userController.transfer)

//user/ministatement
router.get('/user/ministatement',middleware.logMiddleware,userController.getTransations)

//delete account
router.delete('/user/delete',middleware.logMiddleware,userController.deleteMyAcno)

//export router
module.exports = router