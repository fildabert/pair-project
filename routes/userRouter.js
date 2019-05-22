const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController")
var encrypt = require("../helpers/encrypt")
var db = require("../models/index")
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);


router.get("/", userController.showLoginPage)
router.post("/login", (req, res, next) =>{
    return db.User.findOne({where:{username: req.body.username}})
        .then(userData =>{
            res.locals.userData = userData
            return bcrypt.compare(req.body.password, userData.password)
        })
        .then(valid =>{
            console.log(valid)
            if(valid){
                req.session.user = {
                    id: res.locals.userData.id,
                    username: res.locals.userData.username
                }
                next()
            }else{
                res.locals.error = "Invalid username or password"
                res.render("user-login.ejs")
            }
        })
        .catch(err =>{
            throw err
        })
    // return res.locals.authenticate(req.body)
    //     .then(result =>{
    //         console.log(result)
    //         if(result === true){
    //             next()
    //         }else{
    //             console.log("asdasd")
    //             res.send("NO")
    //         }
    //     })

}, userController.loginUser)
router.get("/register", userController.showRegisterPage)
router.post("/register", (req, res, next) =>{
    if(req.body.username && req.body.password && req.body.email){
        next()
    }else{
        res.locals.error = "You have to fill in all fields"
        res.render("user-register.ejs")
    }
}, userController.registerUser)
module.exports = router