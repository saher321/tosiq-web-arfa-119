import express from 'express'
import userRouter from './modules/user/user.routes.js'
import cors from 'cors'
import connectDB from './config/db.js'


const app = express()

app.use(cors())
app.use(express.json())

const PORT = 3000
const PREFIX = '/api/v1'


app.use(PREFIX, userRouter)

app.get("/check", (req, res) => {
    return res.send({
        status: true,
        message: "Server is fine"
    })
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is started at http://localhost:${PORT}`)
    })
})