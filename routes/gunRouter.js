const express = require('express')
const router = express.Router()
const gunController = require("../controllers/gunController")
const assignGuns = require("../middlewares/assign-guns")

router.get("/", assignGuns, gunController.showGuns)
router.get("/smg/:id", gunController.smgGunPage)
router.get("/assaultrifle/:id", gunController.assaultrifleGunPage)
router.get("/sniper/:id", gunController.sniperGunPage)
router.get("/handgun/:id", gunController.handGunPage)

module.exports = router