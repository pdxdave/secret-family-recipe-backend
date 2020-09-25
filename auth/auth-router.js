const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config/secrets')
const Users = require('../users/users-model')

// CREATE NEW USER
router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash;

    Users.add(user)
    .then(saved => {
        res.status(201).json(saved)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

// LOGIN USER
router.post('/login', (req, res) => {
    let {username, password} = req.body;

    Users.findBy({username})
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                const token = generateToken(user)
                res.status(200).json({
                    message: `Hello ${user.username}` , token
                })
            } else {
                res.status(401).json({
                    message: "The credentials are not valid"
                })
            }
        })
        .catch(error => {
            res.status(500).json(error)
    })
})


// TOKEN FUNCTION
function generateToken(user){
    const payload = {
        subject: user.id,
        username: user.username
    };

    const options = {
        expiresIn: "1d"
    };

    const token = jwt.sign(payload, secret.jwtSecret, options);

    return token;
}

module.exports = router;