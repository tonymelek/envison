const { Router } = require('express');
const router = Router();
const mongojs = require("mongojs");

//define database connection URL and collections
const databaseUrl = process.env.databaseUrl;
const collections = ["sample-data"];

//Connect to database
const db = mongojs(databaseUrl, collections);
db.on("error", error => {
    console.log("Database Error:", error);
});
//APIs
router.get("/all", (req, res) => {
    db['sample-data'].find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});

//export router
module.exports = router;