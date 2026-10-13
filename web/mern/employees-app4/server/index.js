// pkg: express, mongoose, dotenv, nodemon

import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import employeeRouter from './modules/employee/employee.routes.js'
import cors from 'cors'
// configurations
dotenv.config()
const app = express()
const PORT = process.env.PORT
const PREFIX = "/api/v1"
app.use(cors())

// all routes
// http://localhost:3000/api/v1/employees
app.use(PREFIX, employeeRouter)

app.get("/", (req, res) => {
    return res.send({
        status: true,
        message: "Server is running..."
    })
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is started at http://localhost:${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})