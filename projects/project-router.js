const express = require('express')

const router = express.Router()

const Proj = require('./project-model')


router.get('/', (req, res) => {
    Proj.getProject()
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({
            message: "There was an error retrieving project data"
        })
    })
})

router.get('/resources', (req, res) => {
    Proj.getResource()
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({
            message: "There was an error retrieving resource data"
        })
    })
})

router.get('/tasks', (req, res) => {
    Proj.getTask()
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({
            message: "There was an error retrieving task data"
        })
    })
})

router.post('/', (req, res) => {
    
})

router.post('/resources', (req, res) => {
    
})

router.post('/tasks', (req, res) => {
    
})

// router.get('/:id', (req, res) => {
    
// })

// router.get('/:id/resources', (req, res) => {
    
// })

// router.get('/:id/tasks', (req, res) => {
    
// })

module.exports = router