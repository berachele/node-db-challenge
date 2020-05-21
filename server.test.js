const supertest = require('supertest')
const server = require('./server')
const db = require('./data/db-config')

// afterEach(async () => {
//     await db('project').truncate()
// })

describe('server', () => {
    it('can run the test', () => {
        expect(true).toBeTruthy()
    })

    describe('GET /', () => {
        it('should return status code 200', () => {
            return supertest(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })

        it('should return {api: "Running Successfully!"}', () => {
            return supertest(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({api: "Running Successfully!"})
            })

        })
    })
})