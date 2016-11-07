let express = require('express')
let app = express()
let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/moleio');

app.get('/', function (req, res) {
  res.send('Hello World! !! !!')
})
let port = 8002;
app.listen(port, function () {
  console.log('Example app listening on port: '+port)
})
