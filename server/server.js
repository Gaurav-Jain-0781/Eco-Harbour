import express from 'express'
import dotenv from 'dotenv'
import fishes from './Data/Fishes.js';

dotenv.config()

import connectDB from './Config/db.js';
connectDB()

const port = process.env.PORT || 5000;
const app = express()

app.get('/', (req, res) => {
    res.send("Server Running");
})

app.get('/fish', (req, res) => {
    res.json(fishes);
})

app.get('/fish/single-fish', (req, res) => {
    const f = fishes.find((fish) => fish["Local Name"] === "areolated-cod")
    res.json(f);
})

app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})