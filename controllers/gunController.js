const db = require("../models/index")

class gunController{
    static showGuns(req, res){
        return res.locals.allGuns
            .then(allGunz =>{
                res.send(allGunz)
            })
    }
}

module.exports = gunController