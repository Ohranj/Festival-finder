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
        res.json({
            country: data.results[0].components.country,
            countryCode: data.results[0].components.country_code,
        });
    });
});

module.exports = {
    geocodeRoute: router,
};
