import express from "express"

const app = express()
const port = 3000 // 5000 8000 7000

// request method: GET, POST, PUT / PATCH, DELETE
app.get("/greeting", (req, res) => {
    return res.send("Hello from EXPRESS.JS")
})

// http://localhost:3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})