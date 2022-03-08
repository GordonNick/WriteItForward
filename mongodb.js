var MongoClient   = require('mongodb').MongoClient;
var url           = "mongodb://localhost:8081/mydb"


MongoClient.connect(url, function(err,client){
  // if(err) throw err;
  console.log("Mongodb");
  var db = client.db('mydb');    
  console.log(db);

  db.collection('people').findOne({}, function (findErr, result) {
  if (findErr) throw findErr;
  });
  
});
