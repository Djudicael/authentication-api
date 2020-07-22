const app = require('./src/app.js');
//TODO: create .env
const port = process.env.PORT || 3001;


const server = require('http').createServer(app);

server.listen(port, function () {
    console.log('Express server listening on port ' + port);
});