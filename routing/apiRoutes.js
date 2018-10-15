const path = require("path");
const fs = require("fs");
const express = require("express");


const app = express();

const friendArray = require("../app/friends");

module.exports = function (app) {
    app.get("/api/friends", (req, res) => {
        res.json(friendArray);
    });

    app.post("/api/friends", (req, res) => {
        console.log(res.body);
        res.json(true);
    });

}