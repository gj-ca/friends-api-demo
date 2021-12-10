// Loading the data when the window (page) loads

function newFriend(friend) {
    let tableBody = document.querySelector("#friend-data")
    let row = document.createElement("tr")
    // const {name, age, eye, hair, likes} = friend
    let button = document.createElement("button")
    button.innerText = "Remove"
    button.addEventListener("click", event => {
        let parent = event.target.parentNode
        parent.remove()
    })

    let editButton = document.createElement("button")
    editButton.innerText = "Edit Likes"
    editButton.addEventListener("click", () => {
        let input = document.createElement("input")
        input.addEventListener("change", event => {
            value = event.target.value
            parent = event.target.parentNode
            children = parent.children
            likes = children[4]
            likes.innerText = value
        })
        row.appendChild(input)
    }, {once: true})

    row.innerHTML = `
        <td>${friend.name}</td>
        <td>${friend.age}</td>
        <td>${friend.eye}</td>
        <td>${friend.hair}</td>
        <td>${friend.likes}</td>
    `
    row.appendChild(button)
    row.appendChild(editButton)
    tableBody.appendChild(row)
}

window.addEventListener("load", () => {
    $.getJSON("http://localhost:5000/users", data => {
        data.forEach(friend => newFriend(friend))
    })
})

let form = document.querySelector("#new-friend")
form.addEventListener("submit", event => {
    event.preventDefault()
    // Get the values
    const target = event.target
    const name = target[1].value
    const age = target[3].value
    const hair = target[5].value
    const eye = target[7].value
    const likes = target[9].value

    // make a row
    newFriend({
        name, age, 
        hair, eye, 
        likes
    })

    target[1].value = ""
    target[3].value = ""
    target[5].value = ""
    target[7].value = ""
    target[9].value = ""
})
//This would work if the buttons were already in the index.html
// let buttons = document.querySelectorAll(".remove")
// console.log(buttons)
// buttons.forEach(button =>
//     button.addEventListener("click", () => console.log("remove this!"))
// )





