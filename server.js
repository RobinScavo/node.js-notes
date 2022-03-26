// In node.js a server is created manually (unlike PHP frameworks with tools like Apache)

const http = require('http'); //http is a core module

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-type', 'text/html');

    res.write('<p>hello, ninjas</p>');
    res.write('<p>hello again, ninjas</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})

// What is localhost? What are port numbers?

    // 1) Localhost simulates a domain name on the web with a loop back IP address: 127.0.0.1
    // 2) Port numbers are like doors into a computer. Apps like skype and discord have
    // designated ports. 3000 is a common port to use for development.
