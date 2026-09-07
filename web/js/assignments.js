function addItem() {
    let text = document.getElementById("url").value
    let urlList = document.getElementById("url-list")

    urlList.innerHTML += `<option>${text}</option>`
}

function visitWebsite() {
    let urlList = document.getElementById("url-list").value

    window.open(urlList)
}
// ----------------------

differElements()
function differElements() {

    const arr = [ 22, "a", "Ali", "Pakistan", -44, "WAR", "America" ]
    const words = []
    const letters = []
    const numbers = []

    //  typeoff
    for(var i=0; i< arr.length; i++) {
        // console.log(typeof arr[i], arr[i])
        if (typeof arr[i] == "number") {
            numbers.push(arr[i])
        } else if (typeof arr[i] == "string" && arr[i].length > 1 ) {
            words.push(arr[i])
        } else {
            letters.push(arr[i])
        }
    }

    console.log(
        "Words:", words,
        "Letters:", letters,
        "Numbers:", numbers,
    )
}