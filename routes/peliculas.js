const router =require('express').Router();
const { pelicula } =require('../models/index.js')

router.get('/',(req,res)=>{
    Category.findAll({
        include:[pelicula]
    })
    .then(pelicula => res.send(pelicula))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los productos'})
    })
})

module.exports=router;