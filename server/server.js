import express from 'express'
import dotenv from 'dotenv'
import connectDB from './Config/db.js';
import fishRoutes from './routes/fishRoutes.js'
import harbourRoutes from './routes/harbourRoutes.js'
import abundanceRoutes from './routes/abundanceRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()

const port = process.env.PORT || 5000;
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.send("Server Running");
})

app.use('/fish', fishRoutes)
app.use('/harbour', harbourRoutes)
app.use('/abundance', abundanceRoutes)
app.use('/user', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})