const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connecDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handller')

// middleware
app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

// app.get('/api/vl/tasks') - get all the tasks
// app.post('/api/vl/tasks) - create a new task
// app.get('/api/v1/task/:id') - get single task
// app.patch('/api/v1/tasks/:id') - update task
// app.delete(`/api/v1/tasks/:id') - delete task


const PORT = process.env.PORT || 3001

const start = async () => {
    try {
        await connecDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)        
    }
}
start()