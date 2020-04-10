var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://users:code2shineusers@code2shine-rqiqh.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(uri, (err, db)=> {
  if (err) throw err;
  var dbo = db.db("signupdb");
  console.log("Database created!");
  dbo.createCollection("users", (err, res)=> {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

