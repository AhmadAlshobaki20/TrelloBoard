const express = require('express');
const todoController = require('./router/todoRoute');
const doingController = require('./router/doingRoute');
const doneController = require('./router/doneRoute');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(morgan('dev'));
// mounting process
app.use('/api/v1/todo',todoController)
app.use('/api/v1/doing',doingController)
app.use('/api/v1/done',doneController);

module.exports = app 

