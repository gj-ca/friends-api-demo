cors = require("cors")
const bodyParser = require('body-parser')
const express = require("express")
const app = express()

app.use(cors())
app.use(bodyParser.json())

const User = require("./User.js")
User.readFile()

app.get("/", (req, res) => res.send("OK"))

app.use("/users", require("./users.js"))

app.use("/my-friends", () => {})

app.listen(5000, () => {
})