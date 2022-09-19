const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const hbs = require("hbs");
// public static path

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/views/partials");

app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);


app.get("", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");

});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("404error", {
        errorMsg: "Oops Page Not Found"
    });
});


app.listen(port, () => {
    console.log(`this ${port} port number is running properly`);
});