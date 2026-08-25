function saveToLs(){
    var n = document.getElementById("name").value
    
    localStorage.setItem('full-name', n)
}

function resetName(){
    localStorage.removeItem('full-name')
}

document.write(localStorage.getItem('full-name')??"no name assigned")