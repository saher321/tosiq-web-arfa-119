applyColor()
function applyColor (){
    let clr = localStorage.getItem("bgclr")
    if (clr){
        document.body.style.backgroundColor = clr
    }
}

function saveColorByInput (){
    let clr = document.getElementById("clr").value

    if (clr.startsWith("#")) {
        document.body.style.backgroundColor = `#${clr}`
        localStorage.setItem("bgclr", `#${clr}`)
    }
    document.body.style.backgroundColor = clr
    
    localStorage.setItem("bgclr", clr)
}

// arrays
// splice(), map(), filter(), find(), reduce()

const names = ["Saad", "Ali", "Yayah", "Atif", "Furqan"]
// 1st param => targeting index
// 2nd param => mode 0 -> add / 1 -> remove
// 3rd param(optional) => "New name"
// names.splice(3, 1)
names.splice(3, 1, "Usman")
// console.log(names)

const products = [
    {id: 1, name: "Keyboard", stock: 34},
    {id: 2, name: "Mouse", stock: 12},
    {id: 3, name: "SSD", stock: 2},
    {id: 4, name: "RTX 5090", stock: 19},
    {id: 5, name: "OLED", stock: 22},
]

// products.map((product) => {
//     console.log(product.name, product.stock)
// })

function filterProdByInput () {

    let limit = document.getElementById("limit").value
    
    const filteredProducts = products.filter((prod) => prod.stock < limit)
    // console.log(filteredProducts)
    
    let list = document.getElementById("result")
    list.innerHTML = ""
    filteredProducts.map((fp) => {
        list.innerHTML += `
        <li>${fp.name}</li>
        `
    })
}

findMethod()
function findMethod () {
    let productName = "Keyboard"

    const product = products.find((prod) => prod.name == productName)

    if (product == null) {
        console.log("Product not found")
    } else {
        console.log(product)
    }
}

let totalProducts = products.reduce((sum, p) => sum + p.stock, 0)
console.log("Total products in my inventory:", totalProducts)


// React
// components
// props
// hooks - Features
// state management
// real dom vs virtual