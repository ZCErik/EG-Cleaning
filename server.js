
var http    = require('http'),
    app     = require('./config/express');
    // db = require('./config/database');


//Default engine
// app.set("view engine", "ejs");


http.createServer(app).listen(3000, function() {
    console.log('Server listening on: ' + this.address().port);
});