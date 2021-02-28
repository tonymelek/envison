const { Router } = require('express');
const router = Router();
const mongojs = require("mongojs");
const fs = require('fs')
const path = require('path')

//define database connection URL and collections
const databaseUrl = process.env.databaseUrl;
const collections = ["sample-data"];

//Connect to database
const db = mongojs(databaseUrl, collections);
db.on("error", error => {
    console.log("Database Error:", error);
});
//APIs
router.get("/save", (req, res) => {
    db['sample-data'].find({ direction: { $not: /^$/ } }, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            fs.writeFile(path.join(__dirname, '../json', 'temp.json'), JSON.stringify(data, null, 2), (err, data) => {
                if (err) {
                    console.log(err);

                }

            })

        }
    });
    res.send({ msg: 'saved data' })
});
router.get("/all", (req, res) => {
    const data = fs.readFileSync(path.join(__dirname, '../json/temp.json'))
    res.send(JSON.parse(data))
});
//export router
module.exports = router;