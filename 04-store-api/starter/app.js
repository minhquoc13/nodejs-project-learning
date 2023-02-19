require('dotenv').config()
require('express-async-errors')
// async error

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const productRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json())

// routes

app.get('/', (req, res) => {
    res.json({hello: 'hello world'})
})

app.use('/api/v1/products', productRouter)

// product routes

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        // connectDB
        await connectDB(process.env.MONGO_URI)
        console.log('Connect database successfully!!!')
        app.listen(port ,() => {
            console.log(`app is running on port ${port}`);
        })
    } catch (error) {
        console.log(error)
    }
}
start()

