import express from 'express';
const router = express.Router();

// Import controllers
import {getClubs, getClubById} from "../controllers/controllers.js"
import {getEvents, getEventById, postEvent} from "../controllers/controllers.js" 
import {getPhotos, postPhoto} from "../controllers/controllers.js" 


// ROUTES (localhost:4000/api/*)

// Club Routes
router.get("/clubs", getClubs)
router.get("/club/:id", getClubById)


// Event Routes
router.get("/events", getEvents)
router.get("/event/:id", getEventById)
router.post("/events", postEvent)


// Photo Routes
router.get("/photos", getPhotos)
router.post("/photos", postPhoto)


export default router;