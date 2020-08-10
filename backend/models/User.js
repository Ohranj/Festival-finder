const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    googleUsername: String,
    googleProfileImg: String,
    googleEmail: String,
    name: String,
    festivals: [],
});

const User = mongoose.model("users", userSchema);

module.exports = {
    userModel: User,
};
