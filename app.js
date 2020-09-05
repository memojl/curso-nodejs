const express = require('express');
const app = express();

const port = 3000;

// Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');


app.use(express.static(__dirname + "/public"));

app.get('/',(req, res)=>{
  //res.send('Mi respuesta desde express');
  res.render('index',{titulo: 'Mi titulo dinamico'});
});

app.get('/servicios',(req, res)=>{
  //res.send('Mi respuesta desde servicios');
  res.render('servicios',{titulo: 'Este es un mensaje dinamico de la pagina de sercios'});
});

app.use((req,res,next)=>{
  //res.status(404).sendFile(__dirname + '/public/404.html');
  res.status(404).render('404', {
    titulo: '404',
    msj: 'Página no encontrada'
  });
});

/*
app.listen(port, ()=>{
  console.log('Servidor a su servicio en el puerto', port);
})
*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});

/*SERVIDOR NODE JS
const http = require('http');
const port = 3000;//const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Nueva version de la pagina web.</h1>");
});

server.listen(port, () => {
  console.log(`El servidor esta corriendo - Port: ${port}`);
});
*/