const express = require('express');
const bodyParser = require("body-parser");
const {v4 : uuidv4} = require("uuid");
const port = 3000;
const app = express();
const {createClient} = require('redis');
const md5 = require('md5');

const redisClient = createClient(
{
    Url:'redis://default@localhost:6379'
}
);

app.use(bodyParser.json());

app.listen(port, async ()=>{
    await redisClient.connect();
    console.log('listening on port '+port);
});

app.post("/login", (req,res)=>{
    const loginEmail = req.body.userName;
    console.log(JSON.stringify(req.body));
    console.log("loginEmail", loginEmail);
    const loginPassword = req.body.password;
    console.log("loginPassword", loginPassword);
    if (loginEmail == "fakBotEmail2@fakemail.com" && loginPassword == "P@ssw0rd"){
        const token = uuidv4();
        res.send(token);
    } else{
        res.status(401);//unauthorized
        res.send("Invalid user or password");
    }
})