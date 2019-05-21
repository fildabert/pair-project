const express = require('express')
const app = express()
const port = 3000
const db = require("./models/index")
const userRouter = require("./routes/userRouter")
const gunRouter = require("./routes/gunRouter")

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) =>{
    res.render("home.ejs")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))