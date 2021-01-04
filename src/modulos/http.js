const http = require ('http');
const port = 3000

const router = (req,res) => {
      console.log('nueva peticion');
      console.log(req.url);

      switch(req.url){
            case '/':
                  res.writeHead(201, { 'Content-Type': 'text/html; charset=utf-8'});
                  res.write('<h1>ve a: <a href="/hola">Aquí</a></h1>');
                  res.end();
                  break;
            case '/hola':
                  res.writeHead(201, { 'Content-Type': 'text/plain; charset=utf-8'});
                  res.write('hola niño');
                  res.end();
                  break;
            default:
                  res.write('Error 404: no se que quieres');
                  res.end();
      }
      // res.writeHead(201, { 'Content-Type': 'text/plain'});

      // res.write('hola salio bien');

      // res.end();
}

http.createServer(router).listen(port);
console.log('escuechando http en el puerto: '+port);