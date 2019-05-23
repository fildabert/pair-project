const express = require('express')
const router = express.Router()
const cartController = require("../controllers/cartController")

router.get("/", cartController.showCart)
router.post("/add/:id", cartController.addToCart)
router.post("/checkout", cartController.checkout)
module.exports = router