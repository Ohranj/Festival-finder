const express = require("express");

const { authRoutes } = require("./backend/routes/authRoutes");
const passport = require("passport");

require("./backend/services/mongoConnect");
require("./backend/services/passport");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(passport.initialize());
app.use(passport.session());

app.use("/", authRoutes);

app.listen(PORT, () => {
    console.log("Server running");
});
