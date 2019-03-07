/*
 * API Project: Request Header Parser Microservice
 * 
 * Get the IP address, preferred languages and system info for user device
 * 
 * @ input  : [base_url]/api/whoami
 * @ output : {"ipAddress": "x.x.x.x", "language":"en-US,en;q=0.5", "software":"Mozilla/5.0"}     
*/

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/api/whoami", (req, res) => {
    let output = {"ipAddress": "", "language":"", "software":""};
    output.ipAddress = req.ip;
    output.language = req.headers["accept-language"];
    output.software = req.headers["user-agent"];
    res.send(output);
});


const port = 3000;
app.listen(port, "0.0.0.0", () => {
    console.log("Server is Running on Port " + port + "...");
});