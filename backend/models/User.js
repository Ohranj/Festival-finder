const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    googleUsername: String,
    googleProfileImg: String,
    googleEmail: String,
    name: String,
    articles: [],
});

const articleSchema = new Schema({
    articleTitle: String,
    articleDesc: String,
    articleImg: String,
    articleUrl: String,
});

const User = mongoose.model("users", userSchema);
const Article = mongoose.model("article", articleSchema);

module.exports = {
    userModel: User,
    articleModel: Article,
};
