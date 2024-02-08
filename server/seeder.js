import mongoose from 'mongoose'
import dotenv from 'dotenv'

import Users from './Models/userModel.js'
import Forum from './Models/forumModel.js'
import Fish from './Models/fishModel.js'
import MRA from './Models/MRAModel.js'
import Harbour from './Models/harbourModel.js'
import Admin from './Models/adminModel.js'

import users from './data/User.js'
import fishes from './Data/Fishes.js' 
import forum from './Data/Forum.js'
import mra from './Data/MRA.js'
import harbour from './Data/Harbours.js'
import admin from './Data/Admin.js'

import connectDB from './Config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
    try{
        await Users.deleteMany()
        await Fish.deleteMany()
        await Forum.deleteMany()
        await MRA.deleteMany()
        await Harbour.deleteMany()
        await Admin.deleteMany()

        const createUser = await Users.insertMany(users)
        const fishSpecies = await Fish.insertMany(fishes)
        const forumpost = await Forum.insertMany(forum)
        const mra_area = await MRA.insertMany(mra)
        const harbours =  await Harbour.insertMany(harbour)
        const createAdmin = await Admin.insertMany(admin)

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
