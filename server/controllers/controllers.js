import express from 'express'
// import bodyParser from "body-parser"

// Import Schemas
import Club from "../models/club.js"
import Event from "../models/event.js"
import Photo from '../models/photo.js'


const router = express.Router()


// ================
// CLUB FUNCTIONS
// ================

// GET: Get All the Clubs
export const getClubs = async(req,res) => {
    try {
        const foundClubs = await Club.find();
        res.status(200).json(foundClubs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// GET: Get single club by id
export const getClubById = async(req,res) => {
    const clubId = req.params.id
    try {
        const foundClub = await Club.findById(clubId);
        res.status(200).json(foundClub);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


// =================
// EVENTS FUNCTIONS
// =================

// GET: Get All events
export const getEvents = async(req,res) => {
    try {
        const foundEvents = await Event.find();
        res.status(200).json(foundEvents);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// GET: Get single event by id 
export const getEventById = async(req,res) => { 
    const eventId = req.params.id
    try {
        const foundEvent = await Event.findById(eventId)
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// POST: Post an event in DB 
export const postEvent = async(req,res) => {
    const {name, organizer, cheif_guest, description, timing, poster, part_link} = req.body
    const newEvent = new Event({name, organizer, cheif_guest, description, timing, poster, part_link}) 
    
    try {
        await newEvent.save()
        res.status(200).json({newEvent})
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}


// =================
// PHOTOS FUNCTIONS
// =================

// GET: Get All photos
export const getPhotos = async(req,res) => {
    try {
        const foundPhoto = await Photo.find();
        res.status(200).json(foundPhoto);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// POST: Post a photo in DB
export const postPhoto = async(req,res) => {
    const {name, link, image} = req.body
    const newPhoto = new Photo({name, link, image}) 
    
    try {
        await newPhoto.save()
        res.status(200).json({newPhoto})
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
} 
export default router;