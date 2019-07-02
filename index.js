const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express(); 


app.use(express.static("./node_modules/bulma/css"));

app.use(session({secret: 'bla_bla_secret9393'}));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");


app.get('/', (req, res) => {
    const session = req.session;

    if(!session.user){
        session.user = "Anonymous user";
    }

    res.render("index", {
        message: "Hello Everybody! Time is now: " + new Date().toISOString(),
        user: session.user
    });    
}); 

app.listen(8090, () => {
    console.log('Listening on port 8090.'); 
}); 