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
    res.render("./landing");
});




app.listen(process.env.PORT || 8080, () => console.log("server alive and kickin!"));