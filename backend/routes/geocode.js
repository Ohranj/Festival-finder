const router = require("express").Router();
const axios = require("axios");

require("dotenv").config();

router.get("/geo", (req, res) => {
    axios({
        method: "get",
        url: `https://api.opencagedata.com/geocode/v1/json?q=${Number(
            req.query.lat
        ).toFixed(6)}+${Number(req.query.lng).toFixed(6)}&key=${
            process.env.geocodeKey
        }`,
    }).then(({ data }) => {
        res.send(data.results[0].components.country);
    });
});

module.exports = {
    geocodeRoute: router,
};
