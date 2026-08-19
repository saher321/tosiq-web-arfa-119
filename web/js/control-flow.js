// a > b
// a < b

// a == b

// 2 === "2"

// a && b

// a || b

// user = null | {name:"Ali", age: 33}
// !user    ==> User not found | user has been found
function showData() {
    // var name="July"

    // if (name) { // true
    //     console.log(name)
    // } else { // false
    //     console.log("Name not provided")
    // }

    var a = Number(document.getElementById("no1").value)
    var res = document.getElementById("result")
    
    // if (a % 2 == 0) {
    //     res.innerText = "Number is even"
    // } else {
    //     res.innerText = "Number is odd"
    // }

    // if (a % 4 == 0) {
    //     res.innerText = a + " is Leap year"
    // } else {
    //     res.innerText = a + " isn't Leap year"
    // }

    if (a > 0) {
        res.innerText = "Given number is positive"
    } else {
        res.innerText = "Given number is negative"
    }


}