const server = require('../api/server');
const db = require('../data/dbConfig');
const request = require('supertest')

describe('register', () => {
    
    it("should give a 201 status", async () => {
        const res = await request(server)
        .post("/api/auth/register")
        .send({ username: "Eddie Van Halen", password: "Van Halen 1"})
    expect(res.status).toBe(201)
    });

    it("should add a user and return it", async() => {
        await request(server)
            .post("/api/auth/regisger")
            .send({ username: "David Lee Roth", password: "jump"})
        expect({ username: "David Lee Roth"})
    });

    beforeEach(async () => {
        await db("users").truncate()
    })
})

describe("user login", () => {

    it("should give a 200 status", async() => {
            await request(server)
                .post("/api/auth/login")
                .send({ username: "David Lee Roth", password: "jump"});
            expect(200)
    });

    it("should respond with a token", async() => {
        const res = await request(server)
            .post("/api/auth/login")
            .send({ username: "David Lee Roth", password: "jump"})
        expect(res.body.token);
    })

})