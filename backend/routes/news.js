const router = require("express").Router();
const axios = require("axios");

require("dotenv").config();

router.get("/news", (req, res) => {
    axios({
        method: "get",
        url: `http://newsapi.org/v2/top-headlines?country=${req.query.countryCode}&apiKey=${process.env.newsKey}`,
    }).then(({ data }) => {
        res.send(data);
    });
});

module.exports = {
    newsRoute: router,
};
