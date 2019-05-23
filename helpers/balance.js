module.exports = (balance,price) => {
    if(balance - price < 0) {
        return `money is not enough`
    } else {
        return balance - price
    }
}

