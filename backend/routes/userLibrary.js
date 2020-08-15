const router = require("express").Router();
const axios = require("axios");
const { userModel } = require("../models/User");

require("dotenv").config();

const checkUserExists = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send("User does not exist");
    }
    next();
};

router.get("/topics", checkUserExists, async (req, res) => {
    const user = await userModel.findById(req.user._id);
    res.status(200).send(user.topics);
});

router.post("/addtopic", checkUserExists, async (req, res) => {
    const user = await userModel.findById(req.user._id);
    for (let item of req.body.topic) {
        if (!user.topics.includes(item)) {
            user.topics.push(item);
        }
    }
    user.save();
    const topicToSearch = req.body.topic[req.body.topic.length - 1];
    const currentDate = new Date();
    axios({
        method: "get",
        url: `https://newsapi.org/v2/everything?q=${topicToSearch}&from=${currentDate
            .toISOString()
            .substring(
                0,
                10
            )}&to=${currentDate.toISOString()}&pageSize=${1}&language=en&apiKey=${
            process.env.newsKey
        }`,
    }).then(({ data }) => {
        res.status(201).send(data);
    });
});

router.delete("/deletetopic", checkUserExists, async (req, res) => {
    userModel
        .findByIdAndUpdate(req.user, {
            $pull: {
                topics: req.body.topic,
            },
        })
        .exec((err, success) => {
            if (err) {
                return console.log(err);
            } else {
                res.status(201).send("successfully deleted");
            }
        });
});

module.exports = {
    userLibraryRoute: router,
};
