const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json())
require('dotenv').config();


const username = process.env.TOKEN_SECRET_USER || 'api';
const password = process.env.TOKEN_SECRET_PASSWORD || 'password';
const secretkey = process.env.ACCESS_TOKEN_SECRET || '1132146579823165';
const expirein =process.env.TOKEN_EXPIRE || '3600s';

router.post("/:uid/:pwd", (req, res, next) => {

console.log(req.params.uid);
console.log(username);
console.log(req.params.pwd);
console.log(password);
if (username == req.params.uid) {
    if(password == req.params.pwd) {
        const username = req.params.uid;
        const accessToken = jwt.sign({data: username}, secretkey, { expiresIn: expirein });
        res.json({ accessToken: accessToken});
    } else {
        res.status(500).send('Unautorized');
    }
} else {
		return res.status(400).send('Unautorized');
}

next ();

});


module.exports = router;
