/*
 * @Author: anchen
 * @Date:   2017-02-23 13:27:04
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-02-23 13:29:57
 */

'use strict';
/*
 var http = require("http");

 http.createServer(function (request, response) {
 response.writeHead(200, {"Content-Type": "text/plain"});
 response.write("hello world ");
 response.end();
 }).listen(8888);
 */

var http = require("http");

function start() {
    function onRequest(request, response) {
        console.log("Request received.请求接收到了");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(2222);

    console.log("服务已经启动 has started.");
}
exports.start =start;



