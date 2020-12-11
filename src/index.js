const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use (express.json());

app.use((req,resp,next) => {
    resp.header('Access-Control-Allow-Origin', '*')
    next()
})
app.use(routes);

app.listen(3333);
