module.exports = (result) =>{
    var temp = []
    for(var i = 0; i < result.length; i++){
        var duplicate = 1
        for(var j = 0; j < result.length; j++){
            if(result[i].GunId === result[j].GunId && i !== j){
                duplicate++
                result.splice(i, 1)
                j = -1
            }
        }
        temp.push([result[i].dataValues, duplicate])
    }
    var cartItemz = []
    for(var i = 0; i < temp.length; i++){
        temp[i][0].quantity = temp[i][1]
        cartItemz.push(temp[i][0])
    }
    return cartItemz
}