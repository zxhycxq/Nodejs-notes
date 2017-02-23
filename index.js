/**
 * Created by JieYi on 2017/2/23.
 * 二月
 */

// import start from 'server';
var server = require("./server");
var router = require('./router');
var requestHandlers = require('./requestHandlers');


var handle={}
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
// var  = require('')

server.start(router.route,handle);
// var nodejs=2;
