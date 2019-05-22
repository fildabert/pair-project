const db = require("../models/index")

class gunController{
    static showGuns(req, res){
        var smg = db.Smg.findAll()
        var assaultrifle = db.AssaultRifle.findAll()
        var handgun = db.Handgun.findAll()
        var sniper = db.SniperRifle.findAll()
        return Promise.all([smg, assaultrifle, handgun, sniper])
            .then(allGunz =>{
                res.render("guns-display.ejs", {
                    smg: allGunz[0],
                    assaultrifle: allGunz[1],
                    handgun: allGunz[2],
                    sniper: allGunz[3]

                })
            })
    }
}

module.exports = gunController