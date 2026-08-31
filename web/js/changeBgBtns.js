applyTheme()
function applyTheme() {
    var clr = localStorage.getItem("bg")
    document.body.style.backgroundColor = clr
}

function changeBg(clr){
    document.body.style.backgroundColor = clr
    localStorage.setItem("bg", clr)
}

function changeBgByInput() {
    var myclr = document.getElementById("myclr").value
    document.body.style.backgroundColor = myclr
    localStorage.setItem("bg", myclr)
}