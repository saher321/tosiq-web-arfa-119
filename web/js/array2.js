const names = ["Tahir", "Huraira", "Subhan", "Ali"]
const cities= ["Lahore", "Karanchi", "Islamabad", "Jaurabad", "Kotmonin"]

// 7 sept, 2026

// index number, 
// mode(1 -> remove, 0 -> replace value over index),
// given value
names.splice(2, 0, "Jawad")
// console.log(names)
const remainingCities = cities.slice(2)
console.log(remainingCities)

// ----------------
// const newArray = names.concat(cities)
const newArray = [ ...names, ...cities, "Football"]
// console.log(newArray)

function checkUser () {
    const users = [ "ali01", "usman.malik", "carol.john" ]
    
    let username = document.getElementById("email").value

    const alreadyExist = users.includes(username)

    if (alreadyExist) {
        console.log("This user already exist, try new username")
    } else {
        console.log("You can create an account with this username")
    }
}

const users = [ "ali01", "usman.malik", "carol.john" ]

const check = users.indexOf("caroljohn")
// console.log(check)


const employees = [
    {id:1011, name: "Jack", status: "inactive", salary: 45000},
    {id:1012, name: "Ruby", status: "inactive", salary: 205000},
    {id:1013, name: "Samanatha", status: "active", salary: 50000}
]
// map() => returns updated array, 
employees.map((emp) => {
    // console.log(emp.name, emp.salary)
})
// filter("inactive") return new array, 
// find(1012) => returns single object, 
const filteredEmployee = employees.find((emp) => emp.id == 1013)
// console.log(filteredEmployee)
// reduce(salary) returns totall value / overall value
// let sum = 0 :: old_suppose
const totalSalary = employees.reduce((sum, elem) => sum + elem.salary, 1)
// console.log(totalSalary)
// output: {id:1012, name: "Jack", status: "inactive"}
// output: 250,000
