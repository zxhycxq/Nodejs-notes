/*
/!*
 * @Author: anchen
 * @Date:   2017-02-23 13:27:04
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-02-23 13:29:57
 *!/

'use strict';
/!*
 var http = require("http");

 http.createServer(function (request, response) {
 response.writeHead(200, {"Content-Type": "text/plain"});
 response.write("hello world ");
 response.end();
 }).listen(8888);
 *!/

var http = require("http");
var url = require("url");

function start(route,handle) {
    function onRequest(request, response) {
        // console.log("Request received.请求接收到了");
        var pathname = url.parse(request.url).pathname;
        console.log("请求" + pathname + "接收到");

        route(handle,pathname,response);

        // response.writeHead(200, {"Content-Type": "text/plain"});
        // var content = route(handle, pathname);
        // response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen(8899);

    console.log("服务已经启动 has started.");
}
exports.start = start;



*/


var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(handle, pathname, response);
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
