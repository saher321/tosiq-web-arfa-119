// indexes         0        1        2         3        4
const colors = ["Black", "White", "Purple", "Orange", "Red"]

// colors.pop()
colors.push("Brown")

colors.shift()
colors.unshift("Peach")

console.log(colors)

// console.log("Colors list length", colors.length)

// console.log(colors[3])
let select = document.getElementById("clrList")

for(let i=0; i <= colors.length-1; i++){
    // console.log(colors[i])
    select.innerHTML += "<option>" + colors[i] + "</option>"
}


function addNewItem () {
    let text = document.getElementById("text")
    let ul = document.getElementById("listItem")

    ul.innerHTML += "<li>" + text.value + "</li>"

    text.value = ""
}