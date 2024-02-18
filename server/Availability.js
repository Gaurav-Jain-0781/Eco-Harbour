import xlsx from 'xlsx'
import connectDB from './Config/db.js';
import dotenv from 'dotenv'
import Abundance from './Models/abundanceModel.js';
import axios from 'axios'

dotenv.config()
connectDB()

const workbook = xlsx.readFile('D:\\Web Development\\Eco-Harbour\\Docs\\Datasets\\Abundance.xlsx');

const sheetName = workbook.SheetNames[1];
const worksheet = workbook.Sheets[sheetName];

const data = xlsx.utils.sheet_to_json(worksheet);

data.forEach(async (row) => {
    try {
        const { state, abundance, fish } = row;
        const { data } = await axios.get(`http://localhost:5000/fish/search/${fish}`);

        const fishId = data[0]._id;

        const newAbundance = new Abundance({
            fishId,
            state,
            abundance
        });

        await newAbundance.save();
        
    } catch (error) {
        console.error(`Error inserting data: ${error.message}`);       
    }
});
