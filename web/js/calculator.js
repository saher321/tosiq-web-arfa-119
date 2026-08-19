// function declaration
// function calling

function getSum() {
    var a = Number(document.getElementById("no1").value)
    var b = Number(document.getElementById("no2").value)
    var sum = a + b

    var res = document.getElementById("result")
    res.innerText = sum
}

function getSub() {
    var a = Number(document.getElementById("no1").value)
    var b = Number(document.getElementById("no2").value)
    var sub = a - b

    var res = document.getElementById("result")
    res.innerText = sub
}

function getDiv() {
    var a = Number(document.getElementById("no1").value)
    var b = Number(document.getElementById("no2").value)
    var div = a / b

    var res = document.getElementById("result")
    res.innerText = div
}

function getMul() {
    var a = Number(document.getElementById("no1").value)
    var b = Number(document.getElementById("no2").value)
    var mul = a * b

    var res = document.getElementById("result")
    res.innerText = mul
}