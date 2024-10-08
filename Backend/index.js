var http = require('http');
var fs = require('fs');


http.createServer(function (request, response) {

    fs.open('new.html', 'w', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    fs.writeFile('new.html', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('replaced!');
    });

    fs.appendFile('new.html', 'Hello wold!', function (err) {
        if (err) throw err;
        console.log('upadated!');
      });

   
    fs.readFile('new.html', function (err, data) {  
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        return response.end();
    });

    fs.rename('new.html', 'hello.html', function (err) {
        if (err) throw err;
        console.log('filename changed!');
    });

    // fs.unlink('new.html', function (err) {
    //     if (err) throw err;
    //     console.log('File deleted!');
    //   });

}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');
