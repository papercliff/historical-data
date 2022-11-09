var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

var serve = serveStatic('transformed')

var server = http.createServer(
    function onRequest(req, res) {
        res.setHeader("Access-Control-Allow-Origin", null);
        serve(req, res, finalhandler(req, res))
    })

server.listen(3333)
