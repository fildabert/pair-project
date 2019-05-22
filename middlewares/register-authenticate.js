module.exports = (req, res, next) =>{
    if(req.body.username && req.body.password && req.body.email){
        next()
    }else{
        res.locals.error = "You have to fill in all fields"
        res.render("user-register.ejs")
    }
}