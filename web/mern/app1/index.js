import express from "express"
import { users } from "./utils/dummyUser.js"

const app = express()
const port = 3000 // 5000 8000 7000

// users api
app.get("/users", (req, res) => {
    return res.send({
        status: true,
        users
    })
})

// request method: GET, POST, PUT / PATCH, DELETE
app.get("/greeting", (req, res) => {
    return res.send("Hello from EXPRESS.JS")
})

// http://localhost:3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

// assignment make product api that show 5 products
// id, skuNo, name, category, price