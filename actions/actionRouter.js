const express = require('express')
const action = require('../data/helpers/actionModel')
const router = express.Router()

router.use(express.json())

//GET action by ID

router.get('/:id', (req,res) =>{
    action.get(req.params.id)
        .then(action => {
            res.status(200).json(action)
        })
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
})

//PUT

router.put('/:id', (req, res)=>{
    const { id } = req.params
    const changes = req.body

    action.update(id, changes)
        .then( updated => {
            res.status(201).json(updated)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})



//DELETE

router.delete('/:id', (req, res)=>{
    const { id } = req.params

    action.remove(id)
        .then( deleted => {
            res.status(204).json(deleted)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})



//Custom Middleware

module.exports = router