const router = require('express').Router();
const users = require('../db/users.json');

router.get('/users', (req, res) => {
    res.json(users);
})
.get('/users', (req, res) => {
    res.status(200).json(users);
})
.get('/users/:email', (req, res) => {
    let user = users.find(u => u.email == req.params.email);
    
    if(user) res.send(user);
    else res.status(404).send({error: 'No existe'});
})
.post('/users', (req, res) => {
    // req.body
    
})


module.exports = router;