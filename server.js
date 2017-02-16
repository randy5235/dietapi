'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router/routes/route');



app.use(bodyParser.json());

let port = process.env.PORT || 8080



app.use('/api', router);


app.listen(port);
console.log(`Server is listening on ${port}`);
