const supertest = require('supertest')
const server = require('../server')

describe('project-router', () => {
    it('can run the test', () => {
        expect(true).toBeTruthy()
    })

    describe('GET /', () => {
        it('should return an array', () => {
            return supertest(server)
            .get('/api/projects')
            .then(result => {
                expect(Array.isArray(result.body)).toBe(true)
            })
        })
        it.todo('should ????')
    })

    describe('GET /resources', () => {
        it('should return an array of resources', () => {
            return supertest(server)
            .get('/api/projects/resources')
            .then(result => {
                expect(Array.isArray(result.body)).toBe(true)
            })
        })

        it.todo('should ????')
    })

    describe('GET /tasks', () => {
        it('should return an array of resources', () => {
            return supertest(server)
            .get('/api/projects/tasks')
            .then(result => {
                expect(Array.isArray(result.body)).toBe(true)
            })
        })
    })

    describe('POST /', () => {
        it('should add a new project', () => {
            return supertest(server)
            .post('/api/projects')
            .send({name: "Take a break", description: "It's important, you can do this!"})
            .then(response => {
                expect(response.status).toEqual(201)
            })
        })
        it.todo('should return that object (array of 1)')
    })

    describe('POST /resources', () => {
        // it('should add a new resource', () => {
        //     return supertest(server)
        //     .post('/api/projects/resources')
        //     .send({name: "Bed", description: "for napping"})
        //     .then(response => {
        //         expect(response.status).toEqual(201)
        //     })
        // })

        it.todo('should return that object (array of 1)')
    })

    describe('POST /tasks', () => {
        it.todo('should add a new task')
        it.todo('should return that object (array of 1)')
    })

    describe('DELETE /:id', () => {
        it.todo('should delete a project with given id')
    })

})