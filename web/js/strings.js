let str1 = "I am from pakistan"
let str2 = "I am belongs to lahore"

// length
// console.log(str1.length)

// concat
// let result = str1.concat(" ",str2)
// let result = str1 + " " + str2
let result = `${str1} ${str2}`
// console.log(result)

// split
const bearerToken = "Bearer eyfefew9u0320d3d23d2.3d23re23d38482423.f3f4232d23"
const token = bearerToken.split(" ")[1]
// console.log(token)
const list = "apple,football,fruits,shoes,mouse"
const listArray = list.split(",")
// console.log(listArray)

let dateTime = "2026-09-07T06:38:56.924+00:00"

let date = dateTime.split("T")[0]
console.log(date)

// assignment
let websiteName = "https://www.udemy.org"

// output:
// www.udemy.org

// startsWith() :: boolean
// endsWith() :: boolean
// chatAt(2) => letter
// indexOf("@") => 6
// lowerCase()
// upperCase() 
// includes():: boolean
// slice() :: extracted string
// subString() :: extracted string
// trim() :: clean text :: "     Hello  World" => Hello World


let words = "Hello World"
let url = "https://google.com"
// let output = url.startsWith("https://")
// console.log(output)
// let output = url.endsWith(".com")
// console.log(output)
// let output = words.charAt(6)
// console.log(output)
// let output = words.indexOf("W")
// console.log(output)
// let output = words.toLowerCase()
// console.log(output)
// let output = words.toUpperCase() 
// console.log(output)
let userEmail = "my-email@gmail.com"
// let output = userEmail.includes("@")
// if (output) {
//     console.log("Email is valid")
// } else {
//     console.log("Email format should be follow")
// }
// let output = words.slice(0,5)
// console.log(output)
let output = words.substring(0,5)
console.log(output)

let username = "       Subhan Ali"
let cleanName = username.trim()
// console.log(username.length, cleanName.length)

let username2 = "Tahir Ali"
let replacedName = username2.replace("Ali", "Shahid")
console.log(replacedName)

let sentence = "I have one friend, and he is my best friend"
let replacedSentence = sentence.replaceAll("friend", "teacher")
console.log(replacedSentence)
