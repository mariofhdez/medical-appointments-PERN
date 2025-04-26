const express = require('express');
const routes = require('./routes/index');
const LoggerMiddleware = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(LoggerMiddleware);
app.use(errorHandler);

app.use('/api', routes);

app.get('/{any}', (req,res) => {
    res.send('Bienvenido');
})

module.exports = app;