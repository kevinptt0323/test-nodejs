var express = require('express')
var path = require('path')
var fs = require('fs')

var app = express()

var socket = '/tmp/' + process.env.USER + '.dev.nodeapp.com.sock'
var mask = process.umask(0)
if (fs.existsSync(socket))
    fs.unlinkSync(socket)

var index = require('./routes/index')
var users = require('./routes/users')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', index)
app.use('/users', users)
app.use(express.static(__dirname + '/public'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('pages/error', {
            title: 'Error (((;OAO)))',
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
else {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('pages/error', {
            title: 'Error',
            message: '',
            error: {}
        });
    });
}

var server = app.listen(socket, function () {
    if( mask ) {
        process.umask(mask)
        mask = null
    }
    console.log('Example app listening at %s', server.address())

})

