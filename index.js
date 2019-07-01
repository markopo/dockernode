const express = require('express');
const path = require('path');

const app = express(); 

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");


app.get('/', (req, res) => {
    res.render("index", {
        message: "Hello Everybody! Time is now: " + new Date().toISOString()
    });    
}); 

app.listen(8090, () => {
    console.log('Listening on port 8090.'); 
}); 