const path = require("path");
const fs = require("fs");

const friendScoreArray = [];

module.exports = function (app){
    app.get("/api/")
}

app.get('/api/table-link', (req, res) => {
    return res.json(tableArray);
});