const path = require("path");

// sends user notes or index page
module.exports = (app) => {
    // GET route for note page
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/notes.html"));
    });

    // GET route for index page
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });
};

