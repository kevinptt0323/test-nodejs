/* jslint node: true */
"use strict";
var
  express = require('express'),
  path = require('path'),
  fs = require('fs'),
  app = express()
;

// setup server, listen on unix socket
var
  socket = '/tmp/' + process.env.USER + '.dev.nodeapp.com.sock',
  mask = process.umask(0)
;
if (fs.existsSync(socket)) {
  fs.unlinkSync(socket);
}
var server = app.listen(socket, function () {
  if (mask) {
    process.umask(mask);
    mask = null;
  }
  console.log('Example app listening at %s', server.address());
});

// view engine setup
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// routers
var index = require('./routes/index'),
    users = require('./routes/users'),
    error = require('./routes/error');

app.use('/', index);
app.use('/users', users);
app.use(express.static(__dirname + '/public'));
app.use(error);

