const db = require("../models/index")
const router = require("../routes/userRouter")


class userController{
    static showLoginPage(req, res){
        return res.render("user-login.ejs")
    }
    static loginUser(req, res){
        return res.redirect(`/users/${req.session.user.username}`)
    }
    static showUserPage(req, res){
        return res.render("user-page.ejs", {
            userData:{
                username: req.session.user.username,
                email: req.session.user.email,
                balance: req.session.user.balance|| 0
            }
        })
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