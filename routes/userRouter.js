const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController")
var db = require("../models/index")
const loginAuthenticate = require("../middlewares/login-authenticate")
const registerAuthenticate = require("../middlewares/register-authenticate")


router.get("/", userController.showLoginPage)
router.get("/login", userController.showLoginPage)
router.post("/login", loginAuthenticate, userController.loginUser)
router.get("/profile/:username", userController.showUserPage)
router.get("/register", userController.showRegisterPage)
router.post("/register", registerAuthenticate, userController.registerUser)
router.get("/profile/:username/topUpBalance", userController.getTopUpBalance)
router.post("/profile/:username/topUpBalance", userController.postTopUpBalance)
router.get("/logout", userController.logout)

module.exports = router