const http=require("http");
const fs=require("fs");
const url=require("url");
const app= http.createServer((req,res)=>{
    const newUrl=url.parse(req.url);
    console.log(newUrl);
    if (newUrl=="/"){
        fs.readFile("./page/index.html",(error,data)=>{
            if(error){
                res.writeHead(404,{"Content-type":"text/html"});
                return res.end("page not found");
            }
                res.writeHead(200,{"Content-type":"text/html"});
                res.write(data);
                res.end();
        });
    }
})
app.listen(3001);