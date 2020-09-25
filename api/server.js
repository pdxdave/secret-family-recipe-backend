const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

// middleware
server.use(express.json())
server.use(cors())
server.use(helmet())
server.use(logger)


// routers
const authRouter = require('../auth/auth-router')
server.use('/api/auth', authRouter)

const usersRouter = require('../users/users-router')
server.use('/api/users', usersRouter)

const recipeRouter = require('../recipes/recipe-router')
server.use('/api/recipes', recipeRouter)



// test page
server.get('/', (req, res) => {
    res.send({message: "This is a test page"})
})

function logger(req, res, next){
    console.log(`${req.method} request at ${req.url}`)
    next()
}

module.exports = server;