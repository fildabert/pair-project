const db = require("../models/index")
const router = require("../routes/userRouter")


class userController{
    static showLoginPage(req, res){
        return res.render("user-login.ejs")
    }
    static showRegisterPage(req, res){
        return res.render("user-register.ejs")
    }
    static registerUser(req, res){
        return db.User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        })
            .then(()=>{
                res.redirect("/")
            })
    }
    
        
    
}

module.exports = userController