var friendArray = require("../app/friends");

module.exports = function (app) {
    app.get("/api/friends", (req, res) => {
        res.json(friendArray);
    });

    app.post("/api/friends", (req, res) => {
        console.log(req.body);
        friendArray.push(req.body);
        res.json(true);
    });

}