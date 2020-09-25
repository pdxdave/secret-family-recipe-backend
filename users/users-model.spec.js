const Users = require('./users-model')
const db = require('../data/dbConfig')

describe("for the users model", () => {
    describe("add user", () => {
        
        it("should add these rockers to the db", async() => {
            await Users.add({ username: "Michael Anthony", password: "unchained"});
            await Users.add({ username: "Alex Van Halen", password: "panama"})
        
        
        const users = await db("users")
        expect(users).toHaveLength(2)

        })
    });

    beforeEach(async () => {
        await db("users").truncate();
    })
})