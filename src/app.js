const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const hbs =require('hbs');

// console.log(path.join(__dirname, "../public"));
const staticpath = path.join(__dirname, "../public");

const views_path = path.join(__dirname, "../views");
const nav_path = path.join(__dirname, "../views/partials");

// console.log(templates_path);
// const footer_path  = path.join(__dirname, "../views/partials")

app.set('view engine', 'hbs');


app.set('views ', views_path);
hbs.registerPartials(nav_path);
// hbs.registerPartials

app.use(express.static(staticpath));


// routing 
app.get("", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("404");
});

app.listen(port, () => {
    console.log(`LISTEN TO THE POST OF ${port}`);
});