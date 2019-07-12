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
            res.status(500).json({message: 'whoops something went wrong, check console log'})
            console.log(err)
        })
})


module.exports = router