import express from 'express'
import productRouter from './routes/productRoutes.js'

const app = express()
const PORT = 3000

// http://localhost:3000/api/v1/routename
app.use('', productRouter)

app.get('/health', (req, res) => {
    return res.send({
        status: true,
        message: "Server is running..."
    })
})

app.listen(PORT, () => {
    console.log(`Server is starting at http://localhost:${PORT}`)
})