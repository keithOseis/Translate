const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());
require('dotenv').config();


router.get('/translate', (req, res, next) =>{
   const source = req.body.source;
   const target = req.body.target;
   const word = req.body.word;
   var spawn = require('child_process').spawn,child;
   child = spawn("trans ", source + ":" +target + " --brief " + word);
   child .stdout.on("data", function(data){
       var success = data;
       res.send(success);
   });
   child.stderr.on("data",function(data){
       var success = data;
       res.send(success);
   });
   child.on("exit",function(){
       var success = data;
       res.send(success);
   });
   child.stdin.end(); //end input

});


module.exports = router;
