var chalk = require('chalk'),
    express = require('express'),
    app = express();

var port = 3004;

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log("le serveur ecoute le port: ",port);
});