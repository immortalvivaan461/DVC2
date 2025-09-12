const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const contactmsgRouter = require('./routes/contactus');

dotenv.config();

const app = express();

// CORS config for frontend
const corsOptions = {
  origin: "https://dvc2-1.onrender.com", // frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
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
