const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const contactmsgRouter = require('./routes/contactus');

dotenv.config();

const app = express();

// CORS config for frontend
const corsOptions = {
    origin: [
        "https://your-frontend.onrender.com", // Replace with your frontend Render URL
        "http://localhost:5173"
    ],
    methods: ["GET", "POST"]
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.get('/', (req, res) => res.json({ message: 'Home Page' }));
app.use('/contactus', contactmsgRouter);

// MongoDB + Server start
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT} and connected to DB`);
        });
    })
    .catch((error) => console.error(error));
