const http = require("http");
const fs = require("fs");

  
http.createServer(function(request, response){
     
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
     
    if(request.url === "/home" || request.url === "/"){
        fs.access(__dirname + "/index.html", fs.constants.R_OK, err => {
            // если произошла ошибка - отправляем статусный код 404
            if(err){
                response.statusCode = 404;
                response.end("Resourse not found!");
            }
            else{
                fs.createReadStream(filePath).pipe(response);
            }
          });

    }
    else if(request.url == "/about"){
        response.write("<h2>About</h2>");
    }
    else if(request.url == "/contact"){
        response.write("<h2>Contacts</h2>");
    }
    else{
        response.write("<h2>Not found</h2>");
    }
    response.end();
}).listen(80);