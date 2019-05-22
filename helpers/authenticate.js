var encrypt = require("./encrypt")
var db = require("../models/index")
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

function authenticate(obj){
    return db.User.findOne({where:{username: obj.username}})
        .then(userData =>{
            bcrypt.compare(obj.password, userData.password)
        })
        .then(res =>{
            return res
        })
        .catch(err =>{
            throw err
        })
}

module.exports =authenticate 

