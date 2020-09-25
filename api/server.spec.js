const request = require('supertest');

const server = require('./server');

describe("server", () => {
    describe("index", () => {
        it("should respond with a 200 status", async() => {
            const res = await request(server)
                .get('/')

            expect(res.status).toBe(200);
        });

        it("should respond with JSON from index", async() => {
            const outcome = {message: "This is a test page"};
            const res = await request(server).get("/");

            expect(res.body).toEqual(outcome);
        });

        it("should respond with application/json", async() => {
            const res = await request(server).get("/")
            
            expect(res.type).toEqual("application/json")
        })

    });
});