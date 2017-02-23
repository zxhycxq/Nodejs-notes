/*
var exec = require('child_process').exec;

function start(response) {
    console.log("start开始");
    // var content="空的";
    exec("ls -lah",function (error,stdout,stderr) {
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();
        // content = stdout;
    });
    // return content;
    /!*function sleep(millisSeconds){
        var startTime=new Date().getTime();
        while (new Date().getTime()<startTime+millisSeconds);
    };
    sleep(10000);*!/
    // return "开始，哈，开始";
}
function upload(response) {
    console.log("upload");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("结束了");
    response.end();
    // return "哈，结束";
}

exports.start = start;
exports.upload = upload;
*/

var exec = require("child_process").exec;

function start(response) {
    console.log("Request handler 'start' was called.");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

   /* exec("ls -lah", function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });*/
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;
