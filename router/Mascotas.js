const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');

router.get('/', async (req, res)=>{
    try {
        const arrayMascotasDB = await Mascota.find();
        //console.log(arrayMascotasDB);

        res.render('mascotas',{
            arrayMascotas: arrayMascotasDB
            //arrayMascotas: [
            //    { id: 'bhsgdshxx', nombre: 'Gato', descripcion: 'Gato descripcion'},
            //    { id: 'hdgdsgdsh', nombre: 'Perro', descripcion: 'Perro descripcion'}
            //]
          });
      
    } catch (error) {
        console.log(error);
    }

});


//FORMULARIO
router.get('/crear', (req, res)=>{
    res.render('crear')
})

//GUARDAR
router.post('/', async(req, res)=>{
    const body = req.body;
    console.log(body); 
    try {
        await Mascota.create(body)
        res.redirect('/mascotas')
    } catch (error) {
        console.log('error', error)
    }   
})

//EDITAR
router.get('/:id', async(req, res)=>{
    const id = req.params.id;
    try {
        const mascotaDB = await Mascota.findOne({ _id:id })//console.log(mascotaDB)
        res.render('detalle', {
            mascota: mascotaDB,
            error: false
        })
    } catch (error) {
        console.log(error)
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el id selecionado'
        })
    }
})

//ELIMINAR
router.delete('/:id', async(req,res)=>{
    const id = req.params.id;
    try {
        const mascotaDB = await Mascota.findByIdAndDelete({ _id:id })
        if(mascotaDB){
            res.json({
                estado: true,
                mensaje: 'eliminado!'
            })
        }else{
            res.json({
                estado: false,
                mensaje: 'Fallo eliminado!'
            })
        }

    } catch (error) {
        console.log(error)
    }

})


module.exports = router;