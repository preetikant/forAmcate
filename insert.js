var http=require('http');
var fs=require('fs');
var querystring=require('querystring');
var MongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017/Test";

http.createServer(function (req,res){
    if(req.url === "/form"){
        res.writeHead(200,{'Content-Type':"text/html"});
        fs.createReadStream("./public/form.html","UTF-8").pipe(res);
    }
    if(req.method === "POST") {
        var data = "";
        req.on("data", function (chunk) {
            data += chunk;
        });
        req.on("end", function (chunk) {

            MongoClient.connect(url, function (err, db) {
                if(err) throw error;
                var q = querystring.parse(data);
                db.collection('enquiry').insertOne(q, function (err, res) {
                    if(err) throw error;
                    console.log('1 Data Successfully insert:::::::');
                    db.close();
                });
            })
        });
    }
}).listen(3067);