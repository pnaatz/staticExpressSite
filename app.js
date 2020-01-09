var express = require("express");
var app = express();
var path = require("path");
var router = express.Router();

//Set up for first route
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + "/Views/index.html"));
});

//Set up for about routing
app.get('/about', function(req,res){
    res.sendFile(path.join(__dirname + "/Views/about.html"));
});

//Set up for about routing
app.get('/contact', function(req,res){
    res.sendFile(path.join(__dirname + "/Views/contact.html"));
});

app.use(express.static(__dirname + "/Views"));

app.use('/', router);

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});