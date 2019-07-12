const express = require('express');

const router = express.Router();
const actionRouter = require('./actions/actionRouter');
const projectRouter = require('./projects/projectRouter')

router.use('/actions', actionRouter)
router.use('/projects', projectRouter)

module.exports = router;