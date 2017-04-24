const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router/routes/route');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 8080;


app.use('/api', router);


app.listen(port);
// console.log(`Server is listening on ${port}`);
