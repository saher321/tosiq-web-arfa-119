const names = ["Tahir", "Huraira", "Subhan", "Ali"]
const cities= ["Lahore", "Karanchi", "Islamabad"]

// const newArray = names.concat(cities)
const newArray = [ ...names, ...cities, "Football"]
console.log(newArray)

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
console.log(check)
