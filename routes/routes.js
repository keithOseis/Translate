const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());
require('dotenv').config();
const{ exec } = require('child_process');

const secretkey = process.env.ACCESS_TOKEN_SECRET || '11321465798231165';

router.get('/translate', authenticateToken, (req, res) =>{
   let src_lang = req.body.source;
   let tar_lang = req.body.target;
   let query_word = req.body.word;
   let command = 'trans '+ src_lang + ':' + tar_lang + ' "' + query_word + '" --brief'
   
  exec(command, (error, stdout, stderr) => {
   if (error) {
     console.log(`error: ${error.message}`);
     res.send('NIO');
     return;
     }
   if (stderr) {
     console.log(`stderr: ${stderr}`);
     res.send('NIO');
     return;
     }
     console.log(`stdout: ${stdout}`);
     //console.log(command);
     var lang ={
      tranlation: stdout
     }
     res.status(200);
     res.send(lang);

});

});


function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, secretkey, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

module.exports = router;

