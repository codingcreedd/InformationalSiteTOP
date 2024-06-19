const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    console.log('request made from ', req.url, ' with a ', req.method, 'method.');
    
    let path = '';

    switch(req.url) {
        case '/':
            path = 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path = 'about.html';
            res.statusCode = 200;
            break;
        case '/contact-me':
            path = 'contact-me.html';
            res.statusCode = 200;
            break;
        default:
            path = '404.html';
            res.statusCode = 404;
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
            return;
    }

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
        }
        else {
            res.end(data);
        }
    })

})

server.listen(8080, 'localhost', () => {
    console.log('server listening');
})