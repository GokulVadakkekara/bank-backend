//define application specfic middleware

const appMiddleware=(req,res,next)=>{
    console.log('Application Specfic Middleware');
    next()
}
module.exports={
    appMiddleware
}