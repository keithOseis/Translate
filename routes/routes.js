const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());
require('dotenv').config();
const{ exec } = require('child_process');

router.get('/translate', (req, res) =>{
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
     res.send(lang);

});

});

module.exports = router;
