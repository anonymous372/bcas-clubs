import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser"

const app  = express()

const PORT = 4000;

// Import Seeds
import { seedDB } from "./seed.js";

// Import routes
import route from "./routes/routes.js"

// Config Body Parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

// Connect to database
const MONGODB_URL = "mongodb+srv://sourabh:zD350B9mie3yNM9X@cluster0.k6pjr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to Database")
} catch (error) {
    console.log("DB Err",error);
}

// Seed the DB (Seeded Clubs, Events, Photos) 
// seedDB()

// Use Routes
app.use("/api/", route)

app.listen(PORT,console.log(`Listening on port : ${PORT}`))
