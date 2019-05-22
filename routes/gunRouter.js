const express = require('express')
const router = express.Router()
const gunController = require("../controllers/gunController")
const assignGuns = require("../middlewares/assign-guns")

router.get("/", assignGuns, gunController.showGuns)

module.exports = router