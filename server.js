const express     = require("express");
const app         = express();
var mongo         = require('mongodb');


app.use('/', express.static('dist/leave-message'));

app.listen((process.env.PORT||8080), ()=>{
    console.log("App is started and listening to port 8080");
})

