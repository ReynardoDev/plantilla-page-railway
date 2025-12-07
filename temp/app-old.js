const http = require('http');


http.createServer((req, res) => {

    console.log(req);

    let method = req.method;
    let url = req.url;

    console.log('Method: ' + method + ' URL: ' + url);
    res.write('Hello World!');
    res.end();

})
    .listen(8080);

console.log('Server running at http://localhost:8080/');
