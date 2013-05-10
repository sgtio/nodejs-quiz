var HTTP = require('http');
var FS   = require('fs');
HTTP.createServer(function(req, resp) {
    if (req.method != 'GET') {                    // if not GET: Error 405
        resp.writeHead(405, {'Allow': 'GET'});
        resp.end();
        return;
    }                                    // insert "index.html" if no file name
    if (req.url.match(/\/$/)) req.url += '/index.html';
    var filepath = __dirname + '/public' + req.url;   // Add "public" directory
    FS.readFile(filepath, function(err, data) {
        if (!err) {                            // file exists: 200 OK
            resp.writeHead(200, {
                'Content-Type': 'text/html',
                'Content-Length': data.length
            }); 
            resp.end(data);
        } else {                               // file not found: Error 404
            resp.writeHead(404);
            resp.end();
        }
    });
}).listen(3000);