const router =require('express').Router();
const { pelicula } =require('../models/index.js')

router.get('/', (req,res)=>{
    pelicula.findAll({
       
    })
    .then(categories => res.send(categories))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los productos'})
    })
    
})

router.get('/:id',(req,res)=>{
    pelicula.findOne({
        where:{
            id:req.params.id
        }
    })
    .then(product => res.send(product))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al buscar el producto'})
    })
})

router.get('/name/:name',(req,res) =>{
    pelicula.findOne({
        where:{
            nombre:req.params.name
        }
    })
    .then(product => res.send(product))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al buscar el producto'})
    })
})



module.exports=router;