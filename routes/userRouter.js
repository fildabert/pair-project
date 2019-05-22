const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController")
var db = require("../models/index")
const loginAuthenticate = require("../middlewares/login-authenticate")



router.get("/", userController.showLoginPage)
router.get("/login", userController.showLoginPage)
router.post("/login", loginAuthenticate, userController.loginUser)
router.get("/profile/:username", userController.showUserPage)
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