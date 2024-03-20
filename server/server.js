import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDB from './Config/db.js';
import fishRoutes from './routes/fishRoutes.js'
import harbourRoutes from './routes/harbourRoutes.js'
import abundanceRoutes from './routes/abundanceRoutes.js'
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/forumRoutes.js'
import feedbackRoutes from './routes/feedbackRoutes.js'
import recordRoutes from './routes/recordRoutes.js'

import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import upload from './middleware/multerMiddleware.js'

dotenv.config()
connectDB()

const port = process.env.PORT || 5000;
const app = express()

// Request Body Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// Cookie Parser Middleware
app.use(cookieParser())

// Multer Images Access
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Server Running");
})

app.use('/fish', fishRoutes)
app.use('/harbour', harbourRoutes)
app.use('/abundance', abundanceRoutes)
app.use('/user', userRoutes)
app.use('/post', postRoutes)
app.use('/feedback', feedbackRoutes)
app.use('/record', recordRoutes)

app.use(notFound)
app.use(errorHandler)
app.use('/record/upload', upload)

app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})