import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/User.js'
import Users from './Models/userModel.js'
import connectDB from './Config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
    try{
        await Users.deleteMany()

        const createUser = await Users.insertMany(users)
        console.log(createUser)

        console.log('Data Inserted')
        process.exit()
    }
    catch(error) {
        console.log('Error in Insertion');
        console.log(error.message)
        process.exit()
    }
}

importData()
