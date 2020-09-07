const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

//handlebars setup
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

//MIDDLEWARE
app.use(express.static("./public"));
app.use(express.static(__dirname));
app.use(express.urlencoded({extended:false}));

/////SETTING UP ROUTES/////

//slash GET request
app.get("/", (req, res)=>{
    res.render("./home");
});

app.get("/home", (req, res)=>{
    // console.log("I am home!");
    res.render("home");
});

app.get("/aboutme", (req, res)=>{
    res.render("aboutme");
});

app.get("/contact", (req, res)=>{
    res.render("contact");
});

app.get("/portfolio", (req, res)=>{
    res.render("portfolio");
});

app.get("/thanks", (req, res)=>{
    res.render("thanks");
});






app.listen(process.env.PORT || 8080, () => console.log("server alive and kickin!"));