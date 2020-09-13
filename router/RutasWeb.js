const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
  //res.send('Mi respuesta desde express');
  res.render('index',{titulo: 'Mi titulo dinamico'});
});

router.get('/servicios',(req, res)=>{
  //res.send('Mi respuesta desde servicios');
  res.render('servicios',{titulo: 'Este es un mensaje dinamico de la pagina de sercios'});
});

module.exports = router;