const notes = require("express").Router();
const fs = require("fs");
const uuid = require("uuid")
const notes = require("./db/db.json")

// GET route responds with saved notes
notes.get('/', (req, res) => {
    console.log("Execute GET notes request");
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// API POST request
notes.post("/", (req, res) => {
    // stores new note in ob
    const newNote = {
        ...req.body,
        id: uuid(),
    };

    let data = fs.readFileSync("./db/db.json", "utf8");

    const jsonData = JSON.parse(data);

    jsonData.push(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(jsonData), (err, text) => {
        if (err) {
            console.error(err)
            return;
        }
        console.log("Awesome");
    });

    console.log("New note added successfully!")
})



module.exports = router;
   