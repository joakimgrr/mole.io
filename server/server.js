let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/moleio');
const db = mongoose.connection;
const port = 8002;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('connected to database')

    require('./routes/api')(app, db);

    app.listen(port, function () {
        console.log('Example app listening on port: '+port)
    })
});
