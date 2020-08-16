const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { userModel } = require("../models/User");

require("dotenv").config();

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    userModel.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.clientID,
            clientSecret: process.env.clientSecret,
            callbackURL: "/auth/google/callback",
            proxy: true,
        },
        (accessToken, refreshToken, profile, done) => {
            userModel.findOne({ googleId: profile.id }).then((existingUser) => {
                if (existingUser) {
                    done(null, existingUser);
                } else {
                    new userModel({
                        googleId: profile.id,
                        googleUsername: profile.displayName,
                        googleProfileImg: profile._json.picture,
                        googleEmail: profile._json.email,
                        name: profile.name.givenName,
                    })
                        .save()
                        .then((user) => {
                            done(null, user);
                        });
                }
            });
        }
    )
);
