const db = require("../models/index")
const Gun = require('../models/index').Gun

class gunController{
    static showGuns(req, res){
        // var smg = db.Smg.findAll()
        // var assaultrifle = db.AssaultRifle.findAll()
        // var handgun = db.Handgun.findAll()
        // var sniper = db.SniperRifle.findAll()
        // return Promise.all([smg, assaultrifle, handgun, sniper])
        //     .then(allGunz =>{
        //         res.render("guns-display.ejs", {
        //             smg: allGunz[0],
        //             assaultrifle: allGunz[1],
        //             handgun: allGunz[2],
        //             sniper: allGunz[3]

        //         })
        //     })
        return db.Gun.findAll()
            .then(guns =>{
                res.locals.allGuns = guns
                res.render("guns-display.ejs")
            })
            .catch(err =>{
                res.send(err)
            })
    }
    static smgGunPage(req, res){
        return db.Gun.findOne({where:{id: req.params.id}})
            .then(gun =>{
                res.locals.gun = gun
                res.render("gun-details-page.ejs")
            })
            .catch(err =>{
                res.send(err)
            })
    }
    static assaultrifleGunPage(req, res){
        return db.Gun.findOne({where:{id: req.params.id}})
            .then(gun =>{
                res.locals.gun = gun
                res.render("gun-details-page.ejs")
            })
            .catch(err =>{
                res.send(err)
            })
    }
    static sniperGunPage(req, res){
        return db.Gun.findOne({where:{id: req.params.id}})
            .then(gun =>{
                res.locals.gun = gun
                res.render("gun-details-page.ejs")
            })
            .catch(err =>{
                res.send(err)
            })
    }
    static handGunPage(req, res){
        return db.Gun.findOne({where:{id: req.params.id}})
            .then(gun =>{
                res.locals.gun = gun
                res.render("gun-details-page.ejs")
            })
            .catch(err =>{
                res.send(err)
            })
    }

    static addGun(req,res) {
        Gun.findAll()
        .then((dataGun) => {
            res.render('addGuns.ejs', {
                dataGun:dataGun
            })
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static postAddGun(req,res) {
        Gun.create({
            name: req.body.name,
            ammoType: req.body.ammoType,
            capacity: req.body.capacity,
            Type: req.body.type,
            price:req.body.price
        })
        .then(() => {
            res.redirect('/guns')
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static allSmgPage(req, res){
        return db.Smg.findAll()
            .then(guns =>{
                res.locals.allGuns = guns
                res.render("guns-display.ejs",{
                    type: "Smg"
                })
            })
            .catch(err =>{
                res.send(err)
            })
    }
    static allAssaultRiflePage(req, res){
        return db.AssaultRifle.findAll()
            .then(guns =>{
                res.locals.allGuns = guns
                res.render("guns-display.ejs", {
                    type: "Assault Rifle"
                })
            })
            .catch(err =>{
                res.send(err)
            })
    }
    static allSniperPage(req, res){
        return db.SniperRifle.findAll()
            .then(guns =>{
                res.locals.allGuns = guns
                res.render("guns-display.ejs", {
                    type: "Sniper"
                })
            })
            .catch(err =>{
                res.send(err)
            })
    }
    static allHandgunPage(req, res){
        return db.Handgun.findAll()
            .then(guns =>{
                res.locals.allGuns = guns
                res.render("guns-display.ejs", {
                    type: "Handgun"
                })
            })
            .catch(err =>{
                res.send(err)
            })
    }

    static search(req, res){
        return db.Gun.findAll() 
            .then(guns =>{
                var promises = []
                var regexp = new RegExp(req.body.search, "i")
                for(var i = 0; i < guns.length; i++){
                    var match = guns[i].name.match(regexp)
                    if(match !== null){
                        // console.log(match.input)
                        promises.push(
                            db.Gun.findOne({where:{name: match.input}})
                        )
                    }
                }
                return Promise.all(promises)
            })
            .then(result =>{
                res.locals.allGuns = result
                res.render("guns-display.ejs")
            })
            .catch(err =>{
                res.send(err)
            })
    }

}

module.exports = gunController