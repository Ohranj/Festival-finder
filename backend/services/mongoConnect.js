const mongoose = require("mongoose");

require("dotenv").config();

const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(
    `mongodb+srv://ajdorrington:${DB_PASSWORD}@cluster0.f9nsb.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            return console.log("Error in database connection");
        }
        console.log("Database connected");
    }
);
