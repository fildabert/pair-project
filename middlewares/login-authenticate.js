const db = require("../models/index")
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
module.exports = (req, res, next) =>{
    if(req.body.username && req.body.password){
        return db.User.findOne({where:{username: req.body.username}})
        .then(userData =>{
            res.locals.userData = userData
            return bcrypt.compare(req.body.password, userData.password)
        })
        .then(valid =>{
            if(valid){
                req.session.user = {
                    id: res.locals.userData.id,
                    username: res.locals.userData.username,
                    email: res.locals.userData.email,
                    balance: res.locals.userData.balance
                }
                next()
            }else{
                res.locals.error = "Invalid username or password"
                res.render("user-login.ejs")
            }
        })
        .catch(err =>{
            throw err
        })
    }else{
        res.locals.error = "You have to fill in all fields"
        res.render("user-login.ejs")
    }
    
    // return res.locals.authenticate(req.body)
    //     .then(result =>{
    //         console.log(result)
    //         if(result === true){
    //             next()
    //         }else{
    //             console.log("asdasd")
    //             res.send("NO")
    //         }
    //     })

}