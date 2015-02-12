var express = require('express');
var router = express.Router();

// catch 404 and forward to error handler
router.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
router.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('pages/error', {
    title: 'Error (((;OAO)))',
    message: err.message,
    error: err
  });
});

module.exports = router;
