const express = require("express");
const bodyParser = require("body-parser");
const port= 5000;

const users= require('./routes/api/users');
const profiles= require('./routes/api/profiles');

const mongoose = require('mongoose');
const db = require('./config/key').mongoURI;
const passport = require('passport');
const app =express();


mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true, },(err,db)=>{
	console.log('connect')
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users",users);
app.use("/api/profiles",profiles);


app.listen(port,()=>{
	console.log('success,port:'+port);
})





