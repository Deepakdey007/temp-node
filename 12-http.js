const http = require('http');

const server = http.createServer((req,res) => {
    // console.log(req);
    if(req.url === '/') {
        res.end('Welcome to the page home');
    }
    if(req.url === '/about') {
        res.end('here is our short story')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We Can't seem to find the page your are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)