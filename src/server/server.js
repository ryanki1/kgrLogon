const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


const api = require('./routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '../../dist/reactiveApp')));

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/reactiveApp/index.html'));
});

app.post('/api/auth', (req, res) => {
    res.send({token: '45jh3@g34!525exx=', name: 'Otto Normal'});
})

const port = process.env.PORT || '4200';

const server = http.createServer(app);

server.listen(port, () =>
   console.log(`API running on localhost ${port}`)
);
