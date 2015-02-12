var express = require('express');
var router = express.Router();

/* GET users listing. */
router
  .get('/', function(req, res, next) {
    res.render('pages/users', {
      title: 'users',
      uid: 'not found'
    });
  })
  .get('/:uid', function(req, res, next) {
    res.render('pages/users', {
      title: 'users',
      uid: req.params.uid
    });
  });

module.exports = router;
