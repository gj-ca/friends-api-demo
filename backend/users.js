
const express = require("express")
const router = express.Router()
const User = require("./User.js")

function isJson(req, res, next) {
    if (req.headers['content-type'] == 'application/json') {
        next()
    }
    else {
        res.send("Need to set your `content-type` header to `application/json`")
    }
}

router.get("", (req, res) => {
    res.send(JSON.stringify(User.getAll()))
})

router.get('/:id', (req, res) => {
    user = User.find(req.params.id)
    res.send(JSON.stringify(user))
})

router.post('', isJson, (req, res) => {
    try {
        User.create(req.body)
        res.send(200)
    } catch (e) {
        res.send(400)
    }
})

router.patch('/:id', isJson, (req, res) => {
    user = User.find(req.params.id)
    try {
        user.update(req.body)
        res.sendStatus(200)
    } catch (e) {
        res.send(400)
    }
})

router.delete('/:id', (req, res) => {
    user = User.find(req.params.id)
    try {
        user.delete()
        res.send(200)
    } catch (e) {
        res.send(404)
    }
})

module.exports = router