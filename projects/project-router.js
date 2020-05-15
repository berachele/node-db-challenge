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
    const newProj = req.body
    Proj.addProject(newProj)
    .then(success => {
        res.status(201).json({
            success: success
        })
    })
    .catch(err => {
        console.loge({err})
        res.status(500).json({
            message: "There was an error creating this project"
        })
    })
})

router.post('/resources', (req, res) => {
    const newRes = req.body
    Proj.addResource(newRes)
    .then(success => {
        res.status(201).json({
            success: success
        })
    })
    .catch(err => {
        console.loge({err})
        res.status(500).json({
            message: "There was an error creating this resource"
        })
    })
})

router.post('/tasks', (req, res) => {
    const newTask = req.body
    Proj.addTask(newTask)
    .then(success => {
        res.status(201).json({
            success: success
        })
    })
    .catch(err => {
        console.loge({err})
        res.status(500).json({
            message: "There was an error creating this task"
        })
    })
})

//stretch requests

router.get('/:id', (req, res) => {
    const id = req.params.id
    Proj.getProjectByID(id)
    .then(get => {
        res.status(200).json(get)
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({
            message: "There was an error retrieving project data"
        })
    })
})

router.get('/resources/:id', (req, res) => {
    const id = req.params.id
    Proj.getResourceByID(id)
    .then(get => {
        res.status(200).json(get)
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({
            message: "There was an error retrieving resource data"
        })
    })
})

router.get('/tasks/:id', (req, res) => {
    const id = req.params.id
    Proj.getTaskByID(id)
    .then(get => {
        res.status(200).json(get)
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({
            message: "There was an error retrieving task data"
        })
    })
})

router.get('/:id/resources', (req, res) => {
    const id = req.params.id
    Proj.resourceList(id)
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({
            message: "There was an error retrieving this resource"
        })
    })
})

router.get('/:id/tasks', (req, res) => {
    const id = req.params.id
    Proj.taskList(id)
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({
            message: "There was an error retrieving this task"
        })
    })
})

module.exports = router