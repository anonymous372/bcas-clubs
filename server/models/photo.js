import mongoose from "mongoose";

const photoSchema  = new mongoose.Schema({
    name: String,
    link: String,
    image: String
})


export default mongoose.model('Photo', photoSchema);