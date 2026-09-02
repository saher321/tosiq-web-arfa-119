const users = [
    {id: 101, name: "Taha", email: "taha@email.com", status: "Active"},
    {id: 102, name: "Alex", email: "alx@email.com", status: "Inactive"},
    {id: 103, name: "Carol", email: "carol@email.com", status: "Inactive"},
    {id: 104, name: "Samith", email: "sam@email.com", status: "Active"},
    {id: 105, name: "John", email: "john@email.com", status: "Active"},
    {id: 106, name: "Umer", email: "umer@email.com", status: "Active"},
]

showUsers(users)

function showUsers (data) {
    let userList = document.getElementById("users-tbl")
    console.log(data)
    data.map((user, i) => {
        userList.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.status}</td>
        </tr>
        `
    })
}

function filterByStatus() {
    let sts = document.getElementById("status").value
    
    let userList = document.getElementById("users-tbl")

    userList.innerHTML = ""

    if (sts == "all") {
        showUsers(users)
    } else {
        const filteredUsers = users.filter((user) => user.status == sts )
        showUsers(filteredUsers)
    }
}