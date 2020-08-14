const router = require("express").Router();
const { userModel } = require("../models/User");

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
    res.status(201).send("topic stored");
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
                console.log(err);
            } else {
                console.log(success);
            }
        });
});

module.exports = {
    userLibraryRoute: router,
};
