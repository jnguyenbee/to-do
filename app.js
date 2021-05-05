const express = require("express");
const dates = require(__dirname + "/date.js");

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const items = []

app.get("/", function (req, res) {
    let day = dates.getDate();
    res.render('list', { kindOfDay: day, newListItems: items });
})

app.post("/", function (req, res) {
    let item = req.body.item;

    items.push(item);
    res.redirect("/");
})
app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000");
})

