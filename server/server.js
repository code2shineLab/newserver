const express = require("express");
const bodyParser = require("body-parser") ;
const cors = require("cors")
const PORT = process.env.PORT || 3000;
const app = express();
const api = require("./route/api");
app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);

app.get('/', (req , res)=>{
  res.send("HEY I AM YOUR BACKEND SERVER").status(200);
});

app.listen(PORT, () =>{
  console.log(`Server Running on localhost:${PORT}`);
})