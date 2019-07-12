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
        })
})

//PUT

router.put('/:id', validateAction, async (req, res)=>{
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

// async function validateActionID(req,res,next){
//     const {id} = req.params;
//     const validAction = await action.get(id);

//     if(!validAction){
//         res.status(400).json({message:'Invalid Action ID'})
//     } else {
//         req.action = validAction;
//         next();
//     }
// }


function validateAction(req,res,next){
    const postContent = req.body

    if(postContent.description && postContent.notes){
        if(postContent.description.length >=128){
            res.status(400).json({message:'Description too long, keep it under 128 characters'})
        } else{
            next();
        }
    } else {
        res.status(400).json({message:'description and notes fields required'})
    }
}


// Middleware seems to time out and not work like its identical projectRouter counterpart


module.exports = router