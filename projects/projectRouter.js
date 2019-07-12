const express = require('express')
const project = require('../data/helpers/projectModel')
const action = require('../data/helpers/actionModel')
const router = express.Router()

router.use(express.json())

//GET project by ID

router.get('/:id', (req,res) =>{
    project.get(req.params.id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
})

//POST (requires name and description)

router.post('/', (req, res)=>{
    const newProject = req.body

    project.insert(newProject)
        .then( project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//POST action (requires project_id, description(128 char limit), notes(no limit))

router.post('/:id/actions', (req, res)=>{
    const newAction = req.body
    const {id} = req.params

    action.insert({project_id:id , ...newAction})
        .then( action => {
            res.status(201).json(action)
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

    project.update(id, changes)
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

    project.remove(id)
        .then( deleted => {
            res.status(204).json(deleted)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})



//Custom Middleware




module.exports = router