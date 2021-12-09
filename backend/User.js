fs = require('fs')

class User {
    static users = []
    static lastId = 0
    static path = './users.json'
    constructor({name, hair, eye, age, likes}) {
        this.id = User.generateId()
        this.name = name
        this.hair = hair
        this.eye = eye
        this.age = age
        this.likes = likes
        User.users.push(this)
    }
    static generateId() {
        this.lastId += 1
        return this.lastId 
    }

    static readFile() {
        require(this.path).forEach(user => {
            new User(user)
        });
    }
    static writeToFile() {
        fs.writeFile(this.path, JSON.stringify(User.users, null, 4), () => {})
    }

    static getAll() {
        return this.users
    }

    static find(id) {
        return this.users.find(e => e.id == id)
    }

    static create(user) {
        new User(user)
        User.writeToFile()
    }

    delete() {
        console.log(User.users.indexOf(this))
        User.users.splice(User.users.indexOf(this), 1)
        User.writeToFile()
    }
    
    update({name, hair, eye, age, likes}) {
        this.name = name || this.name
        this.hair = hair || this.hair
        this.eye = eye || this.eye
        this.age = age || this.age
        this.likes = likes || this.likes
        User.writeToFile()
    }
}

module.exports = User