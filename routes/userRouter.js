const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController")



router.get("/", userController.showLoginPage)
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