const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");

const { authRoutes } = require("./backend/routes/authRoutes");
const { geocodeRoute } = require("./backend/routes/geocode");

require("dotenv").config();
require("./backend/services/mongoConnect");
require("./backend/services/passport");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 1000,
        keys: [process.env.cookieKey],
    })
);

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", authRoutes);
app.use("/", geocodeRoute);

app.listen(PORT, () => {
    console.log("Server running");
});
