var express = require('express');
var router = express.Router();

// respond with "Hello World!" on the homepage
router.get('/', function (req, res) {
  res.render('pages/index', {title: 'Test for title'});
});

module.exports = router;
