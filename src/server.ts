const http = require('http');

http
  .createServer((req: any, res: any) => {
    console.log(req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
  })
  .listen(3000);
