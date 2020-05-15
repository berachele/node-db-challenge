const express = require('express')

const ProjectRouter = require('./projects/project-router')

const server = exporess()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({
        api: "Running Successfully!"
    })
})

server.use('/api/projects', ProjectRouter)

module.exports = server