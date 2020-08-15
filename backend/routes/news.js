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

router.get("/news/:topic", (req, res) => {
    const { topic, dateFrom, dateTo } = req.query;
    let todayDate = new Date();
    todayDate = todayDate.toISOString();
    axios({
        method: "get",
        url: `http://newsapi.org/v2/everything?q=${topic}&from=${
            dateFrom ? dateFrom : todayDate.substring(0, 10)
        }&to=${
            dateTo ? dateTo : todayDate
        }&pageSize=${10}&language=en&sortBy=popularity&apiKey=${
            process.env.newsKey
        }`,
    }).then(({ data }) => {
        res.status(200).send(data);
    });
});

module.exports = {
    newsRoute: router,
};
