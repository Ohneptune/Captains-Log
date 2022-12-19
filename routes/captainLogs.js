const Logs = require('../models/logs');
const express = require('express');

const router = express.Router();

router.get('/', (req,res)=>{
    Logs.find({})
     .then((logs) =>{
        res.render("Index", { logs });
     })
     .catch((error) => {
        console.log(error);
        res.json({ error });
     })
})
router.get('/new', (req, res) =>{
    res.render('New')
})

router.post('/', (req, res) =>{
    req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false
     Logs.create(req.body)
       .then((logs)=>{
        res.redirect('/logs')
       })
       .catch((error) =>{
        console.log(error);
        res.json({ error });
       })
})

router.get('/:id', (req, res) =>{
   Logs.findById(req.params.id)
    .then((log)=>{
        res.render('Show', {log})
    }).catch((error) =>{
        console.log(error);
        res.json({ error });
    })
})

router.get('/:id/edit', (req, res)=> {
    Logs.findById(req.params.id)
    .then((log) =>{
      res.render('Edit', {log})
    })
    .catch((error) => {
        console.log(error);
        res.json({ error });
      });
})

router.put('/:id', (req,res) =>{
    const id = req.params.id
    req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false
    Logs.findByIdAndUpdate(id, req.body, {new: true})
    .then((log)=>{
        res.redirect(`/logs`)
    })
    .catch((error) =>{
        console.log(error);
        res.json({ error });
     })
})


router.delete('/:id', (req,res) =>{
   Logs.findByIdAndRemove(req.params.id)
     .then((log)=>{
        res.redirect('/logs')
     }).catch((error) =>{
        console.log(error);
        res.json({ error });
     })
})


module.exports = router