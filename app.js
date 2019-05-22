const express = require('express')
const session = require("express-session")
const app = express()
const port = 3000
const db = require("./models/index")
const userRouter = require("./routes/userRouter")
const gunRouter = require("./routes/gunRouter")
const encrypt = require("./helpers/encrypt")



app.use((req, res, next) =>{
    res.locals.error = null
    res.locals.testa= "asd"
    res.locals.encrypt = encrypt
    next()
})

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{maxAge: 600000}
  }))

app.use(express.urlencoded({ extended: false }));

app.use("/users", userRouter)
app.use("/guns", gunRouter)

app.get("/", (req, res) =>{
    res.render("home.ejs")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))