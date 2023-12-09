const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const items = [];

app.use("/static", express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get('/',(req, res) => {
    res.render("todo.ejs", {listItems: items});
});

app.post('/', (req, res) => {
    if (req.body.content.trim() != "") {
	    items.push(req.body.content);
    }
    res.redirect("/");
});

app.listen(3000, () => console.log("Server Up and running"));
