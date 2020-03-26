const router =require('express').Router();
const { Actor } =require('../models/index.js')

router.get('/',(req,res)=>{
    Actor.findAll({
    })
    .then(orders => res.send(orders))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los Actores'})
    })
})
router.get('/:id',(req,res)=>{
    Actor.findOne({
        where:{id:rec.params.id}      
    })
    .then(orders => res.send(orders))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los Actores'})
    })
})
router.get('/name/:name',(req,res) =>{
    Actor.findOne({
        where:{
            actor:req.params.name
        }
    })
    .then(product => res.send(product))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al buscar el producto'})
    })
})
module.exports=router;