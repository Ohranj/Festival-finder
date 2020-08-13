const router = require("express").Router();
const { articleModel, userModel } = require("../models/User");

const checkUserExists = (req, res, next) => {
    if (!req.user) {
        res.status(401).send("User does not exist");
    }
    next();
};

router.get("/articles", checkUserExists, async (req, res) => {
    const user = await userModel.findById(req.user._id);
    res.status(200).send(user.articles);
});

router.post("/addarticle", checkUserExists, async (req, res) => {
    const user = await userModel.findById(req.user._id);
    const { title, description, urlToImage, url } = req.body;
    const newArticle = new articleModel({
        articleTitle: title,
        articleDesc: description,
        articleImg: urlToImage,
        articleUrl: url,
    });
    user.articles.push(newArticle);
    user.save();
    res.status(201).send("article stored");
});

module.exports = {
    userLibraryRoute: router,
};
