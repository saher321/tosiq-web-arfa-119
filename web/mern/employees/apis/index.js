import express from 'express'
import employeeRouter from './modules/employees/employeeRoutes.js'
import cors from 'cors'
const app = express()
const PORT = 3000
const PREFIX = '/api/v1'

app.use(cors())
app.use(PREFIX, employeeRouter)

app.get("/check-health", (req, res) => {
    return res.send({
        status: true,
        message: "Server is running..."
    })
})
app.listen(PORT, () => {
    console.log(`Server is started at http://localhost:${PORT}`)
})