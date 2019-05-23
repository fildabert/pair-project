const db = require("../models/index")

class cartController{
    static showCart(req, res){
        res.render("cart.ejs")
    }

    static addToCart(req, res){
        return db.Gun.findOne({where:{id: req.params.id}})
            .then(gun =>{
                res.locals.gun = gun
                if(req.session.user){

                }else{
                    res.locals.error = `You have to login first to purchase weapons`
                    res.render("gun-details-page.ejs")
                }
            })
        
    }
}

module.exports = cartController