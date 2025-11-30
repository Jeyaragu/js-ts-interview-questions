const express = require('express');
const bodyParse = require('body-parser');
const routes = require('./routes/assets-routes')
const app = express()

app.listen(3000, () => {
    console.log('Server started with port', 3000)
});

app.use(bodyParse.json());
app.use('/api', routes);