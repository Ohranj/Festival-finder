const express = require("express");

require("./backend/services/mongoConnect");

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server running");
});
