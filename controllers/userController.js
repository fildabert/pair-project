const db = require("../models/index")
const router = require("../routes/userRouter")
const User = require('../models/index').User


class userController{
    static showLoginPage(req, res){
        if(req.session.user){
            res.redirect(`/users/profile/${req.session.user.username}`)
        }else{
            res.render("user-login.ejs")
        }
    }
    
    static loginUser(req, res){
        return res.redirect(`/users/profile/${req.session.user.username}`)
    }
    
    static showUserPage(req,res) {
        User.findOne({
            where: {
                username: req.session.user.username
            }
        })
        .then((userData)=> {
            res.render('user-page.ejs', {
                userData:userData
            })
        })
    }

    static showRegisterPage(req, res){
        return res.render("user-register.ejs")
    }
    static registerUser(req, res){
        return db.User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            balance: 0
        })
            .then(()=>{
                res.redirect("/")
            })
            .catch((err) => {
                res.locals.error = err
                res.render("user-register.ejs")
            })
    }

    static getTopUpBalance(req,res) {
        return User.findOne({
            where: {
                username: req.params.username
            }
        })
        .then((dataUser) => {
            res.render('user-topUp.ejs', {
                dataUser:dataUser
            })
        })
    }

    static postTopUpBalance(req,res) {
       User.findOne({
           where:{
               username:req.params.username
           }
       })
        .then((data) => {
            data.increment('balance',{by:req.body.balance})
        })
        .then(() => {
            res.redirect(`/users/profile/${req.session.user}`)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static logout(req, res){
        req.session.destroy()
        res.redirect("/")
    }
    
}

module.exports = userController