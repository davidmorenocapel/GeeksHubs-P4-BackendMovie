const router = require('express').Router();
const{ Cine } = require('../models/index.js');


router.get('/', (req,res)=>{
    Cine.findAll({
       
    })
    .then(categories => res.send(categories))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los productos'})
    })
    
})

router.get('/name/:name',(req,res) =>{
    Cine.findOne({
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


router.get('/location/:location',(req,res) =>{
    Cine.findOne({
        where:{
            provincia:req.params.location
        }
    })
    .then(product => res.send(product))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al buscar el producto'})
    })
})

