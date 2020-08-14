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
        proxy("/addtopic", {
            target: "http://localhost:8080",
        })
    );
    app.use(
        proxy("/topics", {
            target: "http://localhost:8080",
        })
    );
    app.use(
        proxy("/deletetopic", {
            target: "http://localhost:8080",
        })
    );
};
