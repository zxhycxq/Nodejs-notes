/*
/!*function route(pathname){
 console.log("请求是来自"+pathname);
 }*!/

function route(handle, pathname,response) {
    console.log("来自的请求" + pathname);
    if (typeof handle[pathname] === 'function') {
         handle[pathname](response);
        // return handle[pathname](response);
    } else {
        console.log("没有请求啊" + pathname);
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.end();
        // return "404 找不到了";
    }
}

exports.route = route;
*/
function route(handle, pathname, response) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;
