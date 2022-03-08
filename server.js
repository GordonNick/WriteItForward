const express       = require("express");
const app           = express();
const bodyParser    = require("body-parser")
var   MongoClient   = require('mongodb').MongoClient;
var   url           = "mongodb://localhost:8081/mydb";
var   db;

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

MongoClient.connect(url, function(err,client){
    if(err) throw err;
    console.log("Mongodb");
    db = client.db('mydb');
    console.log(db);
});

app.use('/', express.static('dist/leave-message'));

//Testing
app.get('/api/test', function(req,res) {
    res.send({"dog":"woof","cat":"meow"})
})

//fetch latest data from MongoDB collection and display it as title
app.get('/api/db', function(req,res){
    //console.log(req.body)
    //temp = JSON.stringify(req.body)
    db.collection('people').findOne({}, function (err, result) {
        if (err) throw err;
        console.log(result.quote);
        res.send(result.quote);
    });
})

app.post('/api/db', function(req,res){
    db.collection('people').insertOne(req.body, function (err, result) {
    if (err)
        console.log('Error');
    else
        res.header({'Content-Type':'text/plain'})
        res.send('Success');
    });
})

app.listen((process.env.PORT||8080), ()=>{
    console.log("App is started and listening to http://localhost:8080/");
})


