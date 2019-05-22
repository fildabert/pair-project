const db = require("../models/index")
module.exports = (req, res, next) =>{
    var smg = db.Smg.findAll()
    var assaultrifle = db.AssaultRifle.findAll()
    var handgun = db.Handgun.findAll()
    var sniper = db.SniperRifle.findAll()
    var allGuns = db.Gun.findAll()
    return Promise.all([smg, assaultrifle, handgun, sniper, allGuns])
        .then(result =>{
            var temp = [...result[0], ...result[1], ...result[2], ...result[3]]
            var temp2 = result[4]
            var currentGuns = []
            var allGuns = []
            temp.forEach(element =>{
                currentGuns.push(element.dataValues)
            })
            temp2.forEach(element =>{
                allGuns.push(element.dataValues)
            })
            currentGuns.sort((a, b) =>{
                return a.GunId - b.GunId
            })
            allGuns.sort((a, b) =>{
                return a.id - b.id
            })
            var promises = []
            if(currentGuns.length === 0){ 
                for(var i = 0; i < allGuns.length; i++){
                    if(allGuns[i].Type === "Smg"){
                        promises.push(
                            db.Smg.create({
                                name: allGuns[i].name,
                                ammoType: allGuns[i].ammoType,
                                capacity: allGuns[i].capacity,
                                GunId: allGuns[i].id,
                                price: allGuns[i].price
                            })
                        )
                    }else if(allGuns[i].Type === "Sniper"){
                        promises.push(
                            db.SniperRifle.create({
                                name: allGuns[i].name,
                                ammoType: allGuns[i].ammoType,
                                capacity: allGuns[i].capacity,
                                GunId: allGuns[i].id,
                                price: allGuns[i].price
                            })
                        )
                    }else if(allGuns[i].Type === "Assault Rifle"){
                        promises.push(
                            db.AssaultRifle.create({
                                name: allGuns[i].name,
                                ammoType: allGuns[i].ammoType,
                                capacity: allGuns[i].capacity,
                                GunId: allGuns[i].id,
                                price: allGuns[i].price
                            })
                        )
                    }else if(allGuns[i].Type === "Handgun"){
                        promises.push(
                            db.Handgun.create({
                                name: allGuns[i].name,
                                ammoType: allGuns[i].ammoType,
                                capacity: allGuns[i].capacity,
                                GunId: allGuns[i].id,
                                price: allGuns[i].price
                            })
                        )
                    }
                }
            }else{
                for(var i = 0; i < allGuns.length; i++){
                    var filter = currentGuns.filter(currentGuns =>(currentGuns.GunId === allGuns[i].id))
                    if(filter.length === 0){
                        if(allGuns[i].Type === "Smg"){
                            promises.push(
                                db.Smg.create({
                                    name: allGuns[i].name,
                                    ammoType: allGuns[i].ammoType,
                                    capacity: allGuns[i].capacity,
                                    GunId: allGuns[i].id,
                                    price: allGuns[i].price
                                })
                            )
                        }else if(allGuns[i].Type === "Sniper"){
                            promises.push(
                                db.SniperRifle.create({
                                    name: allGuns[i].name,
                                    ammoType: allGuns[i].ammoType,
                                    capacity: allGuns[i].capacity,
                                    GunId: allGuns[i].id,
                                    price: allGuns[i].price
                                })
                            )
                        }else if(allGuns[i].Type === "Assault Rifle"){
                            promises.push(
                                db.AssaultRifle.create({
                                    name: allGuns[i].name,
                                    ammoType: allGuns[i].ammoType,
                                    capacity: allGuns[i].capacity,
                                    GunId: allGuns[i].id,
                                    price: allGuns[i].price
                                })
                            )
                        }else if(allGuns[i].Type === "Handgun"){
                            promises.push(
                                db.Handgun.create({
                                    name: allGuns[i].name,
                                    ammoType: allGuns[i].ammoType,
                                    capacity: allGuns[i].capacity,
                                    GunId: allGuns[i].id,
                                    price: allGuns[i].price
                                })
                            )
                        }
                    }
                }
            }
            return Promise.all(promises)
        })
        .then(()=>{
            res.locals.allGuns = allGuns
            next()
        })
        .catch(err =>{
            res.send(err)
        })
}