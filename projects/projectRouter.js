const express = require('express')
const project = require('../data/helpers/projectModel')
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

//POST

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

//PUT


//DELETE


//Custom Middleware




module.exports = router