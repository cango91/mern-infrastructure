const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const bcrypt = require('bcrypt');

async function create(req, res, next) {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);
    } catch (error) {
        res.status(400).json(error);
    }
}

function createJWT(user) {
    return jwt.sign(
        // payload
        { user },
        // secret
        process.env.SECRET,
        // options
        { expiresIn: '24h' }
    );
}

async function login(req, res, next) {
    try {
        const user = await User.findOne({
            email: req.body.email.toLowerCase(),
        });
        if (user && await bcrypt.compare(req.body.password,user.password)) {
            const token = createJWT(user);
            res.json(token);
        } else {
            throw new Error('User or password not found');
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

function checkToken(req,res, next){
    console.log('req.user: ',req.user);
    res.json(req.exp);
}

module.exports = {
    create,
    login,
    checkToken,
}