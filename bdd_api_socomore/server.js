// Imports
let express = require('express');
let bodyParser = require('body-parser');
let apiRouter = require('./apiRouter').router;

// Instantiate server
let server = express();

//Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Configure routes
server.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour sur mon server</h1>');
});

server.use('/api/', apiRouter);

// Launch server
server.listen(8080, function() {
console.log('A vos ordre Chef :)');
});
