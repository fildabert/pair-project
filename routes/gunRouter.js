const express = require('express')
const router = express.Router()
const gunController = require("../controllers/gunController")
const assignGuns = require("../middlewares/assign-guns")

router.get("/", assignGuns, gunController.showGuns)
router.post("/search", gunController.search)
router.get("/smg", gunController.allSmgPage)
router.get("/assaultrifle", gunController.allAssaultRiflePage)
router.get("/sniper", gunController.allSniperPage)
router.get("/handgun", gunController.allHandgunPage)
router.get("/smg/:id", gunController.smgGunPage)
router.get("/assaultrifle/:id", gunController.assaultrifleGunPage)
router.get("/sniper/:id", gunController.sniperGunPage)
router.get("/handgun/:id", gunController.handGunPage)
router.get('/add',gunController.addGun)
router.post('/add',gunController.postAddGun)

module.exports = router