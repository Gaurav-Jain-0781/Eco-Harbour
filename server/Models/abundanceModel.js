import mongoose from 'mongoose'

const abundanceSchema = new mongoose.Schema({
    fishId: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
    },
    state: {
        type: String, 
        required : true, 
    }, 
    abundance: {
        type: String, 
        required: true,
    }
}, {
    timestamps: true,
})

const Abundance = mongoose.model("Abundance", abundanceSchema)

export default Abundance;