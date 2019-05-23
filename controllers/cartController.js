const db = require("../models/index")

class cartController{
    static showCart(req, res){
        return db.Cart.findAll({
            include:[{model: db.Gun}]
        })
            .then(result =>{
                res.send(result)
            })
    }

    static addToCart(req, res){
        return db.Gun.findOne({where:{id: req.params.id}})
            .then(gun =>{
                res.locals.gun = gun
                if(req.session.user){
                    return db.Cart.create({
                        UserId: req.session.user.id,
                        GunId: gun.id
                    })
                }else{
                    // need to add: delete all cart items
                    res.locals.error = `You have to login first to purchase weapons`
                    res.render("gun-details-page.ejs")
                }
            })
            .then(() =>{
                res.redirect("/guns")
            })
        
    }
}

module.exports = cartController