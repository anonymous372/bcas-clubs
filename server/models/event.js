import mongoose from "mongoose";

const eventSchema  = new mongoose.Schema({
    name: String,
    organizer: String,
    cheif_guest: String,
    description: String,
    timing: String,
    poster: String,
    part_link: String
})


export default mongoose.model('Event', eventSchema);