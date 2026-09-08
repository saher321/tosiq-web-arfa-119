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