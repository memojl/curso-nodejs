const express = require('express');
const app = express();

require('dotenv').config()
//const port = 3000;
const PORT = process.env.PORT || 3000;

//Conexion a Base de datos
const mongoose = require('mongoose');

//const user = 'pruebas_memo';
//const password = 'ijzoT9QEsVlOlmrD';
//const dbname = 'veterinaria';

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.emcqd.gcp.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri, 
  {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(()=>console.log('Base de datos conectada'))
.catch(e => console.log(e));

// Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.use(express.static(__dirname + "/public"));

//Rutas Web
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));


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