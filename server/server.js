const http = require("http");
const fs = require("fs");
const url = require("url");
const queryString =require("querystring")
const{MongoClient} = require("mongodb")
//conect mongodb//
const client = new MongoClient("")
const app=http.createServer((req,res)=>{
    const path = url.parse(req.url);
    console.log(path);
    if(path.pathname == "/"){
        res.writeHead(200,{"Content-Type" : "text/html"});
        res.end(fs.readFileSync("../client/index.html"));
    }
    else if(path.pathname == "/js/index.js"){
        res.writeHead(200,{"Content-Type" : "text/js"});
        res.end(fs.readFileSync("../client/js/index.js"));
    }
    else if(path.pathname == "/css/style.css"){
        res.writeHead(200,{"Content-Type" : "text/css"});
        res.end(fs.readFileSync("../client/css/style.css"));
    
    }
    else if(path.pathname == "/css/doner.css"){
        res.writeHead(200,{"Content-Type" : "text/css"});
        res.end(fs.readFileSync("../client/css/doner.css"));
    
    }
    else if(path.pathname == "/add"){
        res.writeHead(200,{"Content-Type" : "text/html"});
        res.end(fs.readFileSync("../client/pages/addDoners.html"));
    }
    if(req.method == "post" && path.pathname == "/submit") {
        let body = "";
        req.on("data",(chunks)=>{
            console.log(chanks);
            body+=chanks.toString();
            console.log(body);
        })
    }
});
app.listen(3001);