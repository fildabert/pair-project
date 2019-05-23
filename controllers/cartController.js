const db = require("../models/index")
const sortDuplicates = require("../helpers/calculate-cart-duplicates")
const Cart = require('../models/index').Cart

class cartController{
    static showCart(req, res){
        if(req.session.user){
            return db.Cart.findAll({
                include:[{model: db.Gun}, {model: db.User}]
            })
                .then(result =>{
                    // res.render("cart.ejs")
                    sortDuplicates(result)
                    res.locals.cartItem = result
                    res.render("cart.ejs")
                })
        }else{
            return db.Cart.destroy({
                where: {},
                truncate: true
              })
              .then(()=>{
                  res.locals.error = `You have to login first to view cart`
                  res.render("home.ejs")
              })
        }
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
                    return db.Cart.destroy({
                        where: {},
                        truncate: true
                      })
                      .then(()=>{
                          res.locals.error = `You have to login first to purchase weapons`
                          res.render("gun-details-page.ejs")
                      })
                }
            })
            .then(() =>{
                res.redirect("/guns")
            })
        
    }

    static checkout(req, res){
        return db.Cart.findAll()
            .then(result =>{
                var promises = []
                for(var i = 0; i < result.length; i++){
                    promises.push(
                        db.GunUser.create({
                            UserId: result[i].UserId,
                            GunId: result[i].GunId
                        })
                    )
                }
                return Promise.all(promises)
            })
            .then(() =>{
                return db.Cart.destroy({
                    where: {},
                    truncate: true
                  })
            })
            .then(() =>{
                res.redirect("/")
            })

            .catch(err =>{
                res.send(err)
            })
    }

    static deleteGunCart(req,res) {
        Cart.destroy({
            where:{
                id:req.params.id
            }
        })
        .then(() => {
            res.redirect('/cart')
        })
        .catch((err) => {
            res.send(err)
        })
    } 
}

module.exports = cartController