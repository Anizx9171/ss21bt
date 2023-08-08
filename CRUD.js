let arr = [{ id: 1, name: "Vũ Văn Vong", age: "2000" }, { id: 2, name: "ax lexmis", age: "28" }]
let idtang = 3;
let idUpdate = null
function inra() {
    let user = arr.reduce((human, value) => {
        return human + `<tr>
        <td>${value.id}</td>
        <td>${value.name}</td>
        <td>${value.age}</td>
        <td>
            <button onclick="edit(${value.id})">Edit</button>
            <button onclick="deleteTable()">Delete</button>
        </td>
    </tr>`
    }, "")
    document.querySelector("tbody").innerHTML = ""
    document.querySelector("tbody").innerHTML = user
}
inra()

let button = document.querySelectorAll("body>div button")
console.log(button);
let form = document.querySelector("form")

function add() {
    form.style.display = "block"
}
form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (idUpdate != null) {
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        arr[idUpdate].age = age
        arr[idUpdate].name = name
        inra()
        form.reset()
        form.style.display = "none"
        idUpdate = null
        return
    }

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let id = idtang;
    idtang++

    let newUser = { id: id, name: name, age: age }
    arr.push(newUser)
    inra()
    form.reset()
    form.style.display = "none"
})
function edit(id) {
    form.style.display = "block"
    let index = arr.findIndex(value => value.id == id)
    if (index > -1) {
        document.getElementById("name").value = arr[index].name
        document.getElementById("age").value = arr[index].age
        idUpdate = index
    }
}

function deleteTable(id) {
    arr.splice(id, 1)
    inra()
}
document.getElementById("canel").addEventListener("click", () => { form.style.display = "none" })