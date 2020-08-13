const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        proxy("/auth/google", {
            target: "http://localhost:8080",
        })
    );
    app.use(
        proxy("/api/user", {
            target: "http://localhost:8080",
        })
    );
    app.use(
        proxy("/api/logout", {
            target: "http://localhost:8080",
        })
    );
    app.use(
        proxy("/geo", {
            target: "http://localhost:8080",
        })
    );
    app.use(
        proxy("/news", {
            target: "http://localhost:8080",
        })
    );
    app.use(
        proxy("/addarticle", {
            target: "http://localhost:8080",
        })
    );
    app.use(
        proxy("/articles", {
            target: "http://localhost:8080",
        })
    );
};
