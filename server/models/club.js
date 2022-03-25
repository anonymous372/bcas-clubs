import mongoose from "mongoose";

const clubSchema  = new mongoose.Schema({
    name: String,
    type: String,
    president: String,
    vice_president: String,
    secratary: String,
    convener: String,
    join_link: String, 
    logo_img: String,
    description : String 
})


export default mongoose.model('Club', clubSchema);