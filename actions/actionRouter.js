const express = require('express')
const action = require('../data/helpers/actionModel')
const router = express.Router()

router.use(express.json())

//GET actions all and by ID

router.get('/', (req,res) =>{

})

module.exports = router