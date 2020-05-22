const supertest = require('supertest')
const server = require('../server')
const db = require('../data/db-config')

afterEach(async () => {
    await db('task').truncate()
    db('resource').truncate()
    db('project').truncate()
})

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
    })

    describe('GET /resources', () => {
        it('should return an array of resources', () => {
            return supertest(server)
            .get('/api/projects/resources')
            .then(result => {
                expect(Array.isArray(result.body)).toBe(true)
            })
        })

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
        it('should return that object (array of 1)', () => {
            return supertest(server)
            .post('/api/projects')
            .send({name: "Take a break", description: "It's important, you can do this!"})
            .then(response => {
                expect(Array(response.body)).toHaveLength(1)
            })
        })
    })

    describe('POST /resources', () => {
        it('should add a new resource', () => {
            return supertest(server)
            .post('/api/projects/resources')
            .send({name: "Snacks", description: "for the nomm nummy goodness"})
            .then(response => {
                expect(response.status).toEqual(201)
            })
        })

        it('should return that object (array of 1)', () => {
            return supertest(server)
            .post('/api/projects/resources')
            .send({name: "Take a break", description: "It's important, you can do this!"})
            .then(response => {
                expect(Array(response.body)).toHaveLength(1)
            })
        })
    })

    describe('POST /tasks', () => {
        it('should add a new task', () => {
            return supertest(server)
            .post('/api/projects/tasks')
            .send({projectID: 1, description: "Test my API", notes: "Testing back end"})
            .then(response => {
                expect(response.status).toEqual(201)
            })
        })

        it('should return that object (array of 1)', () => {
            return supertest(server)
            .post('/api/projects/tasks')
            .send({name: "Test my API", description: "Testing backend"})
            .then(response => {
                expect(Array(response.body)).toHaveLength(1)
            })
        })
    })

    describe('DELETE /:id', () => {
        it('should delete a project with given id', () => {
            return supertest(server)
            .del(`/:id`)
            .end()
        })
    })

})