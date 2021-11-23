var express = require('express');
var router = express.Router();

/* GET users page. */
router.get('/users', function(req, res, next) {
  res.render('users', {
  });
});
router.get('/', function(req, res, next) {
  res.render('index',{title:'Welcome to the Project Tracker'});
});

module.exports = router;