const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use(express.json()); //middleware pone el json en el req.body
app.use(userRouter);

module.exports = app;