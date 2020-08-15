const router = require("express").Router();
const passport = require("passport");

router.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);

router.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
        res.redirect("/mytopics");
    }
);

router.get("/api/user", (req, res) => {
    res.send(req.user);
});

router.get("/api/logout", (req, res) => {
    req.logout();
    req.session = null;
    res.redirect("/");
});

module.exports = {
    authRoutes: router,
};
